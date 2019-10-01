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
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var Pager = (function () {
    function Pager(ics, http) {
        this.ics = ics;
        this.http = http;
        this.rpModelChange = new core_1.EventEmitter();
        this.rpChanged = new core_1.EventEmitter();
        this._pages = [];
        this.currentPage = 1;
        this.prev = 1;
        this.last = 1;
        this.next = 2;
        this.start = 1;
        this.totalCount = 1;
        /* currentPage = 0;
        prev = 0;
        last = 0;
        next = 0;
        start = 0;
        end: number;
        pageSize: number;
        totalCount = 0;*/
        this._flag = false;
        this._obj = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        if (this.rpId == null || this.rpId == "")
            this.rpId = "myid";
        if (this.rpClass == null || this.rpClass == "")
            this.rpClass = "col-md-3";
        if (this.rpModel == null || this.rpModel < 0)
            this.rpModel = 1;
        if (this.rpCurrent == null || this.rpCurrent < 0)
            this.rpCurrent = 1;
    }
    Pager.prototype.ngOnInit = function () {
        this.pageSize = this.ics._profile.n1;
        this.totalCount = +this.rpModel;
        this.updatePager(this.currentPage);
    };
    Pager.prototype.ngOnChanges = function (rpModel, rpCurrent) {
        this.currentPage = this.rpCurrent;
        this.updatePager(this.currentPage);
    };
    Pager.prototype.updatePager = function (k) {
        //custom pager by hms... 20160614 11:00pm... ymk...
        this.pageSize = this.ics._profile.n1;
        this.totalCount = +this.rpModel;
        this.last = Math.ceil(this.totalCount / this.pageSize);
        this.fillPages();
        var num = +k;
        this.currentPage = num;
        this.prev = num > 1 ? num - 1 : 1;
        this.next = (num + 1) < this.last ? (num + 1) : this.last;
        this.start = this.totalCount < 1 ? this.totalCount : ((num - 1) * this.pageSize) + 1;
        this.end = (num * this.pageSize) > this.totalCount ? this.totalCount : (num * this.pageSize);
        this._obj = {
            "current": this.currentPage, "prev": this.prev, "last": this.last,
            "next": this.next, "start": this.start, "end": this.end, "size": this.pageSize,
            "totalcount": this.totalCount
        };
        var data = { "obj": this._obj, "flag": this._flag };
        this.rpChanged.emit(data);
    };
    Pager.prototype.fillPages = function () {
        this._pages = [];
        var num = Math.ceil(this.totalCount / this.pageSize);
        for (var i = 1; i <= num; i++) {
            var k = { "value": 0, "caption": "" };
            k.value = i;
            k.caption = "" + i;
            this._pages.push(k);
        }
    };
    Pager.prototype.goFirst = function () {
        this._flag = true;
        this.currentPage = 1;
        this.updatePager(this.currentPage);
    };
    Pager.prototype.goLast = function () {
        this._flag = true;
        this.currentPage = Math.ceil(this.totalCount / this.pageSize);
        this.updatePager(this.currentPage);
    };
    Pager.prototype.goPrev = function () {
        this._flag = true;
        var k = this.prev;
        this.updatePager(k);
    };
    Pager.prototype.goNext = function () {
        this._flag = true;
        var k = this.next;
        this.updatePager(k);
    };
    Pager.prototype.changPage = function () {
        this._flag = true;
        this.updatePager(this.currentPage);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Pager.prototype, "rpId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Pager.prototype, "rpClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Pager.prototype, "rpModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Pager.prototype, "rpCurrent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Pager.prototype, "rpModelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Pager.prototype, "rpChanged", void 0);
    Pager = __decorate([
        core_1.Component({
            selector: 'pager',
            template: "  \n    <div>\n    <table><tr><td>\n    <nav>\n      <ul class=\"pagination\">\n        <li class=\"page-item\">\n          <a class=\"page-link\"  style=\"color:#4285F4\" (click)=\"goFirst()\">First</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\"  style=\"color:#4285F4\" (click)=\"goPrev()\">Prev</a>\n        </li>\n        <li class=\"page-item\">\n          <span class=\"page-link\">\n            <select [(ngModel)]=\"currentPage\" class=\"page-item\" (ngModelChange)=\"changPage()\" >\n              <option *ngFor=\"let item of _pages\" value=\"{{item.value}}\" >{{item.caption}}</option>\n            </select>\n          </span>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\"  style=\"color:#4285F4\" (click)=\"goNext()\">Next</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" style=\"color:#4285F4\" (click)=\"goLast()\">Last</a>\n        </li>        \n      </ul>      \n    </nav>\n    </td><td>    \n        &nbsp;<span>{{start}} - {{end}} of {{totalCount}}</span>\n    </td></tr></table>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService])
    ], Pager);
    return Pager;
}());
exports.Pager = Pager;
//# sourceMappingURL=pager.component.js.map