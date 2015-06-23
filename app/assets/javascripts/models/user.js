ReadMe.Models.User = Backbone.Model.extend({

  urlRoot: '/users',

  library_books: function () {
    if (!this._library_books) {
      this._library_books = new ReadMe.Collections.Books([], { User: this })
    }

    return this._library_books;
  },

  written_works: function () {
    if (!this._written_works) {
      this._written_works = new ReadMe.Collections.Books([], { User: this })
    }

    return this._written_works;
  },

  parse: function (response) {

    if (response.written_works) {
      this.written_works().set(response.written_works, {parse: true});
      delete response.written_words;
    }
    if (response.library_books) {
      this.library_books().set(response.library_books, {parse: true});
      delete response.library_books;
    }

    return response;
  }
});
