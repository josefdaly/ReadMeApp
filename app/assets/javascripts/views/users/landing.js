ReadMe.Views.LandingPage = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.recentAdds = new ReadMe.Collections.Books();
    this.featured = new ReadMe.Collections.Books();
    this.recentAdds.fetch({ url: 'api/books/recent' })
    this.featured.fetch({ url: 'api/books/featured' })
    this.addRecents();
    this.addFeatured();

    // Putting on backburner for presentation
    // this.users = options.users
    // this.listenTo(this.users, 'sync', this.render);
    // this.listenTo(this.users, 'add', this.addBookIndex);
    // this.users.each(function (user) {
    //   this.addBookIndex(user);
    // }.bind(this));
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
  },

  addRecents: function () {
    var view = new ReadMe.Views.BookIndex({
      collection: this.recentAdds
    })
    this.addSubview('div.recently-added', view)
  },

  addFeatured: function () {
    var view = new ReadMe.Views.BookIndex({
      collection: this.featured
    })
    this.addSubview('div.book-indices', view)
  }
});
