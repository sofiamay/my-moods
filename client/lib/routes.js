FlowRouter.route('/', {
    action: function(params, queryParams) {
        console.log('this should be the homepage');
    }
});

FlowRouter.route('/create', {
    action: function(params, queryParams) {
    	//should render create-mood
    }
});