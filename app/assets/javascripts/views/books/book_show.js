ReadMe.Views.BookShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  template: JST['books/show'],
  render: function () {
    var content = this.template({ book: this.model });
    this.$el.html(content);
    return this;
  },
})
