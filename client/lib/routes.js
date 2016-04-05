
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('currentPage', { top: 'nav', main: 'user' } );
    }
});

FlowRouter.route('/create', {
    action: function(params, queryParams) {
    	BlazeLayout.render('currentPage', { top: 'nav', main: 'user' } );
    }
});

FlowRouter.route('/login', {
    action: function(params, queryParams) {
    	BlazeLayout.render('currentPage', { top: 'nav', main: 'user' } );
    }
});