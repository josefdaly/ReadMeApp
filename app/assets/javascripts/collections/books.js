ReadMe.Collections.Books = Backbone.Collection.extend({

  url: "/api/books",

  model: ReadMe.Models.Book,

  getOrFetch: function (id) {
    var model = this.get(id);
    var books = this;
    if (!model) {
      model = new ReadMe.Models.Book({ id: id });
      model.fetch({
        success: function () {
          books.add(model);
        }.bind(this)
      });
    } else {
      model.fetch();
    }
    return model;
  }
})
