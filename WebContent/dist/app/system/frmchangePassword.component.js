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
// Application Specific
core_2.enableProdMode();
var FrmChangePasswordComponent = (function () {
    function FrmChangePasswordComponent(ics, _router, route, http, ref) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.ref = ref;
        this._obj = { "userid": "", "oldpass": "", "newpass": "", "confirm": "" };
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
    }
    FrmChangePasswordComponent.prototype.goNew = function () {
        this._obj = { "userid": "", "oldpass": "", "newpass": "", "confirm": "" };
    };
    FrmChangePasswordComponent.prototype.goPost = function () {
        var _this = this;
        var url = this.ics._apiurl + 'service001/changePassword';
        console.log(this.ics._profile.userName);
        this._obj.userid = this.ics._profile.userid;
        if (this._obj.confirm == this._obj.newpass) {
            var json = this._obj;
            this.http.doPost(url, json).subscribe(function (data) {
                if (data.state) {
                    _this.showMessage("Password Changed Successfully!!!", true);
                }
                else {
                    _this.showMessage("Password Changing Unsuccessful!!!", false);
                }
            }, function (error) {
                _this.showMessage("Can't Change Password!!!", undefined);
            }, function () { });
        }
        else {
            this.showMessage("New Password and Confirm New Password must be the same!!!", false);
        }
    };
    FrmChangePasswordComponent.prototype.showMessage = function (msg, bool) {
        if (bool == true) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg });
        }
        if (bool == false) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg });
        }
        if (bool == undefined) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg });
        }
    };
    FrmChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'changePassword',
            template: "\n    <div class=\"container\">\n    <div class=\"row clearfix\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n    <form class= \"form-horizontal\"  (ngSubmit)=\"goPost()\" > \n    <!-- Form Name -->\n    <legend>Change Password</legend>\n    <div class=\"row col-md-12\">&nbsp;</div>\n\n    <div style=\"color: #3b5998;\" class=\"row col-md-12\">\n        <span>* Password are case-sensitive and must be at least 6 characters.</span><br>\n        <span>* A good password should contain a mix of capital and lower-case letters, numbers and symbols.</span>\n    </div>    \n    <div class=\"row col-md-12\">&nbsp;</div>\n    <div class=\"form-group\">\n        <rp-input [(rpModel)]=\"_obj.oldpass\" rpRequired =\"true\" rpType=\"password\" rpLabel=\"Current password\" autofocus></rp-input>\n    </div>\n\n    <div class=\"form-group\">\n        <rp-input [(rpModel)]=\"_obj.newpass\" rpRequired =\"true\" rpType=\"password\" rpLabel=\"New Password\" autofocus></rp-input>\n    </div>\n\n    <div class=\"form-group\">\n        <rp-input [(rpModel)]=\"_obj.confirm\" rpRequired =\"true\" rpType=\"password\" rpLabelClass=\"col-md-3\" rpLabel=\"Confirm New Password\" autofocus></rp-input>\n    </div>\n\n    <div class=\"row  col-md-12\"> \n        <div class=\"col-md-2\">&nbsp;</div>\n        <button class=\"btn btn-primary\"  type=\"submit\" >Change Password</button>  \n        <div>&nbsp;</div>     \n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"goNew()\" >Cancel</button>   \n    </div>\n    <div class=\"row  col-md-12\">&nbsp;</div>\n    </form>\n    </div>\n    </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
    ], FrmChangePasswordComponent);
    return FrmChangePasswordComponent;
}());
exports.FrmChangePasswordComponent = FrmChangePasswordComponent;
//# sourceMappingURL=frmchangePassword.component.js.map