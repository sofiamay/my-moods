import { Template } from 'meteor/templating';
import { Behaviors } from '../api/behaviors.js';
  
import './behavior.js'
import './create-mood.html';

Template.createMood.helpers({
  behaviors() {
    return Behaviors.find({});
  },
});

Template.createMood.events({
  'click #addBehavior'(event, instance) {
    var target = instance.$('#newBehavior');
    var text = target.val();

    Behaviors.insert({name: text, value: true});
    target.val('');
  }
});
