Posts.allow({
    insert: function(){return true},
    update: function(){return true},
    remove: function(){return true}
})


Meteor.methods({
    addPost: function(post){
        Posts.insert(post)
    },
    editPost: function(post){

        Posts.update({title : post.title},post,{validate: false});
    },
    removePost: function(post_id){
        Posts.remove(post_id);
    }
})

Posts.before.insert(function (userId, doc) {
    doc.created_at = Date.now();
});

Posts.before.update(function (userId, doc, fieldNames, modifier, options) {
    modifier.$set = modifier.$set || {};
    modifier.$set.updated_at = Date.now();
});