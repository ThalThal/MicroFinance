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
var rp_references_1 = require('../framework/rp-references');
var AdvancedSearchItemType = (function () {
    function AdvancedSearchItemType(ics, http, ref) {
        var _this = this;
        this.ics = ics;
        this.http = http;
        this.ref = ref;
        this.rpModelChange = new core_1.EventEmitter();
        this.rpChanged = new core_1.EventEmitter();
        this.rpHidden = new core_1.EventEmitter();
        this._count = 0;
        this._ads = [];
        this._tmps = [];
        this._tmp = { "uf": "" };
        this._fieldnames = [];
        this.fields = [];
        this._flag = false;
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        if (this.rpId == null || this.rpId == "")
            this.rpId = "myid";
        this.http.doGet('json/adsearch.json?random=' + Math.random()).subscribe(function (data) {
            _this.fields = data.itemtype;
            _this._count = _this.fields.length;
            _this.initializeAS();
        }, function (error) {
            return function () { };
        });
    }
    AdvancedSearchItemType.prototype.ngAfterContentInit = function () {
    };
    AdvancedSearchItemType.prototype.ngOnChanges = function (rpModel) {
    };
    AdvancedSearchItemType.prototype.initializeAS = function () {
        var k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "", "t3": "", "fields": [] };
        k.dbname = this.fields[0].dbname;
        k.caption = this.fields[0].caption;
        k.type = this.fields[0].type;
        k.condition = this.fields[0].condition;
        k.t1 = this.fields[0].t1;
        k.t2 = this.fields[0].t2;
        k.t3 = this.fields[0].t3;
        k.fields = this.fields;
        this._ads[0] = k;
    };
    AdvancedSearchItemType.prototype.showSearch = function () {
        this._flag = true;
        this.rpHidden.emit(false);
    };
    AdvancedSearchItemType.prototype.hideSearch = function () {
        var as = [];
        this.clearSearch();
        this._flag = false;
        this.rpHidden.emit(true);
        this.rpChanged.emit(as);
    };
    AdvancedSearchItemType.prototype.addSearch = function () {
        var t = [];
        var flag = true;
        this._tmps = this._ads[(this._ads.length - 1)].fields;
        this._tmp.uf = this._ads[(this._ads.length - 1)].dbname;
        for (var j = 0; j < this._fieldnames.length; j++) {
            if (this._tmp.uf == this._fieldnames[j].uf) {
                flag = false;
            }
        }
        if (flag) {
            this._fieldnames.push(this._tmp);
        }
        for (var i = 0; i < this._tmps.length; i++) {
            for (var j = 0; j < this._fieldnames.length; j++) {
                if (this._tmps[i].dbname != this._fieldnames[j].uf) {
                    t.push(this._tmps[i]);
                }
            }
        }
        if (this._count > 1 && t != undefined) {
            var k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "", "t3": "", "fields": [] };
            k.dbname = t[0].dbname;
            k.caption = t[0].caption;
            k.type = t[0].type;
            k.condition = t[0].condition;
            k.t1 = t[0].t1;
            k.t2 = t[0].t2;
            k.t3 = t[0].t3;
            k.fields = t;
            this._ads[this._ads.length] = k;
            this._count = this._count - 1;
        }
    };
    AdvancedSearchItemType.prototype.removeSearch = function (p) {
        if (this._count < this.fields.length) {
            var index = this._ads.indexOf(p);
            var field = p.dbname;
            for (var j = 0; j < this._fieldnames.length; j++) {
                if (field == this._fieldnames[j].uf) {
                    this._fieldnames.splice(j, 1);
                }
            }
            var flag = true;
            for (var i = 0; i < this._ads[(this._ads.length - 1)].fields.length; i++) {
                if (field == this._ads[(this._ads.length - 1)].fields[i].dbname) {
                    flag = false;
                }
            }
            if (flag) {
                var k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "", "t3": "" };
                k.dbname = p.dbname;
                k.caption = p.caption;
                k.type = p.type;
                k.condition = p.condition;
                k.t1 = p.t1;
                k.t2 = p.t2;
                k.t3 = p.t3;
                this._ads[(this._ads.length - 1)].fields.push(k);
            }
            this._ads.splice(index, 1);
            if (this._ads.length == 1) {
                this._ads[0].fields = this.fields;
            }
            this._count = this._count + 1;
        }
    };
    AdvancedSearchItemType.prototype.clearSearch = function () {
        this._count = this.fields.length;
        this._ads = [];
        this._tmps = [];
        this._tmp = { "uf": "" };
        this._fieldnames = [];
        this.initializeAS();
    };
    AdvancedSearchItemType.prototype.goSearch = function () {
        var as = [];
        for (var i = 0; i < this._ads.length; i++) {
            var k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "" };
            k.dbname = this._ads[i].dbname;
            k.caption = this._ads[i].caption;
            k.type = this._ads[i].type;
            k.condition = this._ads[i].condition;
            k.t1 = this._ads[i].t1;
            k.t2 = this._ads[i].t2;
            as.push(k);
        }
        this.rpChanged.emit(as);
    };
    AdvancedSearchItemType.prototype.getIndex = function (p) {
        this._index = this._ads.indexOf(p);
    };
    AdvancedSearchItemType.prototype.enableBet = function (p) {
        var index = this._index;
        if (p == "bt") {
            this._ads[index].t3 = "true";
        }
        else {
            this._ads[index].t3 = "";
        }
    };
    AdvancedSearchItemType.prototype.changeField = function (p) {
        var field = p;
        var index = this._index;
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].dbname == field) {
                this._ads[index].dbname = this.fields[i].dbname;
                this._ads[index].caption = this.fields[i].caption;
                this._ads[index].type = this.fields[i].type;
                this._ads[index].condition = this.fields[i].condition;
                this._ads[index].t1 = this.fields[i].t1;
                this._ads[index].t2 = this.fields[i].t2;
                this._ads[index].t3 = this.fields[i].t3;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AdvancedSearchItemType.prototype, "rpId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AdvancedSearchItemType.prototype, "rpModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AdvancedSearchItemType.prototype, "rpModelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AdvancedSearchItemType.prototype, "rpChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AdvancedSearchItemType.prototype, "rpHidden", void 0);
    AdvancedSearchItemType = __decorate([
        core_1.Component({
            selector: 'ad-search-itemtype',
            template: "  \n    <div *ngIf=\"!_flag\">\n    <button class=\"btn  btn-sm btn-primary\" type=\"button\" (click)=\"showSearch()\" >\n      Advanced <span class=\"glyphicon glyphicon-search\"></span>\n    </button>\n    </div>\n    <div *ngIf=\"_flag\">\n    <div class=\"row  col-md-12\"> \n      <button class=\"btn  btn-sm btn-primary\" type=\"button\" (click)=\"addSearch()\" >Add Filter</button>  \n      <button class=\"btn  btn-sm btn-primary\" type=\"button\" (click)=\"goSearch()\" >Search</button>       \n      <button class=\"btn  btn-sm btn-primary\" type=\"button\" (click)=\"clearSearch()\">Clear</button>\n      <button class=\"btn  btn-sm btn-primary\" type=\"button\" (click)=\"hideSearch()\" >Hide</button>    \n    </div>\n    <div class=\"row col-sm-12\">&nbsp;</div>\n    <table style=\"font-size:14px;width:70%;\">\n    <tr *ngFor=\"let obj of _ads\">        \n    <td style=\"width: 2%\">\n    <img src=\"image/remove.png\" alt=\"remove.png\" height=\"20\" width=\"20\" (click)=\"removeSearch(obj)\"/>\n    </td> \n    <td style=\"width: 32%\">\n    <select [(ngModel)]=\"obj.dbname\" (click)=\"getIndex(obj)\" (change)=\"changeField($event.target.value)\" class=\"form-control input-sm\">\n    <option *ngFor=\"let item of obj.fields\" value=\"{{item.dbname}}\">{{item.caption}}</option>\n    </select>\n    </td> \n    <td style=\"width: 32%\">\n      <select *ngIf=\"obj.type=='string'\" [(ngModel)]=\"obj.condition\" class=\"form-control input-sm\">\n        <option *ngFor=\"let item of ref._lov1.string\" value=\"{{item.value}}\" >{{item.caption}}</option>\n      </select>\n      <select *ngIf=\"obj.type=='numeric'\" (click)=\"getIndex(obj)\" (change)=\"enableBet($event.target.value)\" [(ngModel)]=\"obj.condition\" class=\"form-control input-sm\">\n          <option *ngFor=\"let item of ref._lov1.numeric\" value=\"{{item.value}}\" >{{item.caption}}</option>\n      </select>\n      <select *ngIf=\"obj.type=='date'\" (click)=\"getIndex(obj)\" (change)=\"enableBet($event.target.value)\" [(ngModel)]=\"obj.condition\" class=\"form-control input-sm\">\n          <option *ngFor=\"let item of ref._lov1.date\" value=\"{{item.value}}\" >{{item.caption}}</option>\n      </select>\n    </td>\n    <td style=\"width: 32%\">\n      <input id=\"textinput\" *ngIf=\"obj.type=='string' && obj.t3!='true'\" type=\"text\" [(ngModel)]=\"obj.t1\" class=\"form-control input-sm\">\n      <input id=\"textinput\" *ngIf=\"obj.type=='numeric' && obj.t3!='true'\" type=\"number\" [(ngModel)]=\"obj.t1\" class=\"form-control input-sm\">\n      <div *ngIf=\"obj.type=='numeric' && obj.t3=='true'\" class=\"input-group\">\n      <input id=\"textinput\" *ngIf=\"obj.type=='numeric' && obj.t3=='true'\" type=\"number\" [(ngModel)]=\"obj.t1\" class=\"form-control input-sm\" style=\"width: 50%\"> \n      <input id=\"textinput\" *ngIf=\"obj.type=='numeric' && obj.t3=='true'\" type=\"number\" [(ngModel)]=\"obj.t2\" class=\"form-control input-sm\" style=\"width: 50%\"> \n      </div>      \n      <input id=\"textinput\" *ngIf=\"obj.type=='date' && obj.t3!='true'\" type=\"date\" [(ngModel)]=\"obj.t1\" class=\"form-control input-sm\"> \n      <div *ngIf=\"obj.type=='date' && obj.t3=='true'\" class=\"input-group\">\n      <input id=\"textinput\" *ngIf=\"obj.type=='date' && obj.t3=='true'\" type=\"date\" [(ngModel)]=\"obj.t1\" class=\"form-control input-sm\" style=\"width: 50%\"> \n      <input id=\"textinput\" *ngIf=\"obj.type=='date' && obj.t3=='true'\" type=\"date\" [(ngModel)]=\"obj.t2\" class=\"form-control input-sm\" style=\"width: 50%\"> \n      </div>           \n    </td> \n         \n    </tr> \n    </table>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
    ], AdvancedSearchItemType);
    return AdvancedSearchItemType;
}());
exports.AdvancedSearchItemType = AdvancedSearchItemType;
//# sourceMappingURL=advancedsearch-itemtype.js.map