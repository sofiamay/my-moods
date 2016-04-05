
var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [function(context, redirect) {
    if (!Meteor.loggingIn() || !Meteor.userID()) {
      var route = FlowRouter.current();
      if (route.route.name !== 'login') {
        Session.set ('redirectAfterLogin', route.path);
      }
      FlowRouter.go('/login');
    }
  }],
});

exposed.route('/login', {
  name: 'login',
    action: function(params, queryParams) {
      BlazeLayout.render('currentPage', { top: 'nav', main: 'user' } );
    }
});

loggedIn.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('currentPage', { top: 'nav', main: 'user' } );
    }
});

FlowRouter.route('/create', {
    action: function(params, queryParams) {
      BlazeLayout.render('currentPage', { top: 'nav', main: 'createMood' } );
    }
});

