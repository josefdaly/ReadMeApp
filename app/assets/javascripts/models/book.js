ReadMe.Models.Book = Backbone.Model.extend({
  urlRoot: "/api/books",
  reviews: function () {
    if (!this._reviews) {
      this._reviews = new ReadMe.Collections.Reviews([], { Book: this })
    }

    return this._reviews
  },
  libraryItem: function () {
    if (!this._libraryItem) {
      this._libraryItem = new ReadMe.Models.LibraryItem();
    }
    return this._libraryItem
  },
  parse: function (response) {
    this.libraryItem().set({ book_id: response.id });

    if (response.library_item) {
      this.libraryItem().set(response.library_item);
      delete response.library_item;
    }

    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }

    return response;
  }
})
