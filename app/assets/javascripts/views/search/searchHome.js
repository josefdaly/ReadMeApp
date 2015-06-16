ReadMe.Views.BookSearch = Backbone.View.extend({
  initialize: function () {},
  template: JST['search/searchHome'],
  events: {
    'keyup input.book-search' : 'handleInput'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  handleInput: function (event) {
    event.pre
    debugger
  },
  renderResults: function (event) {

  }
})
