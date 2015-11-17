
Template.mypost.rendered = function(){
    if(this.ready) return;
    this.ready = true;
    $('.parallax').parallax();
}

Template.mypost.helpers({
	base_url: function(){ return Session.get('base_url')}
})