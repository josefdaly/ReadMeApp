ReadMe.Views.ReviewIndexItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },
  template: JST['reviews/indexItem'],
  events: {
    'click span.author': 'redirectAuthorPage'
  },
  tagName: 'li',
  className: 'review-index-item',
  render: function () {
    var content = this.template({ review: this.model })
    this.$el.html(content);
    this.$('div.raty-existing').raty({
      number: 5,
      score: this.model.get('quantitative'),
      readOnly: true,
      starOff: 'https://res.cloudinary.com/dik5878ak/image/upload/v1434606885/star-off_gfd6ux.png',
      starOn: 'https://res.cloudinary.com/dik5878ak/image/upload/v1434606887/star-on_oywjpp.png',
      space: true
    });
    return this;
  },
  redirectAuthorPage: function (event) {
    event.preventDefault();
    var author_id = $(event.currentTarget).attr('data');
    Backbone.history.navigate('users/' + author_id, { trigger: true })
  }
})
