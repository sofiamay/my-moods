import { Template } from 'meteor/templating';
import { Behaviors } from '../api/behaviors.js';
  
import './behavior.js'
import './create-mood.html';

Template.createMood.helpers({
  behaviors() {
    return Behaviors.find({});
  },
});
