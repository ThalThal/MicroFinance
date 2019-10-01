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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var rp_input_component_1 = require('./rp-input.component');
var rp_intercom_service_1 = require('./rp-intercom.service');
var rp_references_1 = require('./rp-references');
var INPUT_MODULES = [
    'rp-input'
];
var RpInputModule = (function () {
    function RpInputModule() {
    }
    RpInputModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            declarations: [
                rp_input_component_1.RpInputComponent
            ],
            exports: [
                rp_input_component_1.RpInputComponent
            ],
            providers: [
                rp_intercom_service_1.RpIntercomService,
                rp_references_1.RpReferences
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ],
            bootstrap: [
                rp_input_component_1.RpInputComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RpInputModule);
    return RpInputModule;
}());
exports.RpInputModule = RpInputModule;
//# sourceMappingURL=rp-input.module.js.map