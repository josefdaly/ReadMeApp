ReadMe.Views.BookSearch = Backbone.CompositeView.extend({
  initialize: function () {
    this.addBookIndex();
  },

  template: JST['search/searchHome'],

  events: {
    'keyup input.book-search' : 'handleInput'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  handleInput: function (event) {
    event.preventDefault();
    this.collection.reset();
    this.eachSubview(function (subview) {
      subview._subviews = {};
      subview.eachSubview(function (sub) {
        sub.remove();
      });
    });
    this.collection.fetch({
      url: 'api/books/search',
      data: { query: $('input.book-search').val() }
    });
  },

  addBookIndex: function () {
    var books = new ReadMe.Views.BookIndex({
      collection: this.collection
    })
    this.addSubview('div.results', books)
  }
})
