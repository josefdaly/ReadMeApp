ReadMe.Views.ReviewIndexItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },
  template: JST['reviews/indexItem'],
  events: {

  },
  tagName: 'li',
  className: 'review-index-item',
  render: function () {
    var content = this.template({ review: this.model })
    this.$el.html(content);
    return this;
  },
})
