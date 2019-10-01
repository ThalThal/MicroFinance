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
var RpImportExcelComponent = (function () {
    function RpImportExcelComponent(ics, _router, route, http, sanitizer) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.sanitizer = sanitizer;
        this.url = "url";
        this.check = true;
        this.flagsave = true;
        this.remembercheck = true;
        this._loginload = false;
        this._dates = { "sdate": null, "edate": null };
        this.appdate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this._obj = { "centerNo": "", "groupNo": "", "loaneeNo": "", "collectionDay": "", "loanOfficerName": "", "clientName": "", "gender": "", "age": 0, "currentAge": 0, "husbandORfatherName": "", "joiningDate": null, "nrcNumber": "", "townshipName": "", "wardORvillageTractName": "", "villageNameORcenterName": "", "address": "", "remarks": "", "groupCommittees": "", "replaceORsubstitute": "", "groupDissolveDate": null, "oldGroup": "" };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        this.datepickerOpts = this.ics._datepickerOpts;
        this.ics.sendBean(new rp_bean_1.RpBean());
        // this._loginload = false;
        this._dob = new Date(); //todaydate
        //  this.endDate = this._util.getDatePickerDate(this._dates.sdate);
    }
    RpImportExcelComponent.prototype.calculateByCustomDate = function () {
        var timeDiff = Math.abs(Date.now() - this._dob.getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        this._age = age;
        this._currentAge = age;
    };
    RpImportExcelComponent.prototype.getFileDetails = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            console.log(reader);
        }
        for (var i = 0; i < event.target.files.length; i++) {
            var type = event.target.files[i].type;
            if (type == "application/pdf") {
                var name = event.target.files[i].name;
                var size = event.target.files[i].size;
                var modifiedDate = event.target.files[i].lastModifiedDate;
                this._name = name;
                console.log('Name: ' + name + "\n" +
                    'Type: ' + type + "\n" +
                    'Last-Modified-Date: ' + modifiedDate + "\n" +
                    'Size: ' + Math.round(size / 1024) + " KB");
            }
            else {
                console.log("Error");
            }
        }
    };
    RpImportExcelComponent.prototype.goRegister = function () {
        // this._obj.centerNo=this._centerNo;
        // this._obj.groupNo=this._groupNo;
        // this._obj.loaneeNo=this._loaneeNo;
        // this._obj.collectionDay=this._collectionDay;
        // this._obj.loanOfficerName=this._loanOfficerName;
        // this._obj.clientName=this._clientName;
        // this._obj.gender=this._gender;
        // this._obj.age=this._age;
        // this._obj.currentAge=this._currentAge;
        // this._obj.husbandORfatherName=this._husbandORfatherName;
        // this._obj.joiningDate=this._joiningDate;
        // this._obj.nrcNumber=this._nrcNumber;
        // this._obj.townshipName=this._townshipName;
        // this._obj.wardORvillageTractName=this._wardORvillageTractName;
        // this._obj.villageNameORcenterName=this._villageNameORcenterName;
        // this._obj.address=this._address;
        // this._obj.remarks=this._remarks;
        // this._obj.groupCommittees=this._groupCommittees;
        // this._obj.replaceORsubstitute=this._replaceORsubstitute;
        // this._obj.groupDissolveDate=this._groupDissolveDate;
        // this._obj.oldGroup=this._oldGroup;
        var _this = this;
        //  this._loginload = true;
        if (this.apiUrl == null && this.apiUrl == undefined) {
            // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
            this._loginload = true;
        }
        this._url = this.ics._apiurl + 'control/register';
        var profile = { "centerNo": this._centerNo, "groupNo": this._groupNo, "loaneeNo": this._loaneeNo, "collectionDay": this._collectionDay, "loanOfficerName": this._loanOfficerName, "clientName": this._clientName, "gender": this._gender, "age": this._age, "currentAge": this._currentAge, "husbandORfatherName": this._husbandORfatherName, "joiningDate": this._joiningDate, "nrcNumber": this._nrcNumber, "townshipName": this._townshipName, "wardORvillageTractName": this._wardORvillageTractName, "villageNameORcenterName": this._villageNameORcenterName, "address": this._address, "remarks": this._remarks, "groupCommittees": this._groupCommittees, "replaceORsubstitute": this._replaceORsubstitute, "groupDissolveDate": this._groupDissolveDate, "oldGroup": this._oldGroup };
        this.http.doPost(this._url, profile).subscribe(function (data) {
            if (_this.apiUrl == null && _this.apiUrl == undefined) {
                _this._loginload = true;
                _this.ics.sendBean({ t1: "rp-msg-off" });
            }
            if (data.result == null || data.result == "") {
                _this._loginload = false;
                // this._result = ; 
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Not Successful" });
            }
            if (data.result != null && data.result == "Register") {
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Successful" });
            }
        }, function (error) {
            _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
        }, function () { });
    };
    RpImportExcelComponent.prototype.goPost = function (cdcno) {
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
        }, function (error) {
            _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
        }, function () { });
    };
    RpImportExcelComponent._objst = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "", "appointmentDate": "" };
    RpImportExcelComponent = __decorate([
        core_1.Component({
            selector: 'rp-importexcel',
            template: " \n \n <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n \n\n   <div class=\"list-container\">\n           <img id=\"profile-img\" class=\"profile-img-card\" src=\"image/DPlogo.png\" />\n           <div class=\"text-center\">\n             <h3 style=\"color:green\"><strong> Diamond Palace Microfinance </strong></h3>\n           </div>\n           \n           \n           \n<form class=\"form-update\">     \n          \n            <div class=\"row\"> <!-- First Main row Start   -->\n                   <div class=\"col-md-12\"> <!-- First Main md12 Start   -->    \n                          <div class=\"card border-success rounded\"> \n                                      <div class=\"card-header p-0\">\n                                          <div class=\"bg-success text-white text-center py-2\">\n                                              <h3><i class=\"fa fa-upload\"></i>  Import Client Excel  </h3>\n                                          </div>\n                                      </div>\n                                     \n                                     \n                          <!--  <div class=\"card container\"> Card Container Start  -->   \n                                        <div class=\"row\"> <!-- Second Main Row Start -->\n                                        \n                                               <div class=\"col-md-1\">  \n                                               </div>\n                                        \n                                              <div class=\"col-md-3 mt-5\">\n                                              <img id=\"excel\" class=\"excel\" src=\"image/excel.jpg\" />\n                                              </div> <!-- Md3 End  -->\n                                              \n                                              <div class=\"col-md-2 mt-5\">                                              \n                                                   <div class=\"col-sm-5 mt-5\"> </div>                                         \n                                                 <img id=\"arrow\" class=\"arrow\" src=\"image/arrow2.gif\" width=\"100px\" height=\"100px\" />\n                                              </div> <!-- Md2 End  -->\n                                              \n                                              <div class=\"col-md-6\">\n                                                 <div class=\"card container\"> <!-- Card Container Start  --> \n                                                    <div class=\"text-center\">  \n                                                      <div class=\"panel-body\">\n                  \n\n                                                                             <div class=\"panel panel-info\">\n                                                                               <div class=\"panel-heading\" hight:12px><h5><strong>Please Choose the Xlsx File that you want to upload.</strong></h5></div> \n                                                                                <div class=\"panel-body\">\n                                                                                \n                                                                                    <form style=\"margin-top: 15px;padding: 20px;\"  class=\"form-horizontal\">                                                                                   \n                                                            \n                                                                                                <div class=\"row\">\n                                                                                                        Import File:&nbsp; &nbsp;                                                                                      \n                                                                                                        <input type=\"file\" align=\"center\" name=\"import_file\"/> \n                                                                                                </div>\n                                                                                                \n                                                                                              <input type=\"submit\" value=\"Import CSV or Excel File\" class=\"btn btn-success btn-sm mt-5\" > \n                                                                                      </form>\n                                                                                        \n                                                                           \n                                                               \n                                                                                   </div>\n                                                                                 </div>\n                                                                               </div>\n                                                    \n                                                    </div>\n                                                  </div> <!-- Card Container End  --> \n                                                    \n                                               <!--      <button class=\"btn btn-primary\"><i class=\"fa fa-upload\"></i>&nbsp;&nbsp;Import CSV or Excel File</button> -->\n                                                   \n                                                    \n                                              </div> <!-- Md6 End  -->\n                                          \n                                    </div> <!-- Second Main Row End -->  \n                          <!--   </div> Card Container End  -->                                     \n                          </div> <!-- Card Border End  -->         \n                       </div> <!-- Main Md12 End  -->\n                </div> <!-- First Main Row End  -->       \n            \n             \n             \n        \n             \n </form>\n         \n  </div> <!-- List Container End  -->\n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, platform_browser_1.DomSanitizer])
    ], RpImportExcelComponent);
    return RpImportExcelComponent;
}());
exports.RpImportExcelComponent = RpImportExcelComponent;
//# sourceMappingURL=rp-importexcel.component.js.map