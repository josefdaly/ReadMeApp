ReadMe.Views.BookShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.readyBookCover);
  },
  template: JST['books/show'],
  events: {
    'click button.add-to-library': 'addToLibrary'
  },
  readyBookCover: function () {
    var Book = ePub(this.model.get('doc_url'))
    Book.on('book:ready', function (){
      Book.renderTo("cover-show");
    }.bind(this))
  },
  render: function () {
    var content = this.template({
      cover_url: "http://lorempixel.com/output/abstract-h-g-216-360-1.jpg",
      book: this.model
    });
    this.$el.html(content);
    return this;
  },
  addToLibrary: function (event) {
    event.preventDefault();
    library_item = new ReadMe.Models.LibraryItem({
      book_id: this.model.id,
      owner_id: window.CURRENT_USER_ID
    })
    var that = this;
    library_item.save()
  },
})
