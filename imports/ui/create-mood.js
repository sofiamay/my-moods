import { Template } from 'meteor/templating';
import { Behaviors } from '../api/behaviors.js';
import { Moods } from '../api/moods.js';
  
import './behavior.js'
import './create-mood.html';

Template.createMood.helpers({
  behaviors() {
    return Behaviors.find({});
  },
});

Template.createMood.events({

  //Submit a new behavior to the database
  'click #addBehavior'(event, instance) {
    var target = instance.$('#newBehavior');
    var text = target.val();

    //make sure to add the user once auth is implemented!
    Behaviors.insert({name: text, value: true});
    target.val('');
  },

  //Submit a new mood to teh dabase 
  'submit .new-mood'(event){
    event.preventDefault();
    const $form = ($(event.target));
    const polarity = $form.find('.polarity').val();
    const description = $form.find('.textarea').val();
    const checkedBehaviors = $form.find("input:checked");
    var behaviors = [];
    for (var i = 0; i<checkedBehaviors.length; i++) {
      behaviors.push(checkedBehaviors[i].value);
    }

    //Add new Mood to database
    Moods.insert({
          description: description,
          polarity: polarity,
          behaviors: behaviors,
          createdAt: new Date(), // current time
        });

    //redirect to home page
    FlowRouter.go('/');
  }
});
