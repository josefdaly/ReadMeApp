ReadMe.Collections.Users = Backbone.Collection.extend({

  urlRoot: "/users",

  model: ReadMe.Models.User,

  getOrFetch: function (id) {
    var model = this.get(id);
    var users = this;
    if (!model) {
      model = new ReadMe.Models.User({ id: id });
      model.fetch({
        success: function () {
          users.add(model);
        }.bind(this)
      });
    } else {
      model.fetch();
    }
    return model;
  }
})
