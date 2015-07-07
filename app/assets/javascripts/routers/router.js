ReadMe.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
    this.books = options.books;
    this.current_user = options.current_user;
  },

  routes: {
    "" : "homePage",
    "users/:id" : "userShow",
    "books/search": "bookSearch",
    "books/:id" : "bookShow",
    "book/new" : "bookNew",
    "book/:id" : "bookRead"

  },

  homePage: function () {
    var books = this.books;
    books.fetch();
    var view = new ReadMe.Views.LandingPage({ collection: books });
    this._swapView(view);
  },

  bookSearch: function () {
    var view = new ReadMe.Views.BookSearch({
      collection: new ReadMe.Collections.Books()
    });
    this._swapView(view);
    $('.activex').removeClass('activex');
    $('a.search').addClass('activex');
  },

  userShow: function (id) {
    var user = this.users.getOrFetch(id)
    var view = new ReadMe.Views.UserShow({ model: user });
    this._swapView(view);
    $('.activex').removeClass('activex');
    $('.home-page').addClass('activex');
  },

  bookShow: function (id) {
    var book = this.books.getOrFetch(id);
    var library = this.current_user.library_books();
    var view = new ReadMe.Views.BookShow({ model: book, collection: library });
    this._swapView(view);
  },

  bookNew: function () {
    var view = new ReadMe.Views.BookNew({ model: this.current_user });
    this._swapView(view);
    $('.activex').removeClass('activex');
    $('.upload-doc').addClass('activex');
  },

  bookRead: function (id) {
    var book = this.books.getOrFetch(id);
    var view = new ReadMe.Views.BookRead({ model: book });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
})
