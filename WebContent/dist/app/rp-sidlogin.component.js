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
var rp_http_service_1 = require('./framework/rp-http.service');
var rp_intercom_service_1 = require('./framework/rp-intercom.service');
var rp_bean_1 = require('./framework/rp-bean');
var platform_browser_1 = require('@angular/platform-browser');
var rp_client_util_1 = require('./util/rp-client.util');
core_2.enableProdMode();
var RpSIDLoginComponent = (function () {
    function RpSIDLoginComponent(ics, _router, http, sanitizer) {
        this.ics = ics;
        this._router = _router;
        this.http = http;
        this.sanitizer = sanitizer;
        this.url = "url";
        this.t1 = "t1";
        this._sort = "desc";
        this._type = "0";
        this.check = true;
        this.remembercheck = true;
        this._loginload = false;
        this._dates = { "sdate": null, "edate": null };
        this.startDate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this._obj = { "name": "", "password": "", "commandCenter": false };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        this.ics._profile.role = 0;
        //this.checkCookie();
        this.ics.sendBean(new rp_bean_1.RpBean());
        this._loginload = false;
        this.datepickerOpts = this.ics._datepickerOpts;
        this._dates.sdate = new Date(); //todaydate
        this._dates.edate = new Date(); //todaydate
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.sdate);
    }
    // checkCookie() {
    //   let value = this.readCookieValue('username');
    //   //let urls = this.readUrl('url');
    //   if (value != "" && value != null) {
    //     this._user = value;
    //   }
    //   else {
    //     this._user = "";
    //     this.remembercheck = false;
    //   }
    // }
    RpSIDLoginComponent.prototype.goPost = function () {
        var _this = this;
        if (this._name != null && this._password != null) {
            this._loginload = true;
            if (this.apiUrl == null && this.apiUrl == undefined) {
                // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
                this._loginload = true;
            }
            this._url = this.ics._apiurl + 'control/signin';
            var profile = { "username": this._name, "password": this._password, "commandCenter": this._remember };
            this.http.doPost(this._url, profile).subscribe(function (data) {
                _this.ics._sidprofile = data;
                if (_this.apiUrl == null && _this.apiUrl == undefined) {
                    _this._loginload = true;
                    _this.ics.sendBean({ t1: "rp-msg-off" });
                }
                if (data.check == false || data.role == 0) {
                    _this._loginload = false;
                    // this._result = ; 
                    _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Invalid username and password" });
                }
                if (data.check == true && data.role != 0) {
                    _this._router.navigate(['/SID']);
                }
            }, function (error) {
                _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
            }, function () { });
        }
    };
    RpSIDLoginComponent._objst = { "name": "", "password": "", "commandCenter": false };
    RpSIDLoginComponent = __decorate([
        core_1.Component({
            selector: 'rp-sidlogin',
            template: " \n   <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n\n        <div class=\"card card-container login-container\">\n           <img id=\"profile-img\" class=\"profile-img-card\" src=\"image/sid.jpg\" />\n           <div class=\"text-center\">\n             <h5>SID Data Checking System</h5>\n           </div>\n           \n            <form class=\"form-signin\">\n               <input type=\"text\" id=\"name\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Name \" required autofocus> \n               <input type=\"password\" id=\"password\" class=\"form-control\" ngDefaultControl placeholder=\"PASSWORD\" [(ngModel)]=\"_password\" [ngModelOptions]=\"{standalone: true}\" required autofocus> \n               <button class=\"btn btn-lg btn-primary btn-block btn-signin\" (click)=\"goPost()\"  type=\"submit\" >                  \n                <span>\n                  <i class=\"fa fa-login\" aria-hidden=\"true\"></i> \n                   &nbsp; Login\n                </span>\n                    <span *ngIf=\"_loginload\" style=\"position: absolute;margin-top: -2px;\">\n                      <div class=\"ld ld-pie ld-spin-fast\" style=\"font-size:1.5em\"></div>\n                    </span>\n               </button>                 \n            </form>\n            \n            </div>\n            \n \n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService, platform_browser_1.DomSanitizer])
    ], RpSIDLoginComponent);
    return RpSIDLoginComponent;
}());
exports.RpSIDLoginComponent = RpSIDLoginComponent;
//# sourceMappingURL=rp-sidlogin.component.js.map