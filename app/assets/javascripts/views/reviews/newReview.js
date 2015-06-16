ReadMe.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],
  events: {
    // 'click div.raty img' : 'clickRaty'
    'click button.create-review': 'createReview'
  },
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    // var that = this;
    this.$('div.raty-new').attr('data-score', 0);
    setTimeout(function () {debugger}, 0);
    setTimeout(this.renderRaty, 1000);
    return this;
  },
  // clickRaty: function (event) {
  //   event.preventDefault();
  //   var newScore = $(event.currentTarget).attr('alt');
  //   this.$('div.raty').attr('data-score', newScore);
  //   this.renderRaty();
  // },
  renderRaty: function () {
    this.$('div.raty-new').raty({
      number: 5,
      starOn: 'assets/star-on.png',
      starOff: 'assets/star-off.png',
      hints: ['bad', 'poor', 'ok', 'good', 'excellent'],
      // score: function () {
      //   return $(this).attr('data-score')
      // },
      click: function () {
        console.log('hello');
      }
    });
  },
  createReview: function () {
    event.preventDefault();
    var title = $('.review-title').val();
    debugger
    var description = $('.review-description').val();
    var quantitative = $('.raty-new input').val();
    var newReview = new ReadMe.Models.Review({
      title: title,
      quantitative: quantitative,
      qualitative: description,
      author_id: window.CURRENT_USER_ID,
      book_id: this.model.id
    })
    newReview.save({}, {
      success: function () {
        this.model.reviews().add(newReview);
      }.bind(this)
    });
    $('.review-title').val("");
    $('.review-description').val("");
    $('.raty-new input').val(0);
  }
})
