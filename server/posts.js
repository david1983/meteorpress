Posts.allow({
    insert: function(){return true},
    update: function(){return true},
    remove: function(){return true}
})


Meteor.methods({
    addPost: function(post){
        post.created_at = new Date();
        Posts.insert(post)
    },
    editPost: function(post){
        post.updated_at = new Date();
        Posts.update({title : post.title},post,{validate: false});
    },
    removePost: function(post_id){
        Posts.remove(post_id);
    }
})
