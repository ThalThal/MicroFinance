"use strict";
var router_1 = require('@angular/router');
var frm000_component_1 = require('./frm000.component');
var frmsearch_component_1 = require('./frmsearch.component');
var frm000Routes = [
    { path: 'frm000', component: frm000_component_1.Frm000Component },
    { path: 'frm000/:cmd/:i', component: frm000_component_1.Frm000Component },
    { path: 'command', component: frmsearch_component_1.FrmSearchComponent },
    { path: 'command/:cmd', component: frmsearch_component_1.FrmSearchComponent }
];
exports.frm000Routing = router_1.RouterModule.forChild(frm000Routes);
//# sourceMappingURL=frm000.routing.js.map