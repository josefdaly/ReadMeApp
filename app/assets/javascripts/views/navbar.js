ReadMe.Views.NavBar = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.router = options.router
    this.model = options.model
  },

  template: JST['navbar'],

  events: {
    'click .log-out': 'logOut',
    'click .home-page': 'redirectHomePage',
    'click .search': 'redirectBookSearch',
    'click .upload-doc': 'clearErrors',
    'click button.create-book': 'createBook',
    'click button.upload-file': 'uploadFile',
    'click button.upload-cover': 'uploadCover'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  redirectHomePage: function (event) {
    event.preventDefault();
    Backbone.history.navigate("users/" + window.CURRENT_USER_ID, { trigger: true })
  },

  redirectNewBook: function (event) {
    event.preventDefault();
    Backbone.history.navigate("book/new", { trigger: true });
  },

  redirectBookSearch: function (event) {
    event.preventDefault();
    Backbone.history.navigate('books/search', {trigger: true});
  },

  logOut: function (event) {
    $.ajax({
      url: 'session/',
      method: 'DELETE',
      success: function () {
        window.location.href = '/';
      }
    })
  },

  createBook: function (event) {
    event.preventDefault();
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
        console.log('WHAT!');
        $('.book-title').val("");
        $('.description').val("");
        $('.book-file-name').html('No file chosen');
        $('.cover-file-name').html('No file chosen');
        $('#myModal').modal('toggle');
      }.bind(this),
      error: function(model, response) {
        response.responseJSON.forEach(function(msg){
          if (msg === "Title can't be blank") {
            $('.title-error').html('Your book must have a title');
            console.log(msg);
          }
          if (msg === "Doc url can't be blank") {
            $('.doc-url-error').html('You must select an epub to upload');
            console.log(msg);
          }
        });
      }
    });
  },

  clearErrors: function () {
    $('.title-error').html('');
    $('.doc-url-error').html('');
  },

  uploadFile: function (event) {
    event.preventDefault();
    var that = this;
    cloudinary.openUploadWidget(window.CLOUDINARY_SETTINGS_BOOK,
      function (error, payload) {
        $('.book-file-name').html(payload[0].original_filename);
        that.url = payload[0].secure_url
      }
    );
  },

  uploadCover: function (event) {
    event.preventDefault();
    var that = this;
    cloudinary.openUploadWidget(window.CLOUDINARY_SETTINGS_COVER,
      function (error, payload) {
        $('.cover-file-name').html(payload[0].original_filename);
        that.cover_url = payload[0].secure_url
      }
    );
  }
});
