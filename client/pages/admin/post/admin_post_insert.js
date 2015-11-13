Template.insertPost.helpers({
    myCallbacks: function() {
        return {
            formData: function() { return { id: "232323", other: Session.get("ReactiveParam") } },
            finished: function(index, fileInfo, context) {
                console.log(index, fileInfo, context)
                $('[name="image"]').val(fileInfo.url);
                Meteor.call('addImage', fileInfo)
            },
        }
    }
})
