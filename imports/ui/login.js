import { Template } from 'meteor/templating';

import './login.html';

Template.login.onRendered(function(){
  // Jquery functionality. Switch between login and signup forms
  $('#login-form-link').click(function(e) {
      $("#login-form").delay(100).fadeIn(100);
      $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
      $("#register-form").delay(100).fadeIn(100);
      $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
});

Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    // Register Form
    if (event.target.id === 'register-form'){
      var emailVar = event.target.registerEmail.value;
      var passwordVar = event.target.registerPassword.value;

      Accounts.createUser({
        email: emailVar,
        password: passwordVar,
      });
    }

    if (event.target.id === 'login-form') {
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;

      Meteor.loginWithPassword(emailVar, passwordVar);
    }
  }
});