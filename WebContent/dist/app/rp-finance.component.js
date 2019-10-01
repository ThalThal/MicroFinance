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
var RpFinanceComponent = (function () {
    function RpFinanceComponent(ics, _router, route, http, sanitizer) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.sanitizer = sanitizer;
        this.url = "url";
        this.t1 = "t1";
        this._sort = "desc";
        this._type = "0";
        this.check = true;
        this.flagsave = true;
        this.remembercheck = true;
        this._loginload = false;
        this._dates = { "sdate": null, "edate": null };
        this.appdate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this._obj = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "", "appointmentDate": "" };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        this._obj = RpSIDUpdateComponent._objst;
        this.datepickerOpts = this.ics._datepickerOpts;
        this._dates.sdate = new Date(); //todaydate   
        this.ics.sendBean(new rp_bean_1.RpBean());
        // this._loginload = false;
        //  this._dates.edate = new Date();//todaydate
        //  this.endDate = this._util.getDatePickerDate(this._dates.sdate);
    }
    RpFinanceComponent.prototype.gologout = function () {
        this._cdcno = "";
        RpSIDUpdateComponent._objst = { "cdcno": "", "appId": "", "name": "", "qNo": "", "appointmentDate": "", "email": "", "tNo": "", "appDate": null, "passNo": "" };
        this._router.navigate(['/SIDLogin']);
    };
    RpFinanceComponent.prototype.goBack = function () {
        this._router.navigate(['/SID']);
    };
    RpFinanceComponent.prototype.checkLogin = function () {
        if (this.ics._sidprofile.check == false || this.ics._sidprofile.username == "" || this.ics._sidprofile.role != 2) {
            this._router.navigate(['/SIDLogin']);
        }
    };
    RpFinanceComponent.prototype.goPost = function (cdcno) {
        var _this = this;
        this._loginload = true;
        if (this.apiUrl == null && this.apiUrl == undefined) {
            // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
            this._loginload = true;
        }
        this._url = this.ics._apiurl + 'control/updatesearch';
        var profile = { "cdcno": cdcno };
        this.http.doPost(this._url, profile).subscribe(function (data) {
            if (_this.apiUrl == null && _this.apiUrl == undefined) {
                _this._loginload = true;
                _this.ics.sendBean({ t1: "rp-msg-off" });
            }
            if (data != "") {
                _this._loginload = false;
                _this._obj = data;
                _this._name = _this._obj.name;
                _this._cdcno = _this._obj.cdcno;
                _this._appId = _this._obj.appId;
                _this._qNo = _this._obj.qNo;
                _this._pNo = _this._obj.tNo;
                _this._email = _this._obj.email;
                _this._dates.sdate = _this._util.setDatePickerDateNew(_this._obj.appointmentDate);
                console.log("Start Date" + _this._obj.appointmentDate + " " + _this._util.changeDatetoStringYMD(_this._obj.appointmentDate));
            }
        }, function (error) {
            _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
        }, function () { });
    };
    RpFinanceComponent.prototype.goUpdate = function () {
        var _this = this;
        this._url = this.ics._apiurl + 'control/updateData';
        this.appdate = this._util.getDatePickerDate(this._dates.sdate);
        var profile = { "username": this.ics._sidprofile.username, "cdcno": this._cdcno, "tNo": this._pNo, "email": this._email, "appDate": this._dates.sdate, "commandCenter": this._remember };
        this.http.doPost(this._url, profile).subscribe(function (data) {
            console.log(data.role);
            if (_this.apiUrl == null && _this.apiUrl == undefined) {
                _this.ics.sendBean({ t1: "rp-msg-off" });
            }
            if (data.commandCenter == true) {
                _this._result = "Data have been updated";
                _this.flagsave = false;
                //this.goPost(this._cdcno);   
                _this._obj.cdcno = _this._cdcno;
                _this._router.navigate(['/SID']);
            }
            else {
                _this._result = "Data havenot  been updated";
                _this.flagsave = true;
            }
        }, function (error) {
            _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
        }, function () { });
    };
    RpFinanceComponent._objst = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "", "appointmentDate": "" };
    RpFinanceComponent = __decorate([
        core_1.Component({
            selector: 'rp-finance',
            template: " \n \n <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n \n\n\n <nav class=\"navbar navbar-fluid\">\n  <div class=\"nav-container\">\n    <div class=\"navbar-header\">\n      <div class=\"navbar-brand\" (click)=\"goBack()\">\n        SID Data Checking System\n      </div>\n    </div>  \n     \n    <ul class=\"nav navbar-nav navbar-right\">  \n      \n      <div (click)=\"gologout()\"  class=\"logout\"><span class=\"fas fa-sign-out-alt\"  aria-hidden=\"true\"></span> Logout</div>    \n    </ul>\n  </div>\n</nav>\n\n\n\n      <!-- <div class=\"container\">-->\n        <div class=\"card update-container\">\n           <img id=\"profile-img\" class=\"profile-img-card\" src=\"image/sid.jpg\" />\n           <div class=\"text-center\">\n             <h5>SID Data Updating System</h5>\n           </div>\n            <form class=\"form-update\">\n             <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label ngDefaultControl [(ngModel)]=\"_name\" [ngModelOptions]=\"{standalone: true}\">NAME:{{_name}}</label>\n              </div>\n              <div class=\"col-md-6\">\n                <label  ngDefaultControl [(ngModel)]=\"_cdcno\" [ngModelOptions]=\"{standalone: true}\">CDC_NO:{{_cdcno}}</label>\n              </div>\n             </div>\n             \n              <div class=\"row\">\n               <div class=\"col-md-4\">\n                  <label class=\"label-for-update\">Phone No:</label>\n                </div> \n                <div class=\"col-md-8\">             \n                  <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_pNo\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Application ID \" required autofocus> \n                </div>\n             </div>\n              <div class=\"row\">\n               <div class=\"col-md-4\">\n                  <label class=\"label-for-update\">Email:</label>\n                </div> \n                <div class=\"col-md-8\">             \n                  <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email \" required autofocus> \n                </div>\n             </div>\n              <div class=\"row\">\n               <div class=\"col-md-4\">\n                  <label class=\"label-for-update\">Appointment Date:</label>\n                </div> \n                <div class=\"col-md-8\">             \n                   <datetime class=\"datetime\" for=\"form3\" [(ngModel)]=\"_dates.sdate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"></datetime>\n                </div>\n             </div>\n               <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"goUpdate()\">                  \n                <span>\n                  <i class=\"fa fa-edit\" aria-hidden=\"true\" ></i> \n                   &nbsp; Update\n                </span>\n                    <span *ngIf=\"_loginload\" style=\"position: absolute;margin-top: -2px;\">\n                      <div class=\"ld ld-pie ld-spin-fast\" style=\"font-size:1.5em\"></div>\n                    </span>\n               </button>                 \n            </form>\n            \n            <button class=\"btn btn-lg btn-primary btn-block btn-signin\"  (click)=\"goBack()\">\n               <span>                \n                 <i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\n                  &nbsp; Back\n                </span>\n              </button>\n            \n         \n        </div>\n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, platform_browser_1.DomSanitizer])
    ], RpFinanceComponent);
    return RpFinanceComponent;
}());
exports.RpFinanceComponent = RpFinanceComponent;
//# sourceMappingURL=rp-finance.component.js.map