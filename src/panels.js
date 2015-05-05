
/* Panels */

Ractive.components['panel'] = Ractive.extend({
	isolated: true,
	data: { type: 'default' },
	template: "<panel-custom type='{{type}}' hidden='{{hidden}}'>{{#title}}<panel-heading>{{#icon}}<icon name='{{icon}}'/> {{/icon}}{{title}}</panel-heading>{{/title}}<panel-body>{{yield}}</panel-body>{{#footer}}<panel-footer>{{footer}}</panel-footer>{{/footer}}</panel-custom>"
})
Ractive.components['panel-custom'] = Ractive.extend({
	isolated: true,
	data: { type: 'default' },
	template: "<div class='panel panel-{{type}}' hidden='{{hidden}}'>{{yield}}</div>"
})
Ractive.components['panel-heading'] = Ractive.extend({isolated: true, template: "<div class='panel-heading'>{{yield}}</div>"})
Ractive.components['panel-body'] = Ractive.extend({isolated: true, template: "<div class='panel-body'>{{yield}}</div>"})
Ractive.components['panel-footer'] = Ractive.extend({isolated: true, template: "<div class='panel-footer'>{{yield}}</div>"})
