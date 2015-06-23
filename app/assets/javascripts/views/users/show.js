ReadMe.Views.UserShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addWrittenWorks();
    this.addLibraryBooks();
  },

  template: JST['users/show'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addWrittenWorks: function () {
    var view = new ReadMe.Views.BookIndex({
      collection: this.model.written_works()
    })
    this.addSubview('div.written-works', view);
  },

  addLibraryBooks: function () {
    var view = new ReadMe.Views.BookIndex({
      collection: this.model.library_books()
    })
    this.addSubview('div.library-books', view)
  }
})
