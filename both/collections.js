AllUsers = new Meteor.Collection('allUsers');
Posts = new Meteor.Collection('posts');
Images = new Meteor.Collection('images');


Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    content: {
        type: String,
        label: "Yet another poem",
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor' // optional
            }
        }
    },
    image: {
        type: String,
        optional: true,
        //autoform: {
        //    type: "hidden",
        //    label: false
        //},
    }
}));
