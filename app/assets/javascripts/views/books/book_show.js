ReadMe.Views.BookShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.libraryItem(), 'sync destroy', this.render)
    this.addReviews();
  },
  template: JST['books/show'],
  className: 'book-show',
  events: {
    'click button.toggle-library': 'toggleLibrary',
    'click button.read':'redirectRead'
  },
  render: function () {
    var content = this.template({
      cover_url: "http://lorempixel.com/output/abstract-h-g-216-360-1.jpg",
      book: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  toggleLibrary: function (event) {
    event.preventDefault();

    if ($(event.currentTarget).val() === 'Add') {
      this.model.libraryItem().set({
        book_id: this.model.id,
        owner_id: window.CURRENT_USER_ID
      })
      this.model.libraryItem().save();
    } else {
      this.model.libraryItem().destroy();
      this.model.libraryItem().unset('id')
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
