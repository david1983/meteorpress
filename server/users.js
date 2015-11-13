
//Meteor.users.remove({});

Meteor.publish('allUsers',function(){
    var users = Meteor.users.find({},{fields: {emails: 1, profile: 1}})
    return users;
})

Meteor.users.allow({
    insert: function(){return false},
    update: function(){return false},
    remove: function(){return false}
})

Meteor.methods({
    userCount: function() {
        return Meteor.users.find().count();
    },
    createAdmin: function(user){
        if(Meteor.users.find().count()>0)return 0;
        user.profile = {};
        user.profile.role = 'admin';
        var newId = Accounts.createUser(user);
        return newId;
    },
    deleteUsers: function(){
        Meteor.users.remove({});
    }
});
