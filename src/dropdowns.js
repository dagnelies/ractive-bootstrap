
/* Dropdowns */

Ractive.components['caret'] = Ractive.extend({isolated: true, template: "<span class='caret'></span>"})
Ractive.components['dropdown'] = Ractive.extend({isolated: true, template: "<div class='btn-group'>{{yield}}</div>"})
Ractive.components['dropup'] = Ractive.extend({isolated: true, template: "<div class='btn-group dropup'>{{yield}}</div>"})
Ractive.components['dd-toggle'] = Ractive.extend({isolated: true, template: "<div data-toggle='dropdown'>{{yield}}</div>"})
Ractive.components['dd-menu'] = Ractive.extend({isolated: true, template: "<ul class='dropdown-menu' role='menu'>{{yield}}</ul>"})
Ractive.components['dd-menu-right'] = Ractive.extend({isolated: true, template: "<ul class='dropdown-menu dropdown-menu-right' role='menu'>{{yield}}</ul>"})
Ractive.components['dd-item'] = Ractive.extend({isolated: true, template: "<li><a href='{{href}}' onclick='{{onclick}}'>{{yield}}</a></li>"})
Ractive.components['dd-header'] = Ractive.extend({isolated: true, template: "<li class='dropdown-header'>{{yield}}</li>"})
Ractive.components['dd-divider'] = Ractive.extend({isolated: true, template: "<li class='divider'></li>"})
