
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('currentPage', { main: 'user' } );
    }
});

FlowRouter.route('/create', {
    action: function(params, queryParams) {
    	//should render create-mood
    }
});