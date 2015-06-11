window.ReadMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    new ReadMe.Routers.Router({
      '$rootEl': $('#main')
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ReadMe.initialize();
});
