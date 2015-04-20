
/* Button groups */

Ractive.components['btn-group'] = Ractive.extend({isolated: true, template: "<div class='btn-group {{#type}}btn-group-{{type}}{{/type}}'>{{yield}}</div>"})
Ractive.components['btn-group-justified'] = Ractive.extend({isolated: true, template: "<div class='btn-group btn-group-justified {{#type}}btn-group-{{type}}{{/type}}'>{{yield}}</div>"})
Ractive.components['btn-group-vertical'] = Ractive.extend({isolated: true, template: "<div class='btn-group-vertical {{#type}}btn-group-{{type}}{{/type}}'>{{yield}}</div>"})
Ractive.components['btn-toolbar'] = Ractive.extend({isolated: true, template: "<div class='btn-toolbar'>{{yield}}</div>"})
