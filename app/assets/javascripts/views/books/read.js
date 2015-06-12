ReadMe.Views.BookRead = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.test)
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
  test: function () {
    this.Book = ePub(this.model.get('doc_url'))
    this.Book.renderTo("area")
    debugger
  },
  prevPage: function () {
    this.Book.prevPage();
    this.Book.renderTo("area")
  },
  nextPage: function () {
    this.Book.nextPage();
    this.Book.renderTo("area")
  }
})
