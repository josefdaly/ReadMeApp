ReadMe.Views.BookRead = Backbone.View.extend({
  initialize: function () {
    this.listenToOnce(this.model, 'sync', this.startBook)
    this.font = 1;
    this.fontStyle = 'serif';
  },

  template: JST['books/read'],

  events: {
    'click div#prev': 'prevPage',
    'click div#next': 'nextPage',
    'click .plus': 'fontUp',
    'click .minus': 'fontDown',
    'click .style': 'toggleFont'
  },

  className: 'read-page',

  render: function () {
    var content = this.template()
    this.$el.html(content);
    return this
  },

  startBook: function () {
    this.Book = ePub(this.model.get('doc_url'))
    this.Book.renderTo("area")
  },

  prevPage: function () {
    this.Book.prevPage();
  },

  nextPage: function () {
    this.Book.nextPage();
  },

  fontUp: function () {
    this.font = this.font + .1;
    this.Book.setStyle("font-size", this.font + "em");
  },

  fontDown: function () {
    this.font = this.font - .1;
    this.Book.setStyle("font-size", this.font + "em");
  },

  toggleFont: function () {
    debugger
    if (this.fontStyle === 'serif') {
      debugger
      this.Book.setStyle("font-family", "Sans-Serif");
      this.fontStyle = 'sans-serif';
    } else {
      this.Book.setStyle("font-family", 'Serif');
      this.fontStyle = 'serif';
    }
  }
})
