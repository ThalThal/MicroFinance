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
var forms_1 = require('@angular/forms');
var rp_input_module_1 = require('../framework/rp-input.module');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_references_1 = require('../framework/rp-references');
var pager_component_1 = require('../util/pager.component');
var rp_client_util_1 = require('../util/rp-client.util');
var PagerModule = (function () {
    function PagerModule() {
    }
    PagerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                rp_input_module_1.RpInputModule
            ],
            declarations: [
                pager_component_1.Pager
            ],
            exports: [
                pager_component_1.Pager
            ],
            providers: [
                rp_http_service_1.RpHttpService,
                rp_intercom_service_1.RpIntercomService,
                rp_references_1.RpReferences,
                rp_client_util_1.ClientUtil
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], PagerModule);
    return PagerModule;
}());
exports.PagerModule = PagerModule;
//# sourceMappingURL=pager.module.js.map