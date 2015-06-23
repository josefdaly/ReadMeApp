ReadMe.Views.ReviewIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReview);
    this.addReviewForm();
    this.collection.each(function (review) {
      this.addReview(review);
    }.bind(this));
  },

  template: JST['reviews/index'],

  className: 'review-index',

  render: function () {
    var content = this.template({ collection: this.collection });

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addReview: function (review) {
    var newReview = new ReadMe.Views.ReviewIndexItem({ model: review });
    this.addSubview('ul.review-index-list', newReview);
  },

  addReviewForm: function () {
    var addReview = new ReadMe.Views.NewReview({
      collection: this.collection,
      model: this.model
    });
    this.addSubview('div.new-review', addReview);
  }
})
