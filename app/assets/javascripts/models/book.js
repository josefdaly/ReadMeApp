ReadMe.Models.Book = Backbone.Model.extend({
  urlRoot: "/api/books",
  reviews: function () {
    if (!this._reviews) {
      this._reviews = new ReadMe.Collections.Reviews([], { Book: this })
    }

    return this._reviews
  },
  parse: function (response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true })
    }

    return response;
  }
})
