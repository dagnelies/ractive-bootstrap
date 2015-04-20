Ractive.components['btn'] = Ractive.extend({
	isolated: true,
	data: {
		type: 'default'
	},
	template: "<a class='btn btn-{{type.replace(/ +/g,\" btn-\")}} {{#disabled}}disabled{{/}} {{#active}}active{{/}} {{#dropdown}}dropdown-toggle{{/}}' onclick='{{onclick}}' href='{{href}}' data-toggle='{{#dropdown}}dropdown{{/}}'>{{yield}}</a>"
})
