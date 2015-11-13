
Template.mypost.rendered = function(){
    if(this.ready) return;
    this.ready = true;
    $('.parallax').parallax();
}