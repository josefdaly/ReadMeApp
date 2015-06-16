ReadMe.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],
  events: {
    // 'click div.raty img' : 'clickRaty'
  },
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    // var that = this;
    this.$('div.raty-new').attr('data-score', 0);
    setTimeout(function () {debugger}, 0);
    setTimeout(this.renderRaty, 5000);
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
  }
})
