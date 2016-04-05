// Groupts:
var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId()) {
      var route = FlowRouter.current();
      if (route.route.name !== 'login') {
        Session.set ('redirectAfterLogin', route.path);
      }
      FlowRouter.go('/login');
    }
  }],
});

// Routes:

exposed.route('/login', {
  name: 'login',
    action: function(params, queryParams) {
      BlazeLayout.render('currentPage', { top: 'nav', main: 'login' } );
    }
});

loggedIn.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('currentPage', { top: 'nav', main: 'user' } );
    }
});

loggedIn.route('/create', {
    action: function(params, queryParams) {
      BlazeLayout.render('currentPage', { top: 'nav', main: 'createMood' } );
    }
});

loggedIn.route('/logout', {
    name: 'logout',
    action: function(params, queryParams) {
      Meteor.logout(function() {
        FlowRouter.go('/login');
      });
    }
});

// Auth:
Accounts.onLogin(function() {
  var redirect = Session.get('redirectAfterLogin');
  if (redirect) {
    if (redirect !== '/login') {
      FlowRouter.go(redirect);
    }
  } else {
    FlowRouter.go('/')
  }
});

