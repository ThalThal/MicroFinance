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
// RP Framework
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_client_util_1 = require('../util/rp-client.util');
// Application Specific
var platform_browser_1 = require("@angular/platform-browser");
core_2.enableProdMode();
var FrmCustomerListComponent = (function () {
    function FrmCustomerListComponent(ics, _router, http, sanitizer) {
        this.ics = ics;
        this._router = _router;
        this.http = http;
        this.sanitizer = sanitizer;
        // Application Specific
        this._filter1 = "";
        this._output1 = "";
        this._searchVal = "";
        this._value = "";
        this._searching = false;
        this._array = [];
        this._totalcount = 1;
        this.rpModelChange = new core_1.EventEmitter();
        this.rpChanged = new core_1.EventEmitter();
        this._isModal = false;
        this._util = new rp_client_util_1.ClientUtil();
        this._flagas = true;
        this._adsearch = [];
        this._order = 2;
        this._type = "1";
        this._sort = "asc";
        this._srchobj = { "pager": { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 }, "search": [] };
        this._obj = { "syskey": 0, "autokey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0, "n11": 0, "n12": 0, "n13": 0, "n14": 0, "n15": 0, "n16": 0, "n17": 0, "n18": 0, "n19": 0, "n20": 0, "t25": "", "t24": "", "t1": "", "t9": "", "t2": "", "t4": "", "t14": "", "t12": "", "t18": "", "t19": "", "t5": "", "t6": "", "t8": "", "t16": "", "t20": "", "t15": "", "t7": "", "t21": "", "t11": "", "t22": "", "t3": "", "t17": "", "t10": "", "t13": "", "t23": "" };
        this._objs = { "data": [{ "syskey": 0, "autokey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0, "n11": 0, "n12": 0, "n13": 0, "n14": 0, "n15": 0, "n16": 0, "n17": 0, "n18": 0, "n19": 0, "n20": 0, "t25": "", "t24": "", "t1": "", "t9": "", "t2": "", "t4": "", "t14": "", "t12": "", "t18": "", "t19": "", "t5": "", "t6": "", "t8": "", "t16": "", "t20": "", "t15": "", "t7": "", "t21": "", "t11": "", "t22": "", "t3": "", "t17": "", "t10": "", "t13": "", "t23": "" }],
            "state": false, "m_searchText": null, "m_totalCount": 0, "m_currentPage": 0, "m_pageSize": 0 };
        this._flagSortName = false;
        this._flagSortPhno = false;
        this._flagSortEmail = false;
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
    }
    FrmCustomerListComponent.prototype.ngOnChanges = function (rpModel) {
        if (this.rpModel != undefined) {
            this._isModal = this.rpModel;
            this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
            if (this._isModal)
                this.search(this._srchobj);
        }
    };
    FrmCustomerListComponent.prototype.search = function (p) {
        var _this = this;
        if (p.pager.end == 0) {
            p.pager.end = this.ics._profile.n1;
        }
        if (p.pager.size == 0) {
            p.pager.size = this.ics._profile.n1;
        }
        var url = this.ics._apiurl + 'serviceRegister/browseAuthorization?viewType=3&searchVal=' + this._searchVal + "&sort=" + this._sort + "&type=" + this._type;
        var json = p;
        this.http.doPost(url, json).subscribe(function (response) {
            if (response != null && response != undefined && response.state) {
                _this._totalcount = response.m_totalCount;
                _this._array = response.data;
            }
            else {
                _this._array = [];
                _this._totalcount = 1;
                _this.alertMessage("Data not found!");
            }
        }, function (error) { }, function () { });
    };
    FrmCustomerListComponent.prototype.alertMessage = function (message) {
        this.ics.sendBean({ "t1": "rp-msg", "t2": "Information", "t3": message });
    };
    FrmCustomerListComponent.prototype.searchVal = function () {
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = [];
        this.search(this._srchobj);
    };
    FrmCustomerListComponent.prototype.changeAS = function (event) {
        this._adsearch = event;
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = this._adsearch;
        this.search(this._srchobj);
    };
    FrmCustomerListComponent.prototype.goto = function (p) {
        if (this._isModal)
            this.rpChanged.emit();
        this._router.navigate(['/authorization', 'READ', p]);
    };
    FrmCustomerListComponent.prototype.hideShowAS = function (event) {
        this._flagas = event;
    };
    FrmCustomerListComponent.prototype.changedPager = function (event) {
        var k = event.flag;
        this._srchobj.pager = event.obj;
        this._srchobj.search = this._adsearch;
        if (k) {
            this.search(this._srchobj);
        }
    };
    FrmCustomerListComponent.prototype.changeDefault = function () {
        this._flagSortName = false;
        this._flagSortPhno = false;
        this._flagSortEmail = false;
    };
    FrmCustomerListComponent.prototype.addSort = function (e) {
        if (e == 1) {
            if (!this._flagSortName) {
                this.changeDefault();
                this._flagSortName = true;
                this._sort = "desc";
                this._type = "1";
                this.search(this._srchobj);
            }
            else if (this._flagSortName) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "1";
                this.search(this._srchobj);
            }
        }
        else if (e == 3) {
            if (!this._flagSortEmail) {
                this.changeDefault();
                this._flagSortEmail = true;
                this._sort = "desc";
                this._type = "3";
                this.search(this._srchobj);
            }
            else if (this._flagSortEmail) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "3";
                this.search(this._srchobj);
            }
        }
        else if (e == 4) {
            if (!this._flagSortPhno) {
                this.changeDefault();
                this._flagSortPhno = true;
                this._sort = "desc";
                this._type = "4";
                this.search(this._srchobj);
            }
            else if (this._flagSortPhno) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "4";
                this.search(this._srchobj);
            }
        }
    };
    FrmCustomerListComponent.prototype.getRegister = function () {
        var _this = this;
        this._searchVal = "";
        this._searching = false;
        this.http.doGet(this.ics._apiurl + 'serviceRegister/getAuthList?viewType=3&searchVal=' + this._searchVal).subscribe(function (response) {
            var k = response;
            _this._totalcount = k.m_totalCount;
            if ((response != null || response != undefined) && response.m_totalCount > 0) {
                _this._array = _this._util.changeArray(response.data, _this._obj, 1);
            }
            else {
                _this._array = [];
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
            }
        }, function (error) { return alert(error); }, function () { });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FrmCustomerListComponent.prototype, "rpModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FrmCustomerListComponent.prototype, "rpModelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FrmCustomerListComponent.prototype, "rpChanged", void 0);
    FrmCustomerListComponent = __decorate([
        core_1.Component({
            selector: 'frmcustomer-list',
            template: " \n  <div class=\"container col-md-12\">\n   <form class=\"form-inline\"> \n    <legend>Customer List</legend>\n   <div class=\"row col-md-12\">&nbsp;</div>\n    <div *ngIf=\"_flagas\" class=\"input-group\">\n       <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"_searchVal\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)= \"searchVal()\"  class=\"form-control input-md\">\n       <span class=\"input-group-btn input-md\">\n\t     <button class=\"btn btn-primary input-md\" type=\"button\" (click)=\"searchVal()\">\n\t     <span class=\"glyphicon glyphicon-search\"></span>Search\n\t     </button>\n\t     </span>\n        <span class=\"input-group-btn input-md\" style=\"width:70px\" >\n         <button class=\"btn btn-primary\" type=\"button\" (click)=\"getRegister();\">ShowAll</button>\n          </span>\n    </div>\n    </form>\n\n   <pager id=\"pgclaim\" rpPageSizeMax=\"100\" [(rpCurrent)]=\"_srchobj.pager.current\" [(rpModel)]=\"_totalcount\" (rpChanged)=\"changedPager($event)\"></pager>\n\n   <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n    <thead>\n     <tr>\n        <th>Name  <img src=\"image/sortAsc.png\" [hidden]=\"_flagSortName\" alt=\"sortAsc.png\" height=\"12\" width=\"15\" (click)=\"addSort(1)\"/>\n                        <img src=\"image/sortDesc.png\" [hidden]=\"!_flagSortName\" alt=\"sortDesc.png\" height=\"12\" width=\"15\" (click)=\"addSort(1)\"/></th>\n        <th>Email<img src=\"image/sortAsc.png\" [hidden]=\"_flagSortEmail\" alt=\"sortAsc.png\" height=\"12\" width=\"15\" (click)=\"addSort(3)\"/>\n                        <img src=\"image/sortDesc.png\" [hidden]=\"!_flagSortEmail\" alt=\"sortDesc.png\" height=\"12\" width=\"15\" (click)=\"addSort(3)\"/></th>\n        <th>Mobile Number<img src=\"image/sortAsc.png\" [hidden]=\"_flagSortPhno\" alt=\"sortAsc.png\" height=\"12\" width=\"15\" (click)=\"addSort(4)\"/>\n                        <img src=\"image/sortDesc.png\" [hidden]=\"!_flagSortPhno\" alt=\"sortDesc.png\" height=\"12\" width=\"15\" (click)=\"addSort(4)\"/></th>\n     </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let obj of _array\">\n        <td><a (click)=\"goto(obj.syskey)\">{{obj.t3}}</a></td>\n        <td>{{obj.t7}}</td>\n        <td>{{obj.t1}}</td>         \n      </tr> \n    </tbody>\n  </table>\n  </div> \n  \n   ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService, platform_browser_1.DomSanitizer])
    ], FrmCustomerListComponent);
    return FrmCustomerListComponent;
}());
exports.FrmCustomerListComponent = FrmCustomerListComponent;
//# sourceMappingURL=frmCustomerList.component.js.map