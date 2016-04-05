import { Template } from 'meteor/templating';

import './nav.html';


Template.nav.onRendered(function() {
	//Highlight the active link in the navigation bar
	var currentRoute = FlowRouter.current().path;
	var selector = 'a[href="' + currentRoute + '"]';
	var $activeLink = $(selector).parent();
	$activeLink.addClass('active');
});
