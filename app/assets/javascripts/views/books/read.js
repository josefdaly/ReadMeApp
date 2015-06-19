ReadMe.Views.BookRead = Backbone.View.extend({
  initialize: function () {
    this.listenToOnce(this.model, 'sync', this.startBook)
  },

  template: JST['books/read'],

  events: {
    'click div#prev': 'prevPage',
    'click div#next': 'nextPage'
  },

  render: function () {
    var content = this.template()
    this.$el.html(content);
    return this
  },

  startBook: function () {
    this.Book = ePub(this.model.get('doc_url'), {
      width: 400,
      height: 600,
      spreads: false
    })
    this.Book.renderTo("area")
  },

  prevPage: function () {
    this.Book.prevPage();
  },

  nextPage: function () {
    this.Book.nextPage();
  }
})
