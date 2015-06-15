/* Containers */

Ractive.components['container'] = Ractive.extend({isolated: true, template: "<div class='container'>{{yield}}</div>"})
Ractive.components['container-fluid'] = Ractive.extend({isolated: true, template: "<div class='container-fluid'>{{yield}}</div>"})

/* Row */

Ractive.components['row'] = Ractive.extend({isolated: true, template: "<div class='row'>{{yield}}</div>"})

/* Columns */

Ractive.components['column'] = Ractive.extend({isolated: true, template: "<div class='{{#xs}}col-xs-{{xs}}{{/}} {{#sm}}col-sm-{{sm}}{{/}} {{#md}}col-md-{{md}}{{/}} {{#lg}}col-lg-{{lg}}{{/}}'>{{yield}}</div>"})

/* Columns XS */

Ractive.components['col-xs-1'] = Ractive.extend({isolated: true, template: "<div class='col-xs-1'>{{yield}}</div>"})
Ractive.components['col-xs-2'] = Ractive.extend({isolated: true, template: "<div class='col-xs-2'>{{yield}}</div>"})
Ractive.components['col-xs-3'] = Ractive.extend({isolated: true, template: "<div class='col-xs-3'>{{yield}}</div>"})
Ractive.components['col-xs-4'] = Ractive.extend({isolated: true, template: "<div class='col-xs-4'>{{yield}}</div>"})
Ractive.components['col-xs-5'] = Ractive.extend({isolated: true, template: "<div class='col-xs-5'>{{yield}}</div>"})
Ractive.components['col-xs-6'] = Ractive.extend({isolated: true, template: "<div class='col-xs-6'>{{yield}}</div>"})
Ractive.components['col-xs-7'] = Ractive.extend({isolated: true, template: "<div class='col-xs-7'>{{yield}}</div>"})
Ractive.components['col-xs-8'] = Ractive.extend({isolated: true, template: "<div class='col-xs-8'>{{yield}}</div>"})
Ractive.components['col-xs-9'] = Ractive.extend({isolated: true, template: "<div class='col-xs-9'>{{yield}}</div>"})
Ractive.components['col-xs-10'] = Ractive.extend({isolated: true, template: "<div class='col-xs-10'>{{yield}}</div>"})
Ractive.components['col-xs-11'] = Ractive.extend({isolated: true, template: "<div class='col-xs-11'>{{yield}}</div>"})
Ractive.components['col-xs-12'] = Ractive.extend({isolated: true, template: "<div class='col-xs-12'>{{yield}}</div>"})

/* Columns SM */

Ractive.components['col-sm-1'] = Ractive.extend({isolated: true, template: "<div class='col-sm-1'>{{yield}}</div>"})
Ractive.components['col-sm-2'] = Ractive.extend({isolated: true, template: "<div class='col-sm-2'>{{yield}}</div>"})
Ractive.components['col-sm-3'] = Ractive.extend({isolated: true, template: "<div class='col-sm-3'>{{yield}}</div>"})
Ractive.components['col-sm-4'] = Ractive.extend({isolated: true, template: "<div class='col-sm-4'>{{yield}}</div>"})
Ractive.components['col-sm-5'] = Ractive.extend({isolated: true, template: "<div class='col-sm-5'>{{yield}}</div>"})
Ractive.components['col-sm-6'] = Ractive.extend({isolated: true, template: "<div class='col-sm-6'>{{yield}}</div>"})
Ractive.components['col-sm-7'] = Ractive.extend({isolated: true, template: "<div class='col-sm-7'>{{yield}}</div>"})
Ractive.components['col-sm-8'] = Ractive.extend({isolated: true, template: "<div class='col-sm-8'>{{yield}}</div>"})
Ractive.components['col-sm-9'] = Ractive.extend({isolated: true, template: "<div class='col-sm-9'>{{yield}}</div>"})
Ractive.components['col-sm-10'] = Ractive.extend({isolated: true, template: "<div class='col-sm-10'>{{yield}}</div>"})
Ractive.components['col-sm-11'] = Ractive.extend({isolated: true, template: "<div class='col-sm-11'>{{yield}}</div>"})
Ractive.components['col-sm-12'] = Ractive.extend({isolated: true, template: "<div class='col-sm-12'>{{yield}}</div>"})

/* Columns MD */

Ractive.components['col-md-1'] = Ractive.extend({isolated: true, template: "<div class='col-md-1'>{{yield}}</div>"})
Ractive.components['col-md-2'] = Ractive.extend({isolated: true, template: "<div class='col-md-2'>{{yield}}</div>"})
Ractive.components['col-md-3'] = Ractive.extend({isolated: true, template: "<div class='col-md-3'>{{yield}}</div>"})
Ractive.components['col-md-4'] = Ractive.extend({isolated: true, template: "<div class='col-md-4'>{{yield}}</div>"})
Ractive.components['col-md-5'] = Ractive.extend({isolated: true, template: "<div class='col-md-5'>{{yield}}</div>"})
Ractive.components['col-md-6'] = Ractive.extend({isolated: true, template: "<div class='col-md-6'>{{yield}}</div>"})
Ractive.components['col-md-7'] = Ractive.extend({isolated: true, template: "<div class='col-md-7'>{{yield}}</div>"})
Ractive.components['col-md-8'] = Ractive.extend({isolated: true, template: "<div class='col-md-8'>{{yield}}</div>"})
Ractive.components['col-md-9'] = Ractive.extend({isolated: true, template: "<div class='col-md-9'>{{yield}}</div>"})
Ractive.components['col-md-10'] = Ractive.extend({isolated: true, template: "<div class='col-md-10'>{{yield}}</div>"})
Ractive.components['col-md-11'] = Ractive.extend({isolated: true, template: "<div class='col-md-11'>{{yield}}</div>"})
Ractive.components['col-md-12'] = Ractive.extend({isolated: true, template: "<div class='col-md-12'>{{yield}}</div>"})

/* Columns LG */

Ractive.components['col-lg-1'] = Ractive.extend({isolated: true, template: "<div class='col-lg-1'>{{yield}}</div>"})
Ractive.components['col-lg-2'] = Ractive.extend({isolated: true, template: "<div class='col-lg-2'>{{yield}}</div>"})
Ractive.components['col-lg-3'] = Ractive.extend({isolated: true, template: "<div class='col-lg-3'>{{yield}}</div>"})
Ractive.components['col-lg-4'] = Ractive.extend({isolated: true, template: "<div class='col-lg-4'>{{yield}}</div>"})
Ractive.components['col-lg-5'] = Ractive.extend({isolated: true, template: "<div class='col-lg-5'>{{yield}}</div>"})
Ractive.components['col-lg-6'] = Ractive.extend({isolated: true, template: "<div class='col-lg-6'>{{yield}}</div>"})
Ractive.components['col-lg-7'] = Ractive.extend({isolated: true, template: "<div class='col-lg-7'>{{yield}}</div>"})
Ractive.components['col-lg-8'] = Ractive.extend({isolated: true, template: "<div class='col-lg-8'>{{yield}}</div>"})
Ractive.components['col-lg-9'] = Ractive.extend({isolated: true, template: "<div class='col-lg-9'>{{yield}}</div>"})
Ractive.components['col-lg-10'] = Ractive.extend({isolated: true, template: "<div class='col-lg-10'>{{yield}}</div>"})
Ractive.components['col-lg-11'] = Ractive.extend({isolated: true, template: "<div class='col-lg-11'>{{yield}}</div>"})
Ractive.components['col-lg-12'] = Ractive.extend({isolated: true, template: "<div class='col-lg-12'>{{yield}}</div>"})
