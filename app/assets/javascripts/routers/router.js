ReadMe.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    // this.currentUser = new Backbone.Model.extend({ url: '/api/current_user'})
    this.users = new ReadMe.Collections.Users();
    this.books = new ReadMe.Collections.Books();
    this.current_user = this.users.getOrFetch(window.CURRENT_USER_ID);
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
    var view = new ReadMe.Views.UserShow({ model: this.current_user });
    this._swapView(view);
    $('.active').removeClass('active');
    $('.home-page').addClass('active');
  },

  bookSearch: function () {
    var view = new ReadMe.Views.BookSearch({ collection: this.books });
    this._swapView(view);
    $('.active').removeClass('active');
    $('a.search').addClass('active');
  },

  userShow: function (id) {
    var view = new ReadMe.Views.UserShow({ model: this.current_user });
    this._swapView(view);
  },

  bookShow: function (id) {
    var book = this.books.getOrFetch(id);
    var view = new ReadMe.Views.BookShow({ model: book });
    this._swapView(view);
  },

  bookNew: function () {
    var view = new ReadMe.Views.BookNew({ model: this.current_user });
    this._swapView(view);
    $('.active').removeClass('active');
    $('.upload-doc').addClass('active');
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
