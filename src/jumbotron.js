
/* Jumbotron & Page header */

Ractive.components['jumbotron'] = Ractive.extend({isolated: true, template: "<div class='jumbotron'>{{yield}}</div>"})
Ractive.components['page-header'] = Ractive.extend({isolated: true, template: "<div class='page-header'>{{yield}}</div>"})
