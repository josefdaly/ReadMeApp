ReadMe.Views.ReviewIndexItem = Backbone.View.extend({
  initialize: function () {
    debugger
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
      starOff: 'assets/star-off.png',
      starOn: 'assets/star-on.png',
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
