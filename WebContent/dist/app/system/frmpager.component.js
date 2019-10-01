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
var core_2 = require('@angular/core');
// RP Framework
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_references_1 = require('../framework/rp-references');
var rp_bean_1 = require('../framework/rp-bean');
// Application Specific
core_2.enableProdMode();
var FrmPaginatorComponent = (function () {
    function FrmPaginatorComponent(ics, _router, route, http, ref) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.ref = ref;
        this._pager = 10;
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
        this._pager = this.ics._profile.n1;
    }
    FrmPaginatorComponent.prototype.goNew = function () {
        this._pager = 10;
    };
    FrmPaginatorComponent.prototype.goPost = function () {
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toDateString();
        document.cookie = "pager" + "=" + this._pager + ";" + expires;
        this.ics._profile.n1 = this._pager;
        this.ics.sendBean(new rp_bean_1.RpBean());
        this.showMessage("Pagination Saved!!!", true);
    };
    FrmPaginatorComponent.prototype.showMessage = function (msg, bool) {
        if (bool) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg });
        }
        if (!bool) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg });
        }
        if (bool == undefined) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg });
        }
    };
    FrmPaginatorComponent = __decorate([
        core_1.Component({
            selector: 'frm-paginator',
            template: "\n    <div class=\"container\">\n    <div class=\"row clearfix\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n    <form class= \"form-horizontal\" > \n    <!-- Form Name -->\n    <legend>Custom Pagination</legend>\n    <div class=\"row col-md-12\">&nbsp;</div>\n\n    <div class=\"row col-md-12\" style=\"color: #4285F4;\">\n        Set the amount of data that will show in List forms\n    </div>    \n    <div class=\"row col-md-12\">&nbsp;</div>\n    <div class=\"form-group\">\n        <rp-input [(rpModel)]=\"_pager\" rpRequired =\"true\" rpType=\"number\" rpLabel=\"Amount of Paginator\" autofocus></rp-input>\n    </div>\n\n    <div class=\"row  col-md-12\"> \n        <div class=\"col-md-2\">&nbsp;</div>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"goPost()\"  >Save</button>       \n         <div>&nbsp;</div>    \n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"goNew()\" >Reset</button>   \n        <div class=\"row  col-md-12\"> &nbsp;</div>\n    </div>\n    </form>\n    </div>\n    </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
    ], FrmPaginatorComponent);
    return FrmPaginatorComponent;
}());
exports.FrmPaginatorComponent = FrmPaginatorComponent;
//# sourceMappingURL=frmpager.component.js.map