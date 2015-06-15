ReadMe.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],
  events: {
    'hover .rating-stars' : 'ratingStars'
  },
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    $('div.raty').raty();
    return this;
  },
  ratingStars: function () {
    alert('Hello!');
  }
})
