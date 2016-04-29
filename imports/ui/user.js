import { Template } from 'meteor/templating';
import { Moods } from '../api/moods.js';
 
import './mood.js'
import './user.html';
 

Template.user.helpers({
  moods() {
    // build a regular expression based on the current search
    var search = Session.get('search');
    var re = new RegExp(search, 'i');

    selector = {user: Meteor.userId()};

    // change this to be the right filter
    if (search && search.length) {
      selector.behaviors = re;
  	}

    options = {sort: {createdAt: -1}};
    return Moods.find(selector, options);
  }
});

Template.user.events({
  'keyup #search': function() {
    // save the current search query in a session variable as the user types
    return Session.set('search', $('#search').val());
  }
});