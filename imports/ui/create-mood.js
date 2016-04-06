import { Template } from 'meteor/templating';
import { Behaviors } from '../api/behaviors.js';
import { Moods } from '../api/moods.js';
  
import './behavior.js'
import './create-mood.html';


Template.createMood.helpers({
  behaviors() {
    return Behaviors.find({user: Meteor.userId()});
  },
  isWelcome() {
    var params = FlowRouter.current().queryParams;
    if (params['welcome']) { return true; } else {
      return false;
    }
  }
});

Template.createMood.events({

  //Submit a new behavior to the database
  'click #addBehavior'(event, instance) {
    var target = instance.$('#newBehavior');
    var text = target.val();
    userId = Meteor.userId();
    //no userId? Error, redirect to login
    if (!userId) {FlowRouter.go('/login');}

    Behaviors.insert({name: text, value: true, user: userId});
    target.val('');
  },

  //Submit a new mood to teh dabase 
  'submit .new-mood'(event){
    event.preventDefault();
    const $form = ($(event.target));
    const polarity = $form.find('.polarity').val();
    const description = $form.find('.textarea').val();
    const checkedBehaviors = $form.find("input:checked");
    userId = Meteor.userId();
    //no userId? Error, redirect to login
    if (!userId) {FlowRouter.go('/login');}
    var behaviors = [];
    for (var i = 0; i<checkedBehaviors.length; i++) {
      behaviors.push(checkedBehaviors[i].value);
    }

    //Add new Mood to database
    Moods.insert({
          description: description,
          polarity: polarity,
          behaviors: behaviors,
          user: userId,
          createdAt: new Date(), // current time
        });

    //redirect to next
    var redirect = Session.get('redirectAfterLogin');
    if (redirect) {
      if (redirect !== '/login') {
        FlowRouter.go(redirect);
      }
    } else {
      FlowRouter.go('/')
    }
  }
});
