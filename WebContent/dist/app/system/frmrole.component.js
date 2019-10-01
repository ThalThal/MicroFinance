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
// Application Specific
var FrmRoleComponent = (function () {
    function FrmRoleComponent(ics, _router, route, http) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this._tmpT1 = false;
        this._obj = { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "t1": "", "t2": "", "t3": "", "n1": 0, "n2": 0, "n3": 0, "btnarr": [], "menu": [] };
        this._returnResult = { "keyResult": 0, "state": false, "msgCode": "", "msgDesc": "" };
        this.frmlink = "/role";
        this.flagnew = true;
        this.flagsave = true;
        this.flagdelete = true;
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
        this.getRoleMenus();
        this.flagdelete = true;
        this.setBtns();
    }
    FrmRoleComponent.prototype.getRoleMenus = function () {
        var _this = this;
        this.http.doGet(this.ics._apiurl + 'service001/getRoleMenus').subscribe(function (data) {
            _this._obj = data;
        }, function (error) { }, function () { });
    };
    FrmRoleComponent.prototype.goList = function () {
        this._router.navigate(['/roleList']);
    };
    FrmRoleComponent.prototype.goNew = function () {
        this.clearData();
    };
    FrmRoleComponent.prototype.goDelete = function () {
        var _this = this;
        var id = this._obj.syskey;
        this.http.doGet(this.ics._apiurl + 'service001/deleteRole?syskey=' + id).subscribe(function (data) {
            if (data.state) {
                _this.clearData();
            }
            _this.showMessage(data.msgDesc, data.state);
        }, function (error) { }, function () { });
    };
    FrmRoleComponent.prototype.goPost = function () {
        var _this = this;
        var url = this.ics._apiurl + 'service001/saveRole';
        var btns = [];
        for (var i = 0; i < this._obj.menu.length; i++) {
            for (var j = 0; j < this._obj.menu[i].childmenus.length; j++) {
                var str = this.getButtonData(this._obj.menu[i].childmenus[j].btns);
                var bdata = { "syskey": 0, "desc": "", "link": "", "flag": false };
                bdata.desc = str;
                bdata.syskey = this._obj.menu[i].childmenus[j].syskey;
                btns.push(bdata);
            }
        }
        this._obj.btnarr = btns;
        var json = this._obj;
        this.http.doPost(url, json).subscribe(function (data) {
            _this._returnResult = data;
            if (_this._returnResult.state) {
                _this._obj.syskey = _this._returnResult.keyResult;
                _this.flagdelete = false;
            }
            _this.showMessage(_this._returnResult.msgDesc, _this._returnResult.state);
        }, function (error) { }, function () { });
    };
    FrmRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var cmd = params['cmd'];
            console.log("cmd: " + cmd);
            if (cmd != null && cmd != "" && cmd == "new") {
                _this.clearData();
            }
            else if (cmd != null && cmd != "" && cmd == "read") {
                var id = params['id'];
                console.log(id);
                _this.http.doGet(_this.ics._apiurl + 'service001/readRoleBySyskey?syskey=' + id).subscribe(function (data) {
                    _this._obj = data;
                    _this.flagdelete = false;
                    _this._tmpT1 = true;
                }, function (error) { }, function () { });
            }
        });
    };
    FrmRoleComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrmRoleComponent.prototype.showRoleMenus = function (obj) {
        var indexx = this._obj.menu.indexOf(obj);
        console.log(indexx);
        if (this._obj.menu[indexx].show) {
            this._obj.menu[indexx].show = false;
        }
        else {
            this._obj.menu[indexx].show = true;
        }
    };
    FrmRoleComponent.prototype.getButtonData = function (array) {
        var k = "";
        for (var i = 0; i < array.length; i++) {
            if (array[i].flag) {
                if (k != "") {
                    k += ",";
                }
                k += array[i].syskey;
            }
        }
        return k;
    };
    FrmRoleComponent.prototype.getParentValue = function (indexno, value, event) {
        if (event.target.checked) {
            //if parentmenu is checked,check all childmenu
            if (this._obj.menu[indexno].childmenus != undefined) {
                for (var i = 0; i < this._obj.menu[indexno].childmenus.length; i++) {
                    this._obj.menu[indexno].childmenus[i].result = true;
                    for (var j = 0; j < this._obj.menu[indexno].childmenus[i].btns.length; j++) {
                        this._obj.menu[indexno].childmenus[i].btns[j].flag = true;
                    }
                }
            }
        }
        else {
            //if parentmenu is not check, uncheck all childmenu
            if (this._obj.menu[indexno].childmenus != undefined) {
                for (var i = 0; i < this._obj.menu[indexno].childmenus.length; i++) {
                    this._obj.menu[indexno].childmenus[i].result = false;
                    for (var j = 0; j < this._obj.menu[indexno].childmenus[i].btns.length; j++) {
                        this._obj.menu[indexno].childmenus[i].btns[j].flag = false;
                    }
                }
            }
        }
    };
    FrmRoleComponent.prototype.getChildValue = function (indexno, childindex, event) {
        if (event.target.checked) {
            //if one childmenu is checked, check its parentmenu
            this._obj.menu[indexno].result = true;
            //if one childmenu is checked, check all its btns...
            for (var i = 0; i < this._obj.menu[indexno].childmenus[childindex].btns.length; i++) {
                this._obj.menu[indexno].childmenus[childindex].btns[i].flag = true;
            }
        }
        else {
            for (var i = 0; i < this._obj.menu[indexno].childmenus[childindex].btns.length; i++) {
                this._obj.menu[indexno].childmenus[childindex].btns[i].flag = false;
            }
        }
    };
    FrmRoleComponent.prototype.getBtnValue = function (indexno, childindex, event) {
        if (event.target.checked) {
            //if one btn is checked, check its parent childmenu and main parentmenu
            this._obj.menu[indexno].result = true;
            this._obj.menu[indexno].childmenus[childindex].result = true;
        }
    };
    FrmRoleComponent.prototype.clearData = function () {
        this._tmpT1 = false;
        this._obj = { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "t1": "", "t2": "", "t3": "", "n1": 0, "n2": 0, "n3": 0, "btnarr": [], "menu": [] };
        this.flagdelete = true;
        this.getRoleMenus();
    };
    FrmRoleComponent.prototype.showMessage = function (msg, bool) {
        if (bool == true) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg });
        }
        if (bool == false) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg });
        }
        if (bool == undefined) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg });
        }
    };
    FrmRoleComponent.prototype.setBtns = function () {
        var k = this.ics.getBtns("/role");
        if (k != "" && k != undefined) {
            var strs = k.split(",");
            for (var i = 0; i < strs.length; i++) {
                if (strs[i] == "1") {
                    this.flagnew = false;
                }
                if (strs[i] == "2") {
                    this.flagsave = false;
                }
            }
        }
    };
    FrmRoleComponent = __decorate([
        core_1.Component({
            selector: 'frmrole',
            template: "\n  <div class=\"container\">\n    <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\" (ngSubmit)=\"goPost()\" >\n      <fieldset>  \n      <legend>Role</legend>\n\n        <div class=\"form-group\">\n            <div class=\"row  col-md-12\">              \n              <button class=\"btn btn-primary\" [disabled]=\"flagnew\" id=\"new\" type=\"button\" (click)=\"goNew()\">New</button>      \n              <div> &nbsp; </div>\n              <button class=\"btn btn-primary\" [disabled]=\"flagsave\" id=\"save\" type=\"submit\" >Save</button> \n              <div> &nbsp; </div>\n              <button class=\"btn btn-primary\" [disabled]=\"flagdelete\" id=\"delete\" type=\"button\" (click)=\"goDelete();\" >Delete</button> \n              <div> &nbsp; </div>\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList()\">List</button> \n            </div>           \n        </div>\n\n        <div class=\"form-group\">\n            <rp-input rpType=\"text\" rpLabel=\"Code\" [(rpModel)]=\"_obj.t1\" rpReadonly=\"{{_tmpT1}}\" rpRequired=\"true\" rpClass=\"col-md-2\"></rp-input>\n        </div>      \n        <div class=\"form-group\">\n            <rp-input rpType=\"text\" rpLabel=\"Description\" [(rpModel)]=\"_obj.t2\" rpRequired=\"true\"></rp-input>  \n        </div>\n\n        <!-- nav bar -->\n      <!--  <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\"><b>Menu</b></a></li>      \n        </ul> --> \n        \n<div class=\"nav-tabs-wrapper\">\n    <ul class=\"nav nav-tabs dragscroll horizontal\">\n        <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tab1\"><b>Menu</b></a></li>\n       \n    </ul>\n</div>\n\n<div class=\"tab-content\">\n    <div class=\"tab-pane fade show active\" id=\"tab1\">\n        <div class=\"row col-md-12\">&nbsp;</div>       \n           \n          <ul  style=\"list-style:none;\">\n          <li *ngFor=\"let parentmenu of _obj.menu, let i=index\">\n\n          <div class=\"form-group\">\n          <div *ngIf=\"parentmenu.syskey!=0\">\n           <span (click)=\"showRoleMenus(parentmenu)\" [hidden]=\"parentmenu.show\"><img src=\"image/plus-sign.png\" alt=\"plus-sign.png\" height=\"15\" width=\"15\" /></span>\n           <span (click)=\"showRoleMenus(parentmenu)\" [hidden]=\"!parentmenu.show\"><img src=\"image/minus-sign.png\" alt=\"minus-sign.png\" height=\"15\" width=\"15\"/></span>   \n           <label><input type=\"checkbox\" [(ngModel)]=\"parentmenu.result\" (change)=\"getParentValue(i,parentmenu.syskey,$event)\" [ngModelOptions]=\"{standalone: true}\">{{parentmenu.t2}}</label>   \n          </div>\n          </div>\n          \n          <div *ngIf=\"parentmenu.show\">\n                    <ul style=\"list-style:none;\">         \n                        <li *ngFor=\"let childmenu of parentmenu.childmenus, let j=index\">\n                            <div class=\"form-group\"> \n                                <input type=\"checkbox\"  [(ngModel)]=\"childmenu.result\" (change)=\"getChildValue(i,j,$event)\" [ngModelOptions]=\"{standalone: true}\">{{childmenu.t2}}                   \n                            </div>\n                            <div class=\"form-group\"> \n                                &emsp;Button->\n                                <span *ngFor=\"let btnmenu of childmenu.btns\">\n                                <input type=\"checkbox\"  [(ngModel)]=\"btnmenu.flag\" (change)=\"getBtnValue(i,j,$event)\" [ngModelOptions]=\"{standalone: true}\">{{btnmenu.t2}}\n                                </span> \n                            </div>               \n                        </li> \n                    </ul>\n                </div>\n          </li>\n          </ul>\n    </div> \n  </div>\n\n        \n\n      </fieldset> \n      </form>\n      </div>\n    </div>\n   </div>   \n   ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService])
    ], FrmRoleComponent);
    return FrmRoleComponent;
}());
exports.FrmRoleComponent = FrmRoleComponent;
//# sourceMappingURL=frmrole.component.js.map