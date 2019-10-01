"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_2 = require('@angular/common');
var ng2_datetime_1 = require('ng2-datetime');
var rp_root_component_1 = require('./rp-root.component');
var app_routing_1 = require('./app.routing');
var rp_system_module_1 = require('./system/rp-system.module');
var rp_input_module_1 = require('./framework/rp-input.module');
var pager_module_1 = require('./util/pager.module');
var advancedsearch_module_1 = require('./util/advancedsearch.module');
var rp_sid_component_1 = require('./rp-sid.component');
var rp_http_service_1 = require('./framework/rp-http.service');
var rp_intercom_service_1 = require('./framework/rp-intercom.service');
var rp_menu_component_1 = require('./framework/rp-menu.component');
var rp_references_1 = require('./framework/rp-references');
var rp_client_util_1 = require('./util/rp-client.util');
var data_list_component_1 = require('./data-list.component');
var rp_financelogin_component_1 = require('./rp-financelogin.component');
var rp_sidupdate_component_1 = require('./rp-sidupdate.component');
var rp_registration_component_1 = require('./rp-registration.component');
var rp_registrationlist_component_1 = require('./rp-registrationlist.component');
var rp_updatelist_component_1 = require('./rp-updatelist.component');
var rp_importexcel_component_1 = require('./rp-importexcel.component');
var rp_financedataupdate_component_1 = require('./rp-financedataupdate.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                rp_input_module_1.RpInputModule,
                rp_system_module_1.SystemModule,
                advancedsearch_module_1.AdvancedSearchModule,
                pager_module_1.PagerModule,
                ng2_datetime_1.NKDatetimeModule
            ],
            declarations: [
                rp_root_component_1.RpRootComponent,
                rp_sid_component_1.RpSIDComponent,
                rp_menu_component_1.RpMenuComponent,
                data_list_component_1.DataListComponent,
                rp_financelogin_component_1.RpFinanceLoginComponent,
                rp_sidupdate_component_1.RpSIDUpdateComponent,
                rp_registration_component_1.RpRegistrationComponent,
                rp_registrationlist_component_1.RpRegistrationListComponent,
                rp_updatelist_component_1.RpUpdateListComponent,
                rp_importexcel_component_1.RpImportExcelComponent,
                rp_financedataupdate_component_1.RpFinanceDataUpdateComponent
            ],
            providers: [
                rp_http_service_1.RpHttpService,
                rp_intercom_service_1.RpIntercomService,
                rp_references_1.RpReferences,
                rp_client_util_1.ClientUtil,
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ],
            bootstrap: [rp_root_component_1.RpRootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map