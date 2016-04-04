import { Template } from 'meteor/templating';
import { Moods } from '../api/moods.js';
 
import './mood.js'
import './user.html';
 
Template.user.helpers({
  moods() {
    return Moods.find({}, { sort: { createdAt: -1 } });
  },
});