ReadMe.Views.BookShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.libraryItem(), 'sync destroy', this.render)
    this.addReviews();
  },

  template: JST['books/show'],

  className: 'book-show',
  
  events: {
    'click .toggle-library': 'toggleLibrary',
    'click .read':'redirectRead'
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  toggleLibrary: function (event) {
    event.preventDefault();
    debugger
    if ($(event.currentTarget).val() === 'add') {
      this.model.libraryItem().set({
        book_id: this.model.id,
        owner_id: window.CURRENT_USER_ID
      })
      debugger
      this.model.libraryItem().save();
    } else {
      this.model.libraryItem().destroy();
      this.model.libraryItem().unset('id')
      this.collection.remove(this.model);
      Backbone.history.navigate(
        'users/' + window.CURRENT_USER_ID,
        { trigger: true }
      )
    }
  },

  redirectRead: function (event) {
    Backbone.history.navigate("book/" + this.model.id, { trigger: true })
  },

  addReviews: function () {
    var reviews = new ReadMe.Views.ReviewIndex({
      collection: this.model.reviews(),
      model: this.model
    })
    this.addSubview('div.reviews', reviews)
  },
})
