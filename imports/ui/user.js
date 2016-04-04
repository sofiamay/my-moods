import { Template } from 'meteor/templating';
 
import './user.html';
 
Template.body.helpers({
  moods: [
    { description: 'I felt happy today' },
    { description: 'I felt sad today' },
    { description: 'I felt anxious today' },
  ],
});