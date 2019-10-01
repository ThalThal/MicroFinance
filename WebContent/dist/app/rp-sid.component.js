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
var rp_sidupdate_component_1 = require('./rp-sidupdate.component');
core_2.enableProdMode();
var RpSIDComponent = (function () {
    function RpSIDComponent(ics, _router, http, sanitizer) {
        this.ics = ics;
        this._router = _router;
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
        this.startDate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this._obj = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "" };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        //this.checkLogin();
        //this.checkCookie();
        console.log(JSON.stringify(this.ics._sidprofile) + " ics obj");
        this._obj = rp_sidupdate_component_1.RpSIDUpdateComponent._objst;
        if (this._obj.cdcno != "" && this._obj.cdcno != null) {
            this._cdcno = this._obj.cdcno;
            this.goPost();
        }
        if (this.ics._sidprofile.role == 0) {
            this._router.navigate(['/SIDLogin']);
        }
        else {
            this._router.navigate(['/SID']);
            this._role = this.ics._sidprofile.role;
        }
        this.ics.sendBean(new rp_bean_1.RpBean());
        this._loginload = false;
        this.datepickerOpts = this.ics._datepickerOpts;
        this._dates.sdate = new Date(); //todaydate
        this._dates.edate = new Date(); //todaydate
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.sdate);
    }
    RpSIDComponent.prototype.gologout = function () {
        this._cdcno = "";
        rp_sidupdate_component_1.RpSIDUpdateComponent._objst = { "cdcno": "", "appId": "", "name": "", "qNo": "", "appointmentDate": "", "email": "", "tNo": "", "appDate": null, "passNo": "" };
        this._obj = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "" };
        this._router.navigate(['/SIDLogin']);
    };
    RpSIDComponent.prototype.goUpdate = function () {
        this._router.navigate(['SIDUpdate', this._obj.cdcno]);
    };
    RpSIDComponent.prototype.checkLogin = function () {
        if (this.ics._sidprofile.check == false || this.ics._sidprofile.username == "") {
            this._router.navigate(['/SIDLogin']);
        }
    };
    RpSIDComponent.prototype.confirm = function () {
        if (confirm("Are you sure to delete this record")) {
            this.goDelete();
        }
        else {
            this.goPost();
        }
    };
    RpSIDComponent.prototype.goPost = function () {
        var _this = this;
        if (this._cdcno != null) {
            this._loginload = true;
            if (this.apiUrl == null && this.apiUrl == undefined) {
                // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
                this._loginload = true;
            }
            this._url = this.ics._apiurl + 'control/search';
            var profile = { "cdcno": this._cdcno, "commandCenter": this._remember };
            this.http.doPost(this._url, profile).subscribe(function (data) {
                _this._obj = data;
                if (_this.apiUrl == null && _this.apiUrl == undefined) {
                    _this._loginload = true;
                    _this.ics.sendBean({ t1: "rp-msg-off" });
                }
                if (data.commandCenter == false) {
                    _this._loginload = false;
                    _this.flagsave = true;
                    _this._result = "No Record Found";
                }
                else {
                    _this._loginload = false;
                    _this.flagsave = false;
                    _this._result = "Record Found";
                }
            }, function (error) {
                _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
            }, function () { });
        }
    };
    RpSIDComponent.prototype.goDelete = function () {
        var _this = this;
        this._url = this.ics._apiurl + 'control/deleteData';
        var profile = { "cdcno": this._cdcno, "username": this.ics._sidprofile.username, "commandCenter": this._remember };
        this.http.doPost(this._url, profile).subscribe(function (data) {
            console.log(data.role);
            if (_this.apiUrl == null && _this.apiUrl == undefined) {
                _this.ics.sendBean({ t1: "rp-msg-off" });
            }
            if (data.role == 1) {
                _this._obj = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "" };
                _this._cdcno = "";
                _this._result = "Data has been deleted";
                _this.flagsave = true;
            }
        }, function (error) {
            _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
        }, function () { });
    };
    RpSIDComponent.prototype.goexcel = function () {
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.edate);
        if (this.startDate != "" || this.endDate != "") {
            if (this.startDate <= this.endDate) {
                var filename = "SIDDataList_";
                var url = this.ics._apiurl + 'control/SIDExcelExport?&filename=' + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
                this._excelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ics._apiurl + 'control/SIDExcelExport?&filename=' + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate);
                var redirectWindow = window.open(url, ' _blank').focus();
            }
            else {
                this.check = false;
                this.datelabel = "Start date should not be greater than to end date.";
            }
        }
    };
    RpSIDComponent = __decorate([
        core_1.Component({
            selector: 'rp-sid',
            template: " \n \n <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n <div class=\"modal fade\" id=\"ExcelExportForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header image-center\">\n       <img  alt=\"avatar\" class=\"modal-title img-responsive\" src=\"image/sidExcel.jpg\" />\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">         \n          <span aria-hidden=\"true\">&times;</span>          \n        </button>\n      \n      </div>\n      <div class=\"modal-body mx-3\">\n        <div class=\"md-form mb-5\">\n          <div class=\"row col-md-12\">\n          <label class=\"datelabel\" data-error=\"wrong\" data-success=\"right\" for=\"form3\">Start Date:</label>&nbsp;&nbsp;\n          \n          <datetime class=\"datetime\" for=\"form3\" [(ngModel)]=\"_dates.sdate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"></datetime>\n         </div>\n        </div>\n\n        <div class=\"md-form mb-5\">\n        <div class=\"row col-md-12\">\n         <label class=\"datelabel\" data-error=\"wrong\" data-success=\"right\" for=\"form2\">End Date:</label>&nbsp;&nbsp;&nbsp;\n         \n         <datetime class=\"datetime\" [(ngModel)]=\"_dates.edate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"></datetime>\n        </div> \n        </div>\n        \n         <div class=\"checkdate-label-danger\">\n            <span *ngIf=\"datelabel != null\" class=\"label\">{{datelabel}} </span>\n         </div>\n        \n      </div>\n      <div class=\"modal-footer d-flex justify-content-center\">\n        <button class=\"btn btn-primary btn-md\" (click)=\"goexcel()\"><i class=\"fa fa-file ml-1\"></i>&nbsp;Export </button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"row clearfix\"> -->\n<!-- <div class=\"for-nav col-md-12\"> -->\n <nav class=\"navbar navbar-fluid\">\n  <div class=\"nav-container\">\n    <div class=\"navbar-header\">\n      <div class=\"navbar-brand\">\n        SID Data Checking System\n      </div>\n    </div>  \n     \n    <ul class=\"nav navbar-nav navbar-right\">  \n     \n      <div (click)=\"gologout()\"  class=\"logout\"><span class=\"fas fa-sign-out-alt\"  aria-hidden=\"true\"></span> Logout</div>    \n    </ul>\n  </div>\n</nav>\n<!-- </div> -->\n\n  <!--  <div class=\"row col-xs-12 col-sm-12 col-md-12 col-lg-12  \">    -->\n      <!-- <div class=\"container\">-->\n        <div class=\"card card-container\">\n           <img id=\"profile-img\" class=\"profile-img-card\" src=\"image/sid.jpg\" />\n           <div class=\"text-center\">\n             <h5>SID Data Checking System</h5>\n           </div>\n            <form class=\"form-signin\">\n              <!-- <input type=\"text\" id=\"name\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Name \" required autofocus> -->\n               <input type=\"text\" id=\"cdcno\" class=\"form-control\" ngDefaultControl placeholder=\"CDC NO\" [(ngModel)]=\"_cdcno\" [ngModelOptions]=\"{standalone: true}\" required autofocus> \n               <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"goPost()\">                  \n                <span>\n                  <i class=\"fa fa-search\" aria-hidden=\"true\" ></i> \n                   &nbsp; Search\n                </span>\n                    <span *ngIf=\"_loginload\" style=\"position: absolute;margin-top: -2px;\">\n                      <div class=\"ld ld-pie ld-spin-fast\" style=\"font-size:1.5em\"></div>\n                    </span>\n               </button>                 \n            </form>\n            \n            <button class=\"btn btn-lg btn-primary btn-block btn-signin\" data-toggle=\"modal\" data-target=\"#ExcelExportForm\">\n               <span>                \n                 <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n                  &nbsp; Export Excel\n                </span>\n              </button>\n              <div class=\"alert alert-danger\"  *ngIf=\"_result == 'No Record Found'\">\n                 <strong>Warning!</strong> No Record Found\n              </div>\n              <div class=\"alert alert-success\"  *ngIf=\"_result == 'Record Found'\">\n                  <strong>Success!</strong> Record Found\n              </div>\n              <div class=\"alert alert-success\"  *ngIf=\"_result == 'Data has been deleted'\">\n                  <strong>Success!</strong> Data has been deleted\n              </div>\n        </div>\n        \n        \n        <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                  <thead>\n                     <tr>\n                       <th> CDC NO </th> \n                       <th>APPLICATION ID</th>                              \n                       <th> QUEUE_NO</th>                                    \n                       <th> NAME</th>\n                       <th> TELEPHONE NUMBER</th>\n                       <th> EMAIL</th>\n                       <th> APPOINTMENT DATE </th>\n                       <th> PASSWORD NUMBER </th>\n                       <th></th>\n                      </tr>\n                   </thead>\n                      <tr class=\"datarow\">\n                        <td class=\"data\">{{_obj.cdcno}}</td>                               \n                        <td class=\"data\">{{_obj.appId}}</td>\n                        <td class=\"data\">{{_obj.qNo}}</td>                               \n                        <td class=\"data\">{{_obj.name}}</td>                               \n                        <td class=\"data\">{{_obj.tNo}}</td>\n                        <td class=\"data\">{{_obj.email}}</td>\n                        <td class=\"data\">{{_obj.appDate}}</td>\n                        <td class=\"data\">{{_obj.passNo}}</td>\n                        <td class=\"data\" colspan=\"2\"> \n                          <input type=\"button\" class=\"btn btn-danger btn-block btn-sm\"  [disabled]=\"flagsave\" name=\"Delete\" value=\"Cancel\"  (click)=\"confirm()\">\n                          <input type=\"button\" class=\"btn btn-primary btn-block btn-sm\" *ngIf=\"_role == 2\"  [disabled]=\"flagsave\" name=\"update\" value=\"Update\"  (click)=\"goUpdate()\">\n                        </td>\n                       </tr>\n                  </table>\n                </div>\n            </div>\n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService, platform_browser_1.DomSanitizer])
    ], RpSIDComponent);
    return RpSIDComponent;
}());
exports.RpSIDComponent = RpSIDComponent;
//# sourceMappingURL=rp-sid.component.js.map