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
var router_1 = require('@angular/router');
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
core_1.enableProdMode();
var Frm000Component = (function () {
    function Frm000Component(ics, _router) {
        this.ics = ics;
        this._router = _router;
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
    }
    Frm000Component = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container\">\n    <div class=\"row clearfix\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\">\n   \n    </div>\n    </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router])
    ], Frm000Component);
    return Frm000Component;
}());
exports.Frm000Component = Frm000Component;
//# sourceMappingURL=frm000.component.js.map