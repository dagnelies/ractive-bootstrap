
/* Modals */

Ractive.components['modal'] = Ractive.extend({
	isolated: true,
	data: {
		cancel: "Cancel",
		save: "Save"
	},
	template: 
		"<modal-custom id='{{id}}' onshow='{{onshow}}' onclose='{{onclose}}' type='{{type}}' >" +
			"<modal-header>" +
				"<modal-close/>" +
				"<h4 class='modal-title'>{{title}}</h4>" +
			"</modal-header>" +
			"<modal-body>" +
				"{{yield}}" +
			"</modal-body>" +
			"<modal-footer>" +
				"{{#save}}<button class='btn btn-primary' onclick='{{onsave}}'>{{save}}</button>{{/save}}" +
				"{{#cancel}}<button class='btn btn-default' data-dismiss='modal'>{{cancel}}</button>{{/cancel}}" +
			"</modal-footer>" +
	"</modal-custom>"
})

Ractive.components['modal-custom'] = Ractive.extend({
	isolated: true,
	data: {
		keyboard: true,
		backdrop: true
	},
	template: "<div class='modal fade' id='{{id}}' tabindex='-1' role='dialog' aria-hidden='true' data-backdrop='{{backdrop}}' data-keyboard='{{keyboard}}'><div class='modal-dialog {{#type}}modal-{{type}}{{/}}'><div class='modal-content'>{{yield}}</div></div></div>",
	onrender: function() {
		var elem = this.find('*')
		
		var onclose = this.get('onclose')
		if( onclose ) {
			$(elem).bind('hide.bs.modal', function(event) {
				eval(onclose) // jshint ignore:line
			})
		}
		
		var onshow = this.get('onshow')
		if( onshow ) {
			$(elem).bind('show.bs.modal', function(event) {
				eval(onshow) // jshint ignore:line
			})
		}
	}
})

Ractive.components['modal-header'] = Ractive.extend({
	isolated: true,
	template: "<div class='modal-header'>{{yield}}</div>"
})

Ractive.components['modal-body'] = Ractive.extend({
	isolated: true,
	template: "<div class='modal-body'>{{yield}}</div>"
})
     
Ractive.components['modal-footer'] = Ractive.extend({
	isolated: true,
	template: "<div class='modal-footer'>{{yield}}</div>"
})

Ractive.components['modal-close'] = Ractive.extend({
	isolated: true,
	template: "<button type='button' class='close' aria-label='Close' data-dismiss='modal'><span aria-hidden='true'>&times;</span></button>"
})
