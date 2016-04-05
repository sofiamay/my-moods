// Groupts:
var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId()) {
      console.log("Is this triggering?");
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

// Auth:
Accounts.onLogin(function() {
  var redirect = Session.get('redirectAfterLogin');
  console.log(redirect);
  if (redirect) {
    if (redirect !== '/login') {
      FlowRouter.go(redirect);
    }
  } else {
    FlowRouter.go('/')
  }
});

