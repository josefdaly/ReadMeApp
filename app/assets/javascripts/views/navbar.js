ReadMe.Views.NavBar = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.router = options.router
  },
  template: JST['navbar'],
  events: {
    'click .upload-doc': 'redirectNewBook',
    'click .log-out': 'logOut'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  redirectNewBook: function (event) {
    event.preventDefault();
    $('.upload-doc').addClass('active')
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
