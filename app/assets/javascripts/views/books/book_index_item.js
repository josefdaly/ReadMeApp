ReadMe.Views.BookIndexItem = Backbone.View.extend({
  initialize: function (options) {
    // debugger;
    this.template = options.template
    this.listenTo(this.model, 'sync', this.render)
    this.listenToOnce(this.model, 'sync', this.setRaty)
  },
  events: {
    'click': 'bookShow'
  },
  tagName: 'li',
  // template: JST['books/bookCarouselItem'],
  className: 'book-index-item item',
  render: function () {
    var content = this.template({ book: this.model });
    this.$el.html(content);
    return this;
  },
  bookShow: function () {
    Backbone.history.navigate('/books/' + this.model.id, { trigger: true })
  },
  setRaty: function () {
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
      starOff: 'https://res.cloudinary.com/dik5878ak/image/upload/v1434606885/star-off_gfd6ux.png',
      starOn: 'https://res.cloudinary.com/dik5878ak/image/upload/v1434606887/star-on_oywjpp.png',
      space: true
    })
  }
})
