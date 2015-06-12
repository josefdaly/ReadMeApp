ReadMe.Views.ReviewIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'edit', this.addBook);
    this.collection.each(function (review) {
      this.addReview(review);
    }.bind(this));
  },
  template: JST['reviews/index'],
  tagName: 'div',
  className: 'review-index',
  render: function () {
    var content = this.template({ collection: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addReview: function (review) {
    var newReview = new ReadMe.Views.ReviewIndexItem({ model: view });
    this.addSubview('ul.review-index-list', newReview);
  }
})
