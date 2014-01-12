Journal.Views.PostsNew = Backbone.View.extend({
  template: JST["posts/new"],

  events: {
    "submit .create":"createPost"
  },

  createPost: function (event) {
    event.preventDefault();
    console.log('in create');
    var formData = $(event.currentTarget).serializeJSON();
    this.model.set(formData);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: function () {
          Backbone.history.navigate('', { trigger: true });
        }
      });
    }
    else
    {
      this.model.save({}, {
        success: function () {
          Backbone.history.navigate('', { trigger: true });
        }
      });
    }
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});