Journal.Views.PostsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render)
  },

  template: JST["posts/index"],

  events: {
    "click button#delete": "deletePost",
    "click button.show":"showPost"
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    return this;
  },

  deletePost: function (event) {
    event.preventDefault();
    var postId = $(event.currentTarget).attr('data-id');
    var post = this.collection.get(postId);
    post.destroy();
  },

  showPost: function (event) {
    event.preventDefault();
    console.log('in show');
    var postId = $(event.currentTarget).attr('data-id');
    Journal.Router.navigate('posts/' + postId, { trigger: true });
  }
});