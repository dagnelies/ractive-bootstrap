
/* Tables */

Ractive.components['b-table'] = Ractive.extend({
	isolated: true,
	data:{ type:"striped hover" },
	template: "<table class='table {{#type}}table-{{type.replace(/ +/g,\" table-\")}}{{/type}}'>{{yield}}</table>"
})
