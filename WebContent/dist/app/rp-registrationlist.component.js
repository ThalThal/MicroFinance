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
var platform_browser_1 = require('@angular/platform-browser');
var rp_references_1 = require('./framework/rp-references');
var rp_client_util_1 = require('./util/rp-client.util');
core_2.enableProdMode();
var RpRegistrationListComponent = (function () {
    function RpRegistrationListComponent(ics, _router, route, http, ref, sanitizer) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.ref = ref;
        this.sanitizer = sanitizer;
        this._array = [];
        this._totalcount = 1;
        this._searchVal = "";
        this._adsearch = [];
        this._flagas = true;
        this._sort = "desc";
        this._type = "0";
        this._flagSortCode = false;
        this._flagSortDesc = false;
        this._srchobj = { "pager": { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 }, "search": [] };
        this._obj = { "data": [{ "centerNo": null, "groupNo": null, "loaneeNo": null, "collectionDay": null, "loanOfficerName": null, "clientName": null, "gender": null, "age": 0, "currentAge": 0, "husbandORfatherName": null, "joiningDate": null, "nrcNumber": null, "townshipName": null, "wardORvillageTractName": null, "villageNameORcenterName": null, "address": null, "remarks": null, "groupCommittees": null, "replaceORsubstitute": null, "groupDissolveDate": null, "oldGroup": null, "result": null, "dob": null, "phNumber": null, "filePath": null }] };
        this._dates = { "sdate": null, "edate": null };
        this.startDate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this.flagExport = true;
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        this.datepickerOpts = this.ics._datepickerOpts;
        this._dates.sdate = new Date(); //todaydate
        this._dates.edate = new Date(); //todaydate
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.sdate);
        this.search(this._srchobj);
        // this.searchVal();
    }
    RpRegistrationListComponent.prototype.goView = function () {
        this._router.navigate(['Register']);
    };
    RpRegistrationListComponent.prototype.goDelete = function (id, filePath) {
        var _this = this;
        var url = this.ics._apiurl + 'control/DeleteData';
        var profile = { "id": id, "filePath": filePath };
        this.http.doPost(url, profile).subscribe(function (data) {
            // console.log(JSON.stringify(response) + " get data");
            if (data != null && data != undefined && data.state) {
                if (data.state) {
                    _this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": "Delete Successful" });
                    _this.search(_this._srchobj);
                }
                else {
                    _this.ics.sendBean({ "t1": "rp-alert", "t2": "Error", "t3": "Delete Unsuccessful" });
                }
            }
            else {
                //this._obj.data = [];
                _this._array = [];
                _this._totalcount = 1;
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
            }
        }, function (error) { }, function () { });
    };
    RpRegistrationListComponent.prototype.search = function (p) {
        var _this = this;
        if (p.pager.end == 0) {
            p.pager.end = this.ics._profile.n1;
        }
        if (p.pager.size == 0) {
            p.pager.size = this.ics._profile.n1;
        }
        var url = this.ics._apiurl + 'control/searchData?searchVal=' + this._searchVal + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
        ;
        var json = p;
        this.http.doPost(url, json).subscribe(function (data) {
            // console.log(JSON.stringify(response) + " get data");
            if (data != null && data != undefined && data.state) {
                _this._totalcount = data.totalCount;
                _this._array = data.data;
                if (_this._array != null) {
                    _this.flagExport = false;
                }
            }
            else {
                //this._obj.data = [];
                _this._array = [];
                _this._totalcount = 1;
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
            }
        }, function (error) { }, function () { });
    };
    RpRegistrationListComponent.prototype.searchVal = function () {
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 1, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = [];
        this.search(this._srchobj);
    };
    RpRegistrationListComponent.prototype.changeAS = function (event) {
        this._adsearch = event;
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 1, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = this._adsearch;
        this.search(this._srchobj);
    };
    RpRegistrationListComponent.prototype.hideShowAS = function (event) {
        this._flagas = event;
    };
    RpRegistrationListComponent.prototype.changedPager = function (event) {
        var k = event.flag;
        this._srchobj.pager = event.obj;
        this._srchobj.search = this._adsearch;
        if (k) {
            this.search(this._srchobj);
        }
    };
    RpRegistrationListComponent.prototype.changeDefault = function () {
        this._flagSortCode = false;
        this._flagSortDesc = false;
    };
    RpRegistrationListComponent.prototype.addSort = function (e) {
        if (e == 1) {
            if (!this._flagSortCode) {
                this.changeDefault();
                this._flagSortCode = true;
                this._sort = "desc";
                this._type = "1";
                this.search(this._srchobj);
            }
            else if (this._flagSortCode) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "1";
                this.search(this._srchobj);
            }
        }
        else if (e == 2) {
            if (!this._flagSortDesc) {
                this.changeDefault();
                this._flagSortDesc = true;
                this._sort = "desc";
                this._type = "2";
                this.search(this._srchobj);
            }
            else if (this._flagSortDesc) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "2";
                this.search(this._srchobj);
            }
        }
    };
    RpRegistrationListComponent.prototype.searchByCustomDate = function () {
        this._srchobj = { "pager": { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 }, "search": [] };
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.edate);
        if (this.startDate != "" || this.endDate != "") {
            if (this.startDate <= this.endDate) {
                this.search(this._srchobj);
            }
            else {
                this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": "Start date should not be greater than to date." });
            }
        }
    };
    RpRegistrationListComponent.prototype.downloadExcel = function () {
        var filename = "DataList_";
        var url = this.ics._apiurl + 'control/FinanceDataExcelExport?searchVal=' + this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
        this._excelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ics._apiurl + 'service001/S-ExcelExport?searchVal=' + this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate);
        var redirectWindow = window.open(url, ' _blank').focus();
    };
    // goDownload(){
    //      let url = this.ics._apiurl + 'control/DownloadAttachment?filename=USER20190919162959.pdf';
    //    var redirectWindow = window.open(url,' _blank').focus();
    // }
    RpRegistrationListComponent.prototype.goDownload = function (filePath) {
        var url = this.ics._apiurl + 'control/DownloadAttachment?filePath=' + filePath;
        var redirectWindow = window.open(url, ' _blank').focus();
    };
    RpRegistrationListComponent.prototype.goUpdate = function (id) {
        this._router.navigate(['UpdateData', id]);
    };
    RpRegistrationListComponent = __decorate([
        core_1.Component({
            selector: 'rp-registrationlist',
            template: " \n \n <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n \n\n   <div class=\"list-container\">\n           <img id=\"profile-img\" class=\"profile-img-card\" src=\"image/DPlogo.png\" />\n           <div class=\"text-center\">\n             <h3 style=\"color:green\"><strong> Diamond Palace Microfinance </strong></h3>\n           </div>\n           \n           \n           \n<form class=\"form-update\">     \n          \n            <div class=\"row\"> <!-- First Main row Start   -->\n                   <div class=\"col-md-12\"> <!-- First Main md12 Start   -->    \n                          <div class=\"card border-success rounded\">\n                                      <div class=\"card-header p-0\">\n                                          <div class=\"bg-success text-white text-center py-2\">\n                                              <h3><i class=\"fa fa-users\"></i>  Client Information List <i class=\"fa fa-users\"></i> </h3>\n                                          </div>\n                                      </div>\n                                     \n                                     \n                                                \n                <!-- ----------------------Search--------------------------- -->\n                   <div class=\"row col-md-12  mt-5\">                   \n                    <div class=\"input-group\">                                           \n                         <label class=\"col-md-2 control-label\" style=\"text-align: right;width: 14%;\"><strong>Choose Date:</strong></label>\n                                    <div class=\"col-md-3\">\n                                         <datetime [(ngModel)]=\"_dates.sdate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"searchByCustomDate()\"></datetime>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <datetime [(ngModel)]=\"_dates.edate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"searchByCustomDate()\"></datetime>\n                                    </div>\n                                    \n                                     \n                                      <div style=\"float:right;\">\n                                            <div class=\"input-group md-form form-sm \">\n                                                <div class=\"input-group-append\"> \n                                                    <input class=\"form-control my-0 py-1 red-border\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"_searchVal\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)= \"searchVal()\" aria-label=\"Search\">\n                                                    <span class=\"input-group-text red lighten-3\"  (click)=\"searchVal()\" id=\"basic-text1\"><i class=\"fas fa-search text-grey\" aria-hidden=\"true\"></i></span>\n                                              </div>\n                                             </div>\n                                      </div>\n                                      &nbsp;\n                                       <div class=\"text-center\">\n                                            <input type=\"submit\" value=\"Download Excel\" class=\"btn btn-info bth-sm\" (click)=\"downloadExcel()\" [disabled]=flagExport>\n                                       </div>\n                                 \n                            </div>\n                         </div>      \n                              <br> \n                   <!-- -------------------EndSearch-------------------------- --> \n                                     \n                                     \n                         <div class=\"box-body table-responsive no-padding mt-3\">\n                            <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                                <tr>\n                                    <th style=\"background-color:#D4BD00;\"> ID </th>\n                                    <th style=\"background-color:#D4BD00;\"> Center No </th>\n                                    <th style=\"background-color:#D4BD00;\"> Group No </th>\n                                    <th style=\"background-color:#D4BD00;\"> Loan No </th>\n                                    <th style=\"background-color:#D4BD00;\"> Collection Day </th>\n                                    <th style=\"background-color:#D4BD00;\"> Loan Officer Name </th>\n                                    <th style=\"background-color:#D4BD00;\"> Client Name </th>\n                                    <th style=\"background-color:#D4BD00;\"> Gender </th>\n                                    <th style=\"background-color:#D4BD00;\"> Age </th>\n                                    <th style=\"background-color:#D4BD00;\"> Current Age </th>\n                                    <th style=\"background-color:#D4BD00;\"> Husband/Father Name </th>\n                                    <th style=\"background-color:#D4BD00;\"> Joining Date </th>  \n                                    <th style=\"background-color:#D4BD00;\"> NRC Number </th>         \n                                    <th style=\"background-color:#D4BD00;\"> Township Name </th>\n                                    <th style=\"background-color:#D4BD00;\"> Ward/Village Tract Name </th>\n                                    <th style=\"background-color:#D4BD00;\"> Village Name/ Center Name</th>\n                                    <th style=\"background-color:#D4BD00;\"> Address</th>\n                                    <th style=\"background-color:#D4BD00;\"> Remarks</th>\n                                    <th style=\"background-color:#D4BD00;\"> Group Committes </th>\n                                    <th style=\"background-color:#D4BD00;\"> Replace/Subsittute</th>\n                                    <th style=\"background-color:#D4BD00;\"> Group Dissolve Date</th>\n                                    <th style=\"background-color:#D4BD00;\"> Old Group</th>\n                                    <th style=\"background-color:#D4BD00;\"> Date Of Birth</th>\n                                    <th style=\"background-color:#D4BD00;\"> Phone Number </th>\n                                    <th style=\"background-color:#D4BD00;\" colspan=\"3\"> Action Status </th>\n                                </tr>\n                                \n                                \n                               <tr *ngFor=\"let obj of _array\">\n                                <td>{{obj.id}} </td>\n                                <td>{{obj.centerNo}} </td>\n                                <td>{{obj.groupNo}} </td>\n                                <td>{{obj.loaneeNo}} </td>\n                                <td>{{obj.collectionDay}} </td>  \n                                <td>{{obj.loanOfficerName}}</td>\n                                <td>{{obj.clientName}} </td>\n                                <td>{{obj.gender}} </td>\n                                <td>{{obj.age}} </td>\n                                <td>{{obj.currentAge}} </td>  \n                                <td>{{obj.husbandORfatherName}} </td>\n                                <td>{{obj.joiningDate}} </td>\n                                <td>{{obj.nrcNumber}} </td>\n                                <td>{{obj.townshipName}} </td>\n                                <td>{{obj.wardORvillageTractName}} </td>  \n                                <td>{{obj.villageNameORcenterName}} </td>\n                                <td>{{obj.address}} </td>\n                                <td>{{obj.remarks}} </td>\n                                <td>{{obj.groupCommittees}} </td>\n                                <td>{{obj.replaceORsubstitute}} </td>  \n                                <td>{{obj.groupDissolveDate}} </td>\n                                <td>{{obj.oldGroup}} </td>\n                                <td>{{obj.dob}} </td>                             \n                                <td>{{obj.phNumber}} </td>                                \n                                <td><button class=\"btn btn-info btn-flat btn-xs\" title=\"Edit\" type=\"button\" (click)=\"goDownload(obj.filePath)\"><i class=\"fa fa-download\"></i></button></td>\n                                 <td><button class=\"btn btn-success btn-flat btn-xs\" title=\"Edit\" type=\"button\" (click)=\"goUpdate(obj.id)\"><i class=\"fa fa-edit\"></i></button></td>\n                                 <td> <button class=\"btn btn-danger btn-flat btn-xs\" title=\"Delete\" type=\"button\" (click)=\"goDelete(obj.id,obj.filePath)\"><i class=\"fa fa-trash\"></i></button></td>\n                                \n                                \n                                </tr>\n\n                                </table>\n                                \n                                <pager id=\"pgclaim\" rpPageSizeMax=\"100\" [(rpCurrent)]=\"_srchobj.pager.current\" [(rpModel)]=\"_totalcount\" (rpChanged)=\"changedPager($event)\"></pager>\n\n\n                           </div> <!-- End box body tabel -->\n                         \n              \n                               <div class=\"text-center\">                                \n                                   <input type=\"submit\" value=\"Go Back\" class=\"btn btn-success bth-sm mt-5\"  (click)=\"goView()\">\n                               </div>        \n                                     \n                                     \n                                     \n                                     \n                          </div> <!-- Card Border End  -->         \n                       </div> <!-- Main Md12 End  -->\n                </div> <!-- First Main Row End  -->       \n            \n             \n             \n        \n             \n </form>\n         \n  </div> <!-- List Container End  -->\n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, platform_browser_1.DomSanitizer])
    ], RpRegistrationListComponent);
    return RpRegistrationListComponent;
}());
exports.RpRegistrationListComponent = RpRegistrationListComponent;
//# sourceMappingURL=rp-registrationlist.component.js.map