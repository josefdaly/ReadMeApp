ReadMe.Views.BookIndexItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },
  template: JST['books/bookIndexItem'],
  events: {
    'click': 'bookShow'
  },
  tagName: 'li',
  className: 'book-index-item',
  render: function () {
    var content = this.template({ book: this.model });
    this.$el.html(content);
    return this;
  },
  bookShow: function () {
    Backbone.history.navigate('/books/' + this.model.id, { trigger: true })
  }
})
