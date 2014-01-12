Journal.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],

  events: {
    "click .back":"back"
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  back: function(event) {
    event.preventDefault();
    Backbone.history.navigate('/#', { trigger: true });
  }
});