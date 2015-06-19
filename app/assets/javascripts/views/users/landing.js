ReadMe.Views.LandingPage = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addBook);
    this.collection.each(function (book) {
      this.addBook(book);
    }.bind(this));
  },

  template: JST['users/landing'],

  events: {
    'click .right' : 'clickRight',
    'click .left' : 'clickLeft'
  },

  className: 'landing-page',

  clickRight: function () {
    $('.carousel').carousel('next')
  },

  clickLeft: function () {
    $('.carousel').carousel('prev')
  },

  render: function () {
    var content = this.template({ collection: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addBook: function (book) {
    book.fetch();
    var className = 'book-index-item item';
    if(this.collection.first().id === book.id) {

      className += " active";
    }
    var newBook = new ReadMe.Views.BookIndexItem({
      model: book,
      template: JST['books/bookCarouselItem'],
      className: className
    });
    // var newBook = new ReadMe.Views.BookIndexItem({ model: book });
    this.addSubview('.book-index-list', newBook)
  }
});
