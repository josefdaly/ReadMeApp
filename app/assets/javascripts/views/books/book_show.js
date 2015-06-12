ReadMe.Views.BookShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  template: JST['books/show'],
  events: {
    'click button.add-to-library': 'addToLibrary'
  },
  render: function () {
    var content = this.template({ book: this.model });
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
