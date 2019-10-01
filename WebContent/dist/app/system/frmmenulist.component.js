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
// RP Framework
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_client_util_1 = require('../util/rp-client.util');
var FrmMenuList = (function () {
    function FrmMenuList(ics, _router, http) {
        this.ics = ics;
        this._router = _router;
        this.http = http;
        // Application Specific
        this._searchVal = "";
        this._totalcount = 1;
        this._pgobj = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._util = new rp_client_util_1.ClientUtil();
        this._array = [];
        this._testone = "";
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
        this.search();
    }
    FrmMenuList.prototype.changedPager = function (event) {
        this._pgobj = event.obj;
        var k = event.flag;
        if (k) {
            this.search();
        }
    };
    FrmMenuList.prototype.search = function () {
        var _this = this;
        if (this._pgobj.end == 0) {
            this._pgobj.end = this.ics._profile.n1;
        }
        if (this._pgobj.size == 0) {
            this._pgobj.size = this.ics._profile.n1;
        }
        var url = this.ics._apiurl + 'service001/browseAllMenu?searchVal=' + this._searchVal;
        var json = this._pgobj;
        this.http.doPost(url, json).subscribe(function (response) {
            if (response != null && response != undefined && response.state) {
                _this._totalcount = response.totalCount;
                _this._array = response.data;
            }
            else {
                _this._array = [];
                _this._totalcount = 1;
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
            }
        }, function (error) { }, function () { });
    };
    FrmMenuList.prototype.goto = function (p) {
        this._router.navigate(['/menu', 'read', p]);
    };
    FrmMenuList.prototype.goNew = function () {
        this._router.navigate(['/menu', 'new']);
    };
    FrmMenuList = __decorate([
        core_1.Component({
            selector: 'frmmenu-list',
            template: " \n    <div class=\"container\">\n    <div class=\"row clearfix\"> \n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n    <form class=\"form-inline\"> \n    <!-- Form Name -->\n    <legend>Menu List</legend>   \n      <div class=\"input-group\">\n      <span class=\"input-group-btn input-md\">\n       <button class=\"btn btn-primary\" type=\"button\" (click)=\"goNew();\">New</button>\n       </span>\n       <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"_searchVal\" (keyup.enter)= \"search()\"  class=\"form-control input-md\">\n       <span class=\"input-group-btn input-md\">\n\t     <button class=\"btn btn-primary input-md\" type=\"button\" (click)=\"search()\" >\n       <span class=\"glyphicon glyphicon-search\"></span>Search\n       </button>\n\t      </span>\n\t    </div> \n    </form>\n     \n    <div class=\"row col-md-12\">&nbsp;</div> \n <pager id=\"pgmenu\" [(rpModel)]=\"_totalcount\" (rpChanged)=\"changedPager($event)\"></pager> \n  <div class=\"col-md-12\">&nbsp;</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n        <thead>\n  \n      <tr>\n        <th>Code</th>\n        <th>Description</th>\n        <th>Link</th>\n        <th>Width</th>\n        <th>Height</th>\n        <th>Parent Menu </th>     \n      </tr>\n    </thead>\n    <tbody>\n       <tr *ngFor=\"let obj of _array\">\n        <td><a (click)=\"goto(obj.syskey)\">{{obj.syskey}}</a></td>\n        <td>{{obj.t2}}</td>\n        <td>{{obj.t1}}</td>\n        <td>{{obj.t5}}</td>\n        <td>{{obj.t6}}</td> \n        <td>{{obj.parentMenu}}</td>      \n      </tr> \n    </tbody>\n  </table>\n  </div>\n  </div>\n  </div>\n  </div>\n   ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService])
    ], FrmMenuList);
    return FrmMenuList;
}());
exports.FrmMenuList = FrmMenuList;
//# sourceMappingURL=frmmenulist.component.js.map