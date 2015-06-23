ReadMe.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],
  events: {
    'click button.create-review': 'createReview'
  },
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    // var that = this;
    this.$('div.raty-new').attr('data-score', 0);
    setTimeout(this.renderRaty, 1000);
    return this;
  },

  renderRaty: function () {
    this.$('div.raty-new').raty({
      number: 5,
      starOff: 'https://res.cloudinary.com/dik5878ak/image/upload/v1434606885/star-off_gfd6ux.png',
      starOn: 'https://res.cloudinary.com/dik5878ak/image/upload/v1434606887/star-on_oywjpp.png',
      hints: ['bad', 'poor', 'ok', 'good', 'excellent'],
      click: function () {
        console.log('hello');
      }
    });
  },
  
  createReview: function () {
    event.preventDefault();
    var title = $('.review-title').val();
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
