ReadMe.Views.BookNew = Backbone.View.extend({
  template: JST['books/new'],
  events: {
    'click button.create-book': 'createBook',
    'click input.upload-file': 'uploadFile'
  },
  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },
  createBook: function (event) {
    event.preventDefault();
    var title = $('.book-title').val();
    var description = $('.description').val();
    var newBook = new ReadMe.Models.Book({
      title: title,
      doc_url: this.url,
      description: description,
      author_id: window.CURRENT_USER_ID
    })
    debugger
    newBook.save({}, {
      success: function () {
        this.model.written_works().add(newBook);
        Backbone.history.navigate("", { trigger: true });
      }.bind(this)
    });
  },
  uploadFile: function (event) {
    event.preventDefault();
    var that = this;
    cloudinary.openUploadWidget(CLOUDINARY_SETTINGS, function (error, payload) {
      $('.upload-file').val(payload[0].original_filename);
      that.url = payload[0].url
    });
  }
})
