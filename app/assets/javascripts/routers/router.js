ReadMe.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.currentUser = new Backbone.Model.extend({ url: '/api/current_user'})
    this.users = new ReadMe.Collections.Users();
    this.books = new ReadMe.Collections.Books();
  },

  routes: {
    "" : "homePage",
    "users/:id" : "userShow",
    "books/:id" : "bookShow",
    "book/new" : "bookNew"

  },

  homePage: function () {
    var user = this.users.getOrFetch(window.CURRENT_USER_ID);
    user.fetch();
    var view = new ReadMe.Views.UserShow({ model: user})
    this.$rootEl.html(view.render().$el);
  },

  userShow: function (id) {
    var user = this.users.getOrFetch(id);
    user.fetch();
    var view = new ReadMe.Views.UserShow({ model: user })
    this._swapView(view);
  },

  bookShow: function (id) {
    var book = this.books.getOrFetch(id);
    book.fetch();
    var view = new ReadMe.Views.BookShow({ model: book })
    this._swapView(view);
  },
  bookNew: function () {
    var user = this.users.getOrFetch(window.CURRENT_USER_ID);
    user.fetch();
    var view = new ReadMe.Views.BookNew({ model: user })
    this._swapView(view);
  },
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el)
  }
})
