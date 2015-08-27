ReadMe.Views.BookIndexItem = Backbone.View.extend({
  initialize: function (options) {
    this.template = options.template
    this.listenTo(this.model, 'sync', this.render)
    this.listenToOnce(this.model, 'sync', this.setRaty)
  },

  events: {
    'click .index-read-button': 'bookRead',
    'click .index-rate-button': 'bookShow',
    'mouseover': 'imgUp',
    'mouseout': 'imgDown'
  },

  tagName: 'li',

  className: 'book-index-item item',

  render: function () {
    var content = this.template({ book: this.model });
    this.$el.html(content);
    return this;
  },

  imgUp: function () {
    $imgWrapper = this.$('.img-wrapper')
    $imgWrapper.addClass('grow')
    $img = this.$('.index-item-cover')
    $img.addClass('img-up')

    $cover = this.$('.index-item-cover')
    $cover.addClass('index-item-cover-hover')
  },

  imgDown: function () {
    $imgWrapper = this.$('.img-wrapper')
    $imgWrapper.removeClass('grow')
    $img = this.$('.index-item-cover')
    $img.removeClass('img-up')

    $cover = this.$('.index-item-cover')
    $cover.removeClass('index-item-cover-hover')
  },

  // showIcon: function () {
  //   $readIcon = this.$('.open-book-hidden')
  //   $readIcon.removeClass('open-book-hidden')
  //   $readIcon.addClass('open-book')
  //
  //   $viewIcon = this.$('.link-book-show-hidden')
  //   $viewIcon.removeClass('link-book-show-hidden')
  //   $viewIcon.addClass('link-book-show')
  //
  //   $cover = this.$('.index-item-cover')
  //   $cover.removeClass('index-item-cover')
  //   $cover.addClass('index-item-cover-hover')
  // },
  //
  // hideIcon: function () {
  //   $readIcon = this.$('.open-book')
  //   $readIcon.removeClass('open-book')
  //   $readIcon.addClass('open-book-hidden')
  //
  //   $viewIcon = this.$('.link-book-show')
  //   $viewIcon.removeClass('link-book-show')
  //   $viewIcon.addClass('link-book-show-hidden')
  //
  //   $cover = this.$('.index-item-cover-hover')
  //   $cover.removeClass('index-item-cover-hover')
  //   $cover.addClass('index-item-cover')
  // },

  bookRead: function () {
    Backbone.history.navigate('/book/' + this.model.id, { trigger: true })
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
