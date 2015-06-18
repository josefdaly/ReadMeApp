ReadMe.Views.NavBar = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.router = options.router
  },

  template: JST['navbar'],
  events: {
    'click .upload-doc': 'redirectNewBook',
    'click .log-out': 'logOut',
    'click .home-page': 'redirectHomePage',
    'click .search': 'redirectBookSearch',
    'mouseover img.logo': 'hoverGlow',
    'mouseout img.logo': 'unGlow'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  redirectHomePage: function (event) {
    event.preventDefault();
    Backbone.history.navigate("users/" + window.CURRENT_USER_ID, { trigger: true })
  },
  redirectNewBook: function (event) {
    event.preventDefault();
    Backbone.history.navigate("book/new", { trigger: true });
  },
  redirectBookSearch: function (event) {
    event.preventDefault();
    Backbone.history.navigate('books/search', {trigger: true});
  },
  logOut: function (event) {
    $.ajax({
      url: 'session/',
      method: 'DELETE',
      success: function () {
        window.location.href = '/';
      }
    })
  },
  hoverGlow: function (event) {
    event.preventDefault();
    $('img.logo').attr(
      'src',
      'http://res.cloudinary.com/dik5878ak/image/upload/v1434652341/readMe-logo_1_wublov.png'
    )
  },
  unGlow: function (event) {
    event.preventDefault();
    $('img.logo').attr(
      'src',
      'https://res.cloudinary.com/dik5878ak/image/upload/v1434650893/readMe-logo_rthnfc.png'
    )
  }
})
