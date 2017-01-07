import './body.html';
import { Template } from 'meteor/templating';
import { Items } from '../api/items.js';

Template.body.helpers({
	items(){
		return Items.find({});
	}
});

Template.body.events({
	'click .test'(event){
		alert("You just clicked the button");
	}
});