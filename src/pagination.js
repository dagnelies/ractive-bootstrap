
/* Pagination */

Ractive.components['pagination'] = Ractive.extend({
	isolated: true,
	data: {
		min: 1,
		max: 10,
		value: 1
	},
	computed: {
		pages: function() {
			var min = this.get('min')
			var max = this.get('max')
			var list = []
			for( var i = min; i <= max; i++ )
				list.push(i)
			return list
		}
	},
	template: "<ul class='pagination {{#type}}pagination-{{type}}{{/}}'>{{#each pages}}<li {{#if . == value}}class='active'{{/if}}><a {{#url}}href='{{url}}{{.}}'{{/}} on-click='set(\"value\", .)'>{{.}}</a></li>{{/each}}</ul>"
})
