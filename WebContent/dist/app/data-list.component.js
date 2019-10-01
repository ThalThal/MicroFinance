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
var platform_browser_1 = require('@angular/platform-browser');
var rp_references_1 = require('./framework/rp-references');
var rp_http_service_1 = require('./framework/rp-http.service');
var rp_intercom_service_1 = require('./framework/rp-intercom.service');
var rp_client_util_1 = require('./util/rp-client.util');
core_2.enableProdMode();
var DataListComponent = (function () {
    function DataListComponent(ics, _router, route, http, ref, sanitizer) {
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
        this._obj = { "data": [{ "CDC_NO": "", "QUEUE_NO": "", "TRANSACTION_CODE": "", "REASON": "", "NAME": "", "OTHER_NAME": "", "RANK": "", "DOB": null, "NRC_NO": "", "POB": "", "NATIONALITY": "", "MANNING_AGENT": "", "GENDER": "", "HEIGHT": "", "WEIGHT": "", "COMPLEXION": "", "MARITAL_STATUS_CODE": "", "EDUCATION": "", "DENTIFYING_CHARACTERISTICS": "", "RELIGION_CODE": "", "TELEPHONE_NUMBER": "", "SEASERVICE_DATE_START": "", "PASSPORT_NUMBER": "", "PASSPORT_ISSUE_DATE": null, "PASSPORT_EXPIRY_DATE": null, "PASSPORT_ISSUE_BY": "", "PASSPORT_ISSUE_PLACE": "", "CODEINDEX": "", "CDC_ISSUE_DATE": null, "CDC_EXPIRY_DATE": null, "CDC_ISSUE_BY": "", "CDC_ISSUE_PLACE": "", "FATHER_NAME": "", "FATHER_NRC": "", "MOTHER_NAME": "", "MOTHER_NRC": "", "ADDRESS_PERMANENT": "", "ADDRESS_TEMPORARY": "", "NOK_NAME": "", "NOK_RELATION": "", "NOK_ADDRESS": "", "SHIP_NAME": "", "SIGNON_DATE": null, "SIGNOFF_DATE": null, "APPOINTMENTDATE": null, "ISDELETED": "", "ISISSUED": "", "EMAIL": "" }] };
        this._dates = { "sdate": null, "edate": null };
        this.startDate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this.flagExport = false;
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        this.datepickerOpts = this.ics._datepickerOpts;
        this._dates.sdate = new Date(); //todaydate
        this._dates.edate = new Date(); //todaydate
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.sdate);
        this.search(this._srchobj);
        // this.searchVal();
    }
    DataListComponent.prototype.goView = function () {
        this._router.navigate(['/login']);
    };
    //    goNew() {
    //       this._obj = {"data": [{"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,
    //    "syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n13":0,"n14":0,
    //    "n11":0,"n12":0,"state":false,"t9":"","t1":"","t2":"","t5":"","t6":"","t3":"","t7":"","t10":"","t4":"","t8":"","msg":""}]}
    //         this._router.navigate(['slip']);
    //     }
    DataListComponent.prototype.search = function (p) {
        var _this = this;
        if (p.pager.end == 0) {
            p.pager.end = this.ics._profile.n1;
        }
        if (p.pager.size == 0) {
            p.pager.size = this.ics._profile.n1;
        }
        var url = this.ics._apiurl + 'service001/searchSlip?searchVal=' + this._searchVal + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
        ;
        var json = p;
        this.http.doPost(url, json).subscribe(function (response) {
            // console.log(JSON.stringify(response) + " get data");
            if (response != null && response != undefined && response.state) {
                _this._totalcount = response.totalCount;
                _this._array = response.data;
            }
            else {
                //this._obj.data = [];
                _this._array = [];
                _this._totalcount = 1;
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
            }
        }, function (error) { }, function () { });
    };
    DataListComponent.prototype.searchVal = function () {
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 1, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = [];
        this.search(this._srchobj);
    };
    DataListComponent.prototype.changeAS = function (event) {
        this._adsearch = event;
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 1, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = this._adsearch;
        this.search(this._srchobj);
    };
    DataListComponent.prototype.hideShowAS = function (event) {
        this._flagas = event;
    };
    DataListComponent.prototype.changedPager = function (event) {
        var k = event.flag;
        this._srchobj.pager = event.obj;
        this._srchobj.search = this._adsearch;
        if (k) {
            this.search(this._srchobj);
        }
    };
    DataListComponent.prototype.changeDefault = function () {
        this._flagSortCode = false;
        this._flagSortDesc = false;
    };
    DataListComponent.prototype.addSort = function (e) {
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
    DataListComponent.prototype.searchByCustomDate = function () {
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
    DataListComponent.prototype.goExcel = function () {
        var filename = "SlipList_";
        var url = this.ics._apiurl + 'service001/SlipExcelExport?searchVal=' + this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
        this._excelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ics._apiurl + 'service001/SlipExcelExport?searchVal=' + this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate);
        var redirectWindow = window.open(url, ' _blank').focus();
        // this.flagExport = false;
    };
    DataListComponent = __decorate([
        core_1.Component({
            selector: 'data-list',
            template: "\n  \n  <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<!------ Include the above in your HEAD tag ---------->\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n \n    <form class= \"form-horizontal\"  (ngSubmit)=\"goPost()\" style=\"padding-top:15px;\"> \n   \n  \n\n\n<div class=\"container\"> \n    <br>\n\n    <div class=\"row\">\n         \n\n <div class=\"col-md-12\">\n                    <!--Start Form with header-->\n                    <form action=\"\" method=\"post\">\n                        <div class=\"card border-primary rounded\">\n                            <div class=\"card-header p-0\">\n                                <div class=\"bg-info text-white text-center py-2\">\n                                    <h3><i class=\"fa fa-credit-card\"></i> SID Data</h3>\n                                    <p class=\"m-0\">SID Data Lists</p>\n                                </div>\n                            </div>\n                            <div class=\"card-body p-3\">\n                            \n                            \n                           \n  <div class=\"row col-md-12\">                   \n                    <div class=\"input-group\">\n                            <label class=\"col-md-2 control-label\" style=\"text-align: right;width: 14%;\">Date:</label>\n                            <div class=\"col-md-3\">\n                               <datetime [(ngModel)]=\"_dates.sdate\" (ngModelChange)=\"searchByCustomDate()\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"searchByCustomDate()\"></datetime>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <datetime [(ngModel)]=\"_dates.edate\" (ngModelChange)=\"searchByCustomDate()\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"searchByCustomDate()\"></datetime>\n                              </div>\n                              <input [(ngModel)]=\"_searchVal\" type=\"text\" placeholder=\"Search\" class=\"form-control my-0 py-1 red-border\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"searchVal()\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text red lighten-3\"  (click)=\"searchVal()\" id=\"basic-text1\"><i class=\"fas fa-search text-grey\" aria-hidden=\"true\"></i></span>\n                                </div>\n                       </div>\n                       </div>  \n                                 <div class=\"col-md-12\">&nbsp;</div> \n                           <div class=\"table-responsive\">\n                              <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                                <thead>\n                          \n                                <tr>\n\n                                    <th > CDC NO</th>\n                                    <th > QUEUE NO </th>\n                                    <th > TRANSACTION CODE </th>\n                                    <th > REASON</th>\n                                    <th > NAME</th>\n                                    <th > RANK</th>\n                                    <th > NRC NO </th>                                    \n                                    <th > PLACE OF BIRTH</th>\n                                    <th > NATIONALITY</th>\n                                    <th > MANNING AGENT</th>\n                                    <th > GENDAR </th>\n                                    <th > HEIGHT</th>\n                                    <th > WEIGHT</th>\n                                    <th>COMPLEXION</th>\n                                    <th>MATERIAL STATUS</th>\n                                    <th>EDUCATION</th>\n                                    <th>IDENTIFYING CHARACTERISTICS</th>\n                                    <th>RELEGION CODE</th>\n                                    <th>TELEPHONE NUMBER</th>\n                                    <th>SEASERVICE START DATE</th>\n                                    <th>PASSPORT NUMBER</th>\n                                    <th>PASSPORT ISSUE DATE</th>\n                                    <th>PASSPORT EXPIRED DATE</th>\n                                    <th>PASSPORT ISSUE BY</th>\n                                    <th>PASSPORT ISSUE PLACE</th>\n                                    <th>CODE INDEX</th>\n                                    <th>CDC ISSUE DATE</th>\n                                    <th>CDC EXPIRY DATE</th>\n                                    <th>CDC ISSUE BY</th>\n                                    <th>CDC ISSUE PLACE</th>\n                                    <th>FATHER NAME</th>\n                                    <th>FATHER NRC</th>\n                                    <th>MOTHER NAME</th>\n                                    <th>MOTHER NRC</th>\n                                    <th>ADDRESS PERMANENT</th>\n                                    <th>ADDRESS TEMPORARY</th>\n                                    <th>NOK NAME</th>\n                                    <th>NOK RELATION</th>\n                                    <th>NOK ADDRESS</th>\n                                    <th>SHIP NAME</th>\n                                    <th>SIGNON DATE</th>\n                                    <th>SIGNOFF DATE</th>\n                                    <th>APPOINTMENT DATE</th>\n                                    <th>ACCESS TIME</th>\n                                    <th>ISDELETED</th>\n                                    <th>SISSUED</th>\n                                    <th>EMAIL</th>                             \n                                </tr>\n                                </thead>\n                                <tr *ngFor=\"let obj of _array\">\n                                <td>{{obj.CDC_NO}}</td>\n                                <td>{{obj.QUEUE_NO}}</td>\n                                <td>{{obj.TRANSACTION_CODE}}</td>\n                               <td>{{obj.REASON}}</td>\n                               <td>{{obj.NAME}}</td>\n                               <td>{{obj.OTHER_NAME}}</td>\n                               <td>{{obj.RANK}}</td>\n                               <td>{{obj.DOB}}</td>\n                               <td>{{obj.NRC_NO}}</td>\n                               <td>{{obj.POB}}</td>\n                               <td>{{obj.NATIONALITY}}</td>\n                               <td>{{obj.MANNING_AGENT}}</td>\n                               <td>{{obj.GENDER}}</td>\n                               <td>{{obj.HEIGHT}}</td>\n                               <td>{{obj.WEIGHT}}</td>\n                               <td>{{obj.COMPLEXION}}</td>\n                               <td>{{obj.MARITAL_STATUS_CODE}}</td>\n                               <td>{{obj.EDUCATION}}</td>\n                               <td>{{obj.IDENTIFYING_CHARACTERISTICS}}</td>\n                               <td>{{obj.RELIGION_CODE}}</td>\n                               <td>{{obj.TELEPHONE_NUMBER}}</td>\n                               <td>{{obj.SEASERVICE_DATE_START}}</td>\n                               <td>{{obj.PASSPORT_NUMBER}}</td>\n                               <td>{{obj.PASSPORT_ISSUE_DATE}}</td>\n                               <td>{{obj.PASSPORT_EXPIRY_DATE}}</td>\n                               <td>{{obj.PASSPORT_ISSUE_BY}}</td>\n                               <td>{{obj.PASSPORT_ISSUE_PLACE}}</td>\n                               <td>{{obj.CODEINDEX}}</td>\n                               <td>{{obj.CDC_ISSUE_DATE}}</td>\n                               <td>{{obj.CDC_EXPIRY_DATE}}</td>\n                               <td>{{obj.CDC_ISSUE_BY}}</td>\n                               <td>{{obj.CDC_ISSUE_PLACE}}</td>\n                               <td>{{obj.FATHER_NAME}}</td>\n                               <td>{{obj.FATHER_NRC}}</td>\n                               <td>{{obj.MOTHER_NAME}}</td>\n                               <td>{{obj.MOTHER_NRC}}</td>\n                               <td>{{obj.ADDRESS_PERMANENT}}</td>\n                               <td>{{obj.ADDRESS_TEMPORARY}}</td>\n                               <td>{{obj.NOK_NAME}}</td>\n                               <td>{{obj.NOK_RELATION}}</td>\n                               <td>{{obj.NOK_ADDRESS}}</td>\n                               <td>{{obj.SHIP_NAME}}</td>\n                               <td>{{obj.SIGNON_DATE}}</td>\n                               <td>{{obj.SIGNOFF_DATE}}</td>\n                               <td>{{obj.APPOINTMENTDATE}}</td>\n                               <td>{{obj.ISDELETED}}</td>\n                               <td>{{obj.ISISSUED}}</td>\n                               <td>{{obj.EMAIL}}</td>\n                                </tr>\n\n                                </table>\n                                <pager id=\"pgclaim\" rpPageSizeMax=\"100\" [(rpCurrent)]=\"_srchobj.pager.current\" [(rpModel)]=\"_totalcount\" (rpChanged)=\"changedPager($event)\"></pager>\n\n\n                            </div>\n                         \n              \n                               <div class=\"text-center\">\n                                \n                                <button class=\"btn btn-info\"  id=\"cancel\" type=\"button\" (click)=\"goView()\">Go Back</button>\n                                <button class=\"btn btn-info\" type=\"button\" [disabled]=\"flagExport\" (click)=\"goExcel()\">Export</button>\n                                </div>\n\n     </div>\n                        </div>\n                    </form>\n                    <!--Form with header-->\n\n                    </div>\n                </div>\n    \n</div>\n\n   \n    \n    </form>\n    \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, platform_browser_1.DomSanitizer])
    ], DataListComponent);
    return DataListComponent;
}());
exports.DataListComponent = DataListComponent;
//# sourceMappingURL=data-list.component.js.map