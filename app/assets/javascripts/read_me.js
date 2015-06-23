window.ReadMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new ReadMe.Routers.Router({
      '$rootEl': $('#main')
    });
    var navbar = new ReadMe.Views.NavBar({
      router: router
    });
    $('#nav').html(navbar.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ReadMe.initialize();
});
