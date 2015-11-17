Meteor.startup(function() {
	Session.set('base_url','http://www.davideandreazzini.co.uk');
	Session.set('facebook_id','1580484175528065');
    Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});

ShareIt.init({
    siteOrder: ['twitter', 'googleplus', 'pinterest'],
    sites: {
        'facebook': {
            'appId': '1580484175528065'
        }
    },
    iconOnly: true,
    applyColors: true
});