
/* Tags & Badges */

Ractive.components['tag'] = Ractive.extend({isolated: true, data: {type: 'default'}, template: "<span class='label label-{{type}}'>{{yield}}</span>"})
Ractive.components['badge'] = Ractive.extend({isolated: true, template: "<span class='badge'>{{yield}}</span>"})