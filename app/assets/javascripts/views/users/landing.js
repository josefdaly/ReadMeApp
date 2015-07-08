ReadMe.Views.LandingPage = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addBookIndex);
    this.collection.each(function (user) {
      this.addBookIndex(user);
    }.bind(this));
  },

  template: JST['users/landing'],

  events: {

  },

  className: 'landing-page',

  render: function () {
    var content = this.template({ collection: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addBookIndex: function (user) {
    var view = new ReadMe.Views.BookIndex({
      collection: user.written_works()
    })
    this.addSubview('div.book-indices', view)
  }
});
