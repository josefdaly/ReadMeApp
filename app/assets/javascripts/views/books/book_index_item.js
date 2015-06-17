ReadMe.Views.BookIndexItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    this.listenToOnce(this.model, 'sync', this.setRaty)
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
  },
  setRaty: function () {
    debugger
    var total = 0;
    var count = 0;
    this.model.reviews().forEach(function (review) {
      total = total + review.get('quantitative')
      count++;
    });
    this.$('li.raty').raty({
      number: 5,
      score: Math.floor(total/count),
      readOnly: true,
      starOff: 'assets/star-off.png',
      starOn: 'assets/star-on.png',
      space: true
    })
  }
})
