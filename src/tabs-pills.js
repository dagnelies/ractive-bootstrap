
/* Tabs & Pills */

Ractive.components['tabs'] = Ractive.extend({
	isolated: true,
	data: {
		type: ''
	},
	template: "<ul class='nav nav-tabs nav-{{type.replace(/ +/g,\" nav-\")}}'>{{yield}}</ul>"
})

Ractive.components['pills'] = Ractive.extend({
	isolated: true,
	data: {
		type: ''
	},
	template: "<ul class='nav nav-pills nav-{{type.replace(/ +/g,\" nav-\")}}'>{{yield}}</ul>"
})

Ractive.components['tab'] = Ractive.extend({
	isolated: true,
	data: {
		href: '#',
		active: false,
		disabled: false
	},
	template: "<li role='presentation' class='{{#active}}active{{/}} {{#disabled}}disabled{{/}}'><a href='{{href}}' on-click='selectIt()'>{{yield}}</a></li>",
	selectIt: function() {
		if( this.get('disabled') )
			return
		this.container.set('selected', this.get('name'))
		// return false
	},
	onrender: function() {
		var container = this.container
		var self = this
		self.container.observe('selected', function( selected ) {
			if( !selected )
				return
			var name = self.get('name')
			self.set('active', name === selected )
		})
	}
})

Ractive.components['pill'] = Ractive.components['tab'] // They are identical