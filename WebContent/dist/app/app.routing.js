"use strict";
var router_1 = require('@angular/router');
var data_list_component_1 = require('./data-list.component');
var rp_sidupdate_component_1 = require('./rp-sidupdate.component');
var rp_registration_component_1 = require('./rp-registration.component');
var rp_registrationlist_component_1 = require('./rp-registrationlist.component');
var rp_updatelist_component_1 = require('./rp-updatelist.component');
var rp_importexcel_component_1 = require('./rp-importexcel.component');
var rp_financedataupdate_component_1 = require('./rp-financedataupdate.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/Register',
        pathMatch: 'full'
    }, {
        path: 'datalist/:sdate/:edate',
        component: data_list_component_1.DataListComponent
    },
    {
        path: 'SIDUpdate/:cdcno',
        component: rp_sidupdate_component_1.RpSIDUpdateComponent
    },
    {
        path: 'Register',
        component: rp_registration_component_1.RpRegistrationComponent
    },
    {
        path: 'UpdateData/:id',
        component: rp_financedataupdate_component_1.RpFinanceDataUpdateComponent
    },
    {
        path: 'RegistrationList',
        component: rp_registrationlist_component_1.RpRegistrationListComponent
    },
    {
        path: 'UpdateClientList',
        component: rp_updatelist_component_1.RpUpdateListComponent
    },
    {
        path: 'ImportExcel',
        component: rp_importexcel_component_1.RpImportExcelComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map