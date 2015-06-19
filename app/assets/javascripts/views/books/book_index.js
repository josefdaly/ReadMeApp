ReadMe.Views.BookIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync remove', this.render)
    this.listenTo(this.collection, 'add', this.addBook)
    this.collection.each(function (book) {
      this.addBook(book);
    }.bind(this));
  },

  template: JST['books/bookIndex'],

  tagName: 'div',

  className: 'book-index',

  render: function () {
    var content = this.template({ collection: this.collection });
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

  addBook: function (book) {
    book.fetch();
    var newBook = new ReadMe.Views.BookIndexItem({
       model: book,
       template: JST['books/bookIndexItem'],
    })
    this.addSubview('ol.book-index-list', newBook);
  },
})
