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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
// RP Framework
var rp_references_1 = require('../framework/rp-references');
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_client_util_1 = require('../util/rp-client.util');
// Application Specific
core_2.enableProdMode();
var FrmMenuComponent = (function () {
    function FrmMenuComponent(ics, _router, route, http, title, ref) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.title = title;
        this.ref = ref;
        /*flagnew = true;*/
        this.flagsave = false;
        this.flagdelete = true;
        // Application Specific
        this._util = new rp_client_util_1.ClientUtil();
        this._comboobj = { "value": "", "caption": "" };
        this._syskey = "TBA";
        this._obj = { "syskey": 0, "t1": "/angular2", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n2": 0, "n5": 0 };
        this._result = { "longResult": "", "msgDesc": "", "key": [], "keyResult": 0, "state": false, "stringResult": "" };
        this._key = "";
        this._before = this._obj;
        this._array = [];
        this.btndata = { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "flag": false };
        this._output1 = "";
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
        this.flagdelete = true;
        this.setBtns();
        //Combo BUtton Control
        this.rd = true;
        //Radio Box Control
        this.parentcheck = true;
        this.childcheck = false;
        //Alert Message Control
        this.messagehide = true;
        this.getbuttonlist();
        this.ics.confirmUpload(false);
    }
    FrmMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var cmd = params['cmd'];
            _this.checkparam = cmd == "read";
            if (cmd != null && cmd != "" && cmd == "new") {
                _this.menusys = null;
                _this.flagdelete = true;
                _this.parentcheck = true;
                _this.childcheck = false;
            }
            else if (cmd != null && cmd != "" && cmd == "read") {
                var id = params['id'];
                var url = _this.ics._apiurl + 'service001/getMenuData';
                _this._key = id;
                var json = _this._key;
                //change with get method...
                _this.http.doPost(url, json).subscribe(function (data) {
                    _this.flagdelete = false;
                    _this._output1 = JSON.stringify(data);
                    _this._obj = data;
                    _this.menusys = _this._obj.n2;
                    _this._syskey = "" + _this._obj.syskey;
                    _this.setButtonData(_this._obj.t3);
                    if (_this._obj.n2 == 0) {
                        _this.parentcheck = true;
                        _this.childcheck = false;
                    }
                    else {
                        _this.parentcheck = false;
                        _this.childcheck = true;
                        _this.getmainlist();
                        _this.rd = false;
                    }
                }, function (error) {
                    return function () { };
                });
            }
        });
    };
    FrmMenuComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrmMenuComponent.prototype.checkChild = function () {
        this.rd = false;
        this.menusys = 0;
        this._obj.n2 = 0;
        this._obj.syskey = 0;
        this._obj.t1 = "";
        this._syskey = "TBA";
    };
    FrmMenuComponent.prototype.checkParents = function () {
        this.rd = true;
        this._obj.n2 = 0;
        this.menusys = 0;
        this._obj.syskey = 0;
        this._obj.t1 = "/angular2";
        this._syskey = "TBA";
    };
    FrmMenuComponent.prototype.goDelete = function () {
        var _this = this;
        var url = this.ics._apiurl + 'service001/deleteMenu';
        var json = this._obj;
        this.http.doPost(url, json).subscribe(function (data) {
            _this._output1 = JSON.stringify(data);
            _this._result = data;
            _this.showMessage(_this._result.msgDesc, _this._result.state);
            if (_this._result.state) {
                _this.getmainlist();
                if (_this.checkparam) {
                    _this.goNew();
                }
            }
            else {
                _this.flagdelete = false;
            }
        }, function (error) {
            return function () { };
        });
    };
    FrmMenuComponent.prototype.goPost = function () {
        var _this = this;
        if ((!this.rd && this.menusys == 0) || (!this.rd && this.menusys == undefined)) {
            this._result.msgDesc = "Please Select Main Menu";
            this._result.state = false;
            this.showMessage(this._result.msgDesc, this._result.state);
        }
        else {
            this.flagsave = true;
            this._obj.n2 = this.menusys;
            this._obj.n5 = 1;
            this._obj.t4 = "51";
            this._obj.t5 = "100%";
            this._obj.t6 = "800";
            var keys = "";
            keys = this.getButtonData();
            console.log("button syskeys: " + keys);
            this._obj.t3 = keys;
            var url = this.ics._apiurl + 'service001/saveMenu';
            var json = this._obj;
            this.http.doPost(url, json).subscribe(function (data) {
                _this._output1 = JSON.stringify(data);
                _this._result = data;
                _this.messagehide = true;
                _this.showMessage(_this._result.msgDesc, _this._result.state);
                _this._syskey = _this._result.key[1];
                if (_this._result.state) {
                    if (_this.rd) {
                        _this.getmainlist();
                        _this._obj.syskey = _this._result.key[1];
                        if (_this.checkparam) {
                            _this.checkparam = false;
                        }
                        else {
                            _this.flagdelete = true;
                        }
                    }
                }
                else {
                    _this.showMessage(_this._result.msgDesc, _this._result.state);
                }
                _this.flagsave = false;
            }, function (error) { }, function () { });
        }
    };
    FrmMenuComponent.prototype.goList = function () {
        this._router.navigate(['/menuList']);
    };
    FrmMenuComponent.prototype.goNew = function () {
        this._syskey = "TBA";
        this.clearButtonData();
        this._obj = { "syskey": 0, "t1": "/angular2", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n2": 0, "n5": 0 };
        jQuery('#parentradio').prop('checked', 'checked');
        jQuery('#childradio').prop('checked', false);
        this.flagdelete = true;
        this.rd = true;
    };
    FrmMenuComponent.prototype.getmainlist = function () {
        var _this = this;
        this.http.doGet(this.ics._apiurl + 'service001/getMainList').subscribe(function (response) {
            if (response != null || response != undefined) {
                _this.ref._lov3.mainmenu = response.data;
            }
        }, function (error) { }, function () { });
    };
    FrmMenuComponent.prototype.getbuttonlist = function () {
        var _this = this;
        this.http.doGet(this.ics._apiurl + 'service001/getButtonList').subscribe(function (response) {
            if (response.state) {
                _this._array = response.data;
            }
        }, function (error) { }, function () { });
    };
    FrmMenuComponent.prototype.clearButtonData = function () {
        for (var i = 0; i < this._array.length; i++) {
            this._array[i].flag = false;
        }
    };
    FrmMenuComponent.prototype.getButtonData = function () {
        var k = "";
        for (var i = 0; i < this._array.length; i++) {
            if (this._array[i].flag) {
                if (k != "") {
                    k += ",";
                }
                k += this._array[i].syskey;
            }
        }
        return k;
    };
    FrmMenuComponent.prototype.setButtonData = function (t3) {
        var btns = t3.split(',');
        console.log("btns: " + JSON.stringify(btns));
        for (var i = 0; i < this._array.length; i++) {
            for (var j = 0; j < btns.length; j++) {
                if (this._array[i].syskey == btns[j]) {
                    this._array[i].flag = true;
                }
            }
        }
    };
    FrmMenuComponent.prototype.showMessage = function (msg, bool) {
        if (bool) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg });
        }
        if (!bool) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg });
        }
        if (bool == undefined) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg });
        }
    };
    FrmMenuComponent.prototype.setBtns = function () {
        var k = this.ics.getBtns("/menu");
        if (k != "" && k != undefined) {
            var strs = k.split(",");
            for (var i = 0; i < strs.length; i++) {
                if (strs[i] == "1") {
                }
                if (strs[i] == "2") {
                }
            }
        }
    };
    FrmMenuComponent = __decorate([
        core_1.Component({
            selector: 'frmmenu',
            template: " \n    <div class=\"container\">\n     <div class=\"row clearfix\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n          <form class= \"form-horizontal\"   (ngSubmit)=\"goPost()\" >\n            <fieldset>   \n     \n              <legend>Menu</legend>\n              <div class=\"form-group\">\n                  <div class=\"row  col-md-12\">                     \n                    <button class=\"btn btn-primary\" [disabled]=\"flagnew\" id=\"new\" type=\"button\" (click)=\"goNew()\">New</button>      \n                    <div> &nbsp; </div>\n                    <button class=\"btn btn-primary\" [disabled]=\"flagsave\" id=\"save\" type=\"submit\" >Save</button> \n                    <div> &nbsp; </div>\n                    <button class=\"btn btn-primary\" [disabled]=\"flagdelete\" id=\"delete\" type=\"button\" (click)=\"goDelete();\" >Delete</button> \n                    <div> &nbsp; </div>\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList()\" >List</button> \n                  </div>                            \n               </div>\n                   <div class=\"row col-md-12\">&nbsp;</div>\n                      <div class=\"form-group\">    \n                          <label class=\"checkbox-inline\">    \n                                  <input type=\"radio\" [checked]=\"parentcheck\" id=\"parentradio\"  (click)=\"checkParents()\" name=\"optionsRadiosinline\"   value=\"option1\" checked> \n                                  Main Menu \n                          </label>  \n                          \n                          <label class=\"checkbox-inline\">      \n                                  <input type=\"radio\" [checked]=\"childcheck\" id=\"childradio\" (click)=\"checkChild()\"   name=\"optionsRadiosinline\"   value=\"option2\"> \n                                  Sub Menu    \n                          </label>  \n                    </div>\n              \n                  <div class=\"form-group\"> \n                    <rp-input  [hidden]=\"rd\" [(rpModel)]=\"menusys\" rpRequired =\"true\"  rpType=\"mainmenu\" rpLabel=\"Main Menu &nbsp;&nbsp;\"></rp-input>\n                  </div>\n                          \n                  <div class=\"form-group\">\n                        <rp-input  rpType=\"text\" rpClass=\"col-md-2\" rpLabel=\"Code\" [(rpModel)]=\"_syskey\" rpReadonly=\"true\" rpRequired=\"true\"></rp-input>\n                  </div>\n\n                  <div class=\"form-group\">        \n                    <rp-input  rpType=\"text\" rpLabel=\"Menu Link\" [(rpModel)]=\"_obj.t1\" rpReadonly=\"{{rd}}\" rpRequired=\"true\"></rp-input>\n                  </div>\n                  \n                  <div class=\"form-group\">        \n                    <rp-input  rpType=\"text\" rpLabel=\"Description\" [(rpModel)]=\"_obj.t2\" rpRequired=\"true\"></rp-input>\n                  </div>\n       \n             </fieldset>  \n             <fieldset class=\"col-md-6\"> \n             <div style=\"width:auto;height:auto;padding:15px;border:1px solid #e5e5e5; border-radius:10px\">\n             <legend><span style=\"font-size:16px;\">Button Right</span></legend>     \n             <table class=\"table table-striped table-condensed table-hover\" style=\"font-size:14px;\">   \n              <thead>\n                <tr>\n                  <th style='width: 7%;' align=\"center\">&nbsp;</th>\n                  <th style='width: 93%;' align=\"center\">Name</th>    \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let obj of _array\">\n                  <td><label><input type=\"checkbox\" [(ngModel)]=\"obj.flag\" [ngModelOptions]=\"{standalone: true}\"></label></td>\n                  <td>{{obj.t2}}</td>   \n                </tr> \n              </tbody>\n            </table>\n            </div>\n            </fieldset> \n           </form>  \n      \n     </div>\n    </div> \n  </div>\n   ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, platform_browser_1.Title, rp_references_1.RpReferences])
    ], FrmMenuComponent);
    return FrmMenuComponent;
}());
exports.FrmMenuComponent = FrmMenuComponent;
//# sourceMappingURL=frmmenu.component.js.map