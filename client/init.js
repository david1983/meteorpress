Meteor.startup(function() {
    Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});

ShareIt.init({
    siteOrder: ['facebook', 'twitter', 'googleplus', 'pinterest'],
    sites: {
        'facebook': {
            'appId': '1580484175528065',
            'version': 'v2.3'
        }
    },
    iconOnly: true,
    applyColors: true
});