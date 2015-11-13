Template.adminPostsList.helpers({
    posts: function(){
        return Posts.find({})
    }
})

Template.adminPost.events({
    'click #deleteBtn' : function(){
        Meteor.call('removePost', this._id)
    }
})