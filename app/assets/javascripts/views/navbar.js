ReadMe.Views.NavBar = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.router = options.router
  },
  template: JST['navbar'],
  events: {
    'click .upload-doc': 'redirectNewBook',
    'click .log-out': 'logOut',
    'click .home-page': 'redirectHomePage'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  redirectHomePage: function (event) {
    event.preventDefault();
    Backbone.history.navigate("", { trigger: true })
  },
  redirectNewBook: function (event) {
    event.preventDefault();
    Backbone.history.navigate("book/new", { trigger: true });
  },
  logOut: function (event) {
    $.ajax({
      url: 'session/',
      method: 'DELETE',
      success: function () {
        window.location.href = '/';
      }
    })
  }
})
