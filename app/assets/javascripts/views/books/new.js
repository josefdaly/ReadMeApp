ReadMe.Views.BookNew = Backbone.View.extend({
  template: JST['books/new'],

  events: {
    'click button.create-book': 'createBook',
    'click input.upload-file': 'uploadFile',
    'click input.upload-cover': 'uploadCover'
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  createBook: function (event) {
    event.preventDefault();
    debugger
    var title = $('.book-title').val();
    var description = $('.description').val();
    var newBook = new ReadMe.Models.Book({
      title: title,
      doc_url: this.url,
      cover_url: this.cover_url,
      description: description,
      author_id: window.CURRENT_USER_ID
    })
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
      that.url = payload[0].secure_url
    });
  },

  uploadCover: function (event) {
    event.preventDefault();
    var that = this;
    cloudinary.openUploadWidget(CLOUDINARY_SETTINGS, function (error, payload) {
      $('.upload-cover').val(payload[0].original_filename);
      debugger
      that.cover_url = payload[0].secure_url
    });
  }
})
