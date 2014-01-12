Journal.Routers.PostRouter = Backbone.Router.extend({
  initialize: function (options) {
     this.$rootEl = options.$rootEl;
   },

  routes: {
    '':'index',
    'posts/new':'new',
    'posts/:id':'show',
  },

  index: function () {
    var posts = Journal.posts;
    var that = this;
    posts.fetch({
      success: function () {
        var view = new Journal.Views.PostsIndex({ collection: posts });
        that._swapView(view);
      }
    });
  },

  new: function () {

    var newPost = new Journal.Models.Post();
    var view = new Journal.Views.PostsNew({
      collection: Journal.posts,
      model: newPost
    });

    this._swapView(view);
  },

  show: function (id) {
    var posts = Journal.posts;
    var that = this;
    var post = posts.get(id);
    post.fetch({
      success: function () {
        var view = new Journal.Views.PostShow({ model: post });
        that._swapView(view);
      }
    });
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});