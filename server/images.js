Meteor.publish('images',function(){
    return Images.find({});
})

Images.allow({
    insert: function(){return true},
    update: function(){return true},
    remove: function(){return true}
})

Meteor.methods({
    addImage: function(image){
        if(!Meteor.user()) return;
        Images.insert(image);
    }
})