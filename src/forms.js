
/* Forms */

Ractive.components['form-inline'] = Ractive.extend({isolated: true, template: "<form class='form-inline'>{{yield}}</form>"})
Ractive.components['form-horizontal'] = Ractive.extend({isolated: true, template: "<form class='form-horizontal'>{{yield}}</form>"})
Ractive.components['form-group'] = Ractive.extend({isolated: true, template: "<div class='form-group'>{{yield}}</div>"})
Ractive.components['b-label'] = Ractive.extend({isolated: true, template: "<label class='control-label {{class}}' for='{{.for}}'>{{yield}}</label>"})