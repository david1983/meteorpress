
Router.route('/',{
    action: function(){this.render('home');}
});

Router.route('/about',{
    action: function(){this.render('about');}
});

Router.route('/post/:_id',{
    data:function(){
        return Posts.findOne({_id: this.params._id});
    },
    action: function(){this.render('post');}
});


Router.route('/admin/login', {
    action: function(){
        this.render('adminLogin')
    }
});

Router.route('/logout',{
    action:function(){
        Meteor.logout(function(){
            this.redirect('/');
        }.bind(this));
    }
})

Router.route('/admin', adminCheck('admin'));

var createPostObj = adminCheck('adminCreatePost');
createPostObj.data = function () { return {mymethod: 'addPost'}};
Router.route('/admin/post', createPostObj);
Router.route('/admin/posts', adminCheck('adminPostsList'));
Router.route('/admin/about', adminCheck('adminAbout'));


var editPostObj = adminCheck('adminCreatePost');
editPostObj.data = function () {
    var data = Posts.findOne({_id: this.params._id});
    data.mymethod = 'editPost'
    return data;
}
Router.route('/admin/post/:_id',editPostObj);

function adminCheck(templateName){
    return {
        template: templateName,
        onBeforeAction: function () {
            if (!Meteor.user() && this.ready()) {
                this.redirect('/admin/login');
            } else {
                this.next()
            }
        },
        action: function () {
            this.render()
        }

    }
}

Router.configure({
    layoutTemplate: 'defaultlayout'
});