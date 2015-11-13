Posts.allow({
    insert: function(){return true},
    update: function(){return true},
    remove: function(){return true}
})


Meteor.methods({
    addPost: function(post){
        console.log(post)
        Posts.insert(post)
    },
    editPost: function(post){
        console.log(post);
        Posts.update({title : post.title},post,{validate: false});
    },
    removePost: function(post_id){
        Posts.remove(post_id);
    }
})
