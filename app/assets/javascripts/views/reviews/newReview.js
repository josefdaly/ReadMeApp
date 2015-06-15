ReadMe.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],
  events: {},
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  }
})
