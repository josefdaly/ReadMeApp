ReadMe.Views.BookSearch = Backbone.View.extend({
  initialize: function () {},
  template: JST['search/searchHome'],
  events: {},
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
