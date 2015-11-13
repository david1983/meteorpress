Template.adminLogin.helpers({
    user: Meteor.user(),
    users: function(){
        var count = Meteor.users.find().count()
        console.log(count)
       return count;
    }
})

Template.adminLogin.events({
    'submit': function(event){
        event.preventDefault();
        var email = event.target.userEmail.value;
        var password = event.target.userPassword.value;
        Meteor.call('userCount',function(err, users){
            if(users == 0){
                var name = event.target.userName.value;
                console.log(email, password, name)
                var user = {username: name,email: email, password: password}
                var a = Meteor.call('createAdmin',user);
                console.log(a);

            }else{
                Meteor.loginWithPassword(email,password,function(err) {
                    if(err) return console.log(err)
                    Meteor.defer(function(){
                        Router.go('/admin')
                    })
                })
            }
        })

    }
})