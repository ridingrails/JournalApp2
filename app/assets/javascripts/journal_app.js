window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
    Journal.posts = new Journal.Collections.Posts();
    Journal.Router = new Journal.Routers.PostRouter({
                                    "$rootEl": $('#content')
                          });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize($('#content'));
});
