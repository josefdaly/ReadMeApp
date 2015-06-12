ReadMe.Views.NavBar = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.router = options.router
  },
  template: JST['navbar'],
  events: {
    'click .upload-doc': 'redirectNewBook'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  redirectNewBook: function (event) {
    event.preventDefault();
    Backbone.history.navigate("book/new", { trigger: true });
  }
})
