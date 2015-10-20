
/* Buttons */

Ractive.components['btn'] = Ractive.extend({
	isolated: true,
	data: {
		type: 'default'
	},
	template: function() {
		if( this.get('href') )
			return "<a class='btn btn-{{type.replace(/ +/g,\" btn-\")}} {{#disabled}}disabled{{/}} {{#active}}active{{/}} {{#dropdown}}dropdown-toggle{{/}}' href='{{href}}' data-toggle='{{#dropdown}}dropdown{{/}}'>{{yield}}</a>"
		else
			return "<button class='btn btn-{{type.replace(/ +/g,\" btn-\")}} {{#disabled}}disabled{{/}} {{#active}}active{{/}} {{#dropdown}}dropdown-toggle{{/}}' onclick='{{onclick}}' data-toggle='{{#dropdown}}dropdown{{/}}'>{{yield}}</button>"
	}
})
