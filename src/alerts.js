
/* Alerts */

Ractive.components['alert'] = Ractive.extend({
	isolated: true,
	data: { type: 'info' },
	template: "<div id='{{id}}' hidden='{{hidden}}' class='alert alert-{{type}} {{#closable}}alert-dismissible{{/closable}}'>{{#closable}}<button type='button' class='close' data-dismiss='alert'>&times;</button>{{/closable}}{{yield}}</div>"
})
