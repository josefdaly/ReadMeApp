ReadMe.Views.BookSearch = Backbone.CompositeView.extend({
  template: JST['search/searchHome'],
  events: {
    'keyup input.book-search' : 'handleInput'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  handleInput: function (event) {
    event.preventDefault();
    $.ajax({
      type: 'get',
      url: 'api/books/search',
      data: { query: $('input.book-search').val() },
      dataType: 'json',
      success: this.renderResults.bind(this)
    });
  },
  renderResults: function (response) {
    $('ul.book-search-results').empty();
    var that = this;
    if (response.length > 0) {
      response.forEach( function(book) {
        debugger
        $('ul.book-search-results').append('<li>' + book.title + '</li>')
      });
    }
  }
})
