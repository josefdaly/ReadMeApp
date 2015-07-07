window.ReadMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var users = new ReadMe.Collections.Users();
    var books = new ReadMe.Collections.Books();
    var current_user = users.getOrFetch(window.CURRENT_USER_ID);
    var router = new ReadMe.Routers.Router({
      '$rootEl': $('#main'),
      users: users,
      books: books,
      current_user: current_user
    });
    var navbar = new ReadMe.Views.NavBar({
      router: router,
      model: current_user
    });
    $('#nav').html(navbar.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ReadMe.initialize();
});
