
/* Buttons */

Ractive.components['btn'] = Ractive.extend({
	isolated: true,
	data: {
		type: 'default'
	},
	template: function() {
		if( this.get('href') )
			return      "<a class='btn btn-{{type.replace(/ +/g,\" btn-\")}} {{#disabled}}disabled{{/}} {{#active}}active{{/}} {{#dropdown}}dropdown-toggle{{/}}' {{#dropdown}}data-toggle='dropdown'{{/}} href='{{href}}'>{{yield}}</a>"
		else
			return "<button class='btn btn-{{type.replace(/ +/g,\" btn-\")}} {{#disabled}}disabled{{/}} {{#active}}active{{/}} {{#dropdown}}dropdown-toggle{{/}}' {{#dropdown}}data-toggle='dropdown'{{/}} onclick='{{onclick}}'>{{yield}}</button>"
	}
})
