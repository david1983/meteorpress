Template.navbar.rendered= function(){
    if (!this.rendered){
        $('.button-collapse').sideNav({
            closeOnClick:true
        })
        this.rendered = true;
    }
}
console.log(Meteor.user())
Template.linkslist.helpers({
    user: function(){
        return Meteor.user()
    }
})