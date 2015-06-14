ReadMe.Views.ReviewIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'edit', this.addReview);
    this.collection.each(function (review) {
      this.addReview(review);
    }.bind(this));
  },
  template: JST['reviews/index'],
  tagName: 'div',
  className: 'review-index',
  render: function () {
    var content = this.template({ collection: this.collection });
    this.attachSubviews();
    this.$el.html(content);
    return this;
  },
  addReview: function (review) {
    var newReview = new ReadMe.Views.ReviewIndexItem({ model: view });
    this.addSubview('ul.review-index-list', newReview);
  }
})
