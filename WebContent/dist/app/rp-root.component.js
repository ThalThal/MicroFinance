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
var core_2 = require('@angular/core');
var rp_http_service_1 = require('./framework/rp-http.service');
var rp_intercom_service_1 = require('./framework/rp-intercom.service');
var rp_references_1 = require('./framework/rp-references');
var rp_client_util_1 = require('./util/rp-client.util');
core_2.enableProdMode();
var RpRootComponent = (function () {
    function RpRootComponent(ics, http, ref, title) {
        var _this = this;
        this.ics = ics;
        this.http = http;
        this.ref = ref;
        this.title = title;
        this._alertflag = true;
        this._alertmsg = "";
        this._alerttype = "";
        this._util = new rp_client_util_1.ClientUtil();
        this._comboobj = { "value": "", "caption": "" };
        this.array = [{ "value": "", "caption": "" }];
        this.showmenu = false;
        ics.rpbean$.subscribe(function (x) {
            _this.showmenu = ics.isMenuBar();
            if (x.t1 !== null && x.t1 == "rp-popup") {
                jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-lg');
                jQuery("#rootpopuptitle").text(x.t2);
                jQuery("#rootpopupbody").load(x.t3);
                jQuery("#rootpopup").modal();
            }
            else if (x.t1 !== null && x.t1 == "rp-wait") {
                jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                jQuery("#rootpopuptitle").text("Please Wait");
                jQuery("#rootpopupbody").text(x.t2);
                jQuery("#rootpopup").modal();
            }
            else if (x.t1 !== null && x.t1 == "rp-error") {
                jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                jQuery("#rootpopuptitle").text("System Exception");
                jQuery("#rootpopupbody").text(x.t2);
                jQuery("#rootpopup").modal();
            }
            else if (x.t1 !== null && x.t1 == "rp-msg") {
                jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                jQuery("#rootpopuptitle").text(x.t2);
                jQuery("#rootpopupbody").text(x.t3);
                jQuery("#rootpopup").modal();
            }
            else if (x.t1 !== null && x.t1 == "rp-msg-off") {
                jQuery("#rootpopuptitle").text("");
                jQuery("#rootpopupbody").text("");
                jQuery("#rootpopup").modal('hide');
            }
            else if (x.t1 !== null && x.t1 == "rp-alert") {
                _this._alertmsg = x.t3;
                var _snack_style = 'msg-info';
                if (x.t2 == "success")
                    _snack_style = 'msg-success';
                else if (x.t2 == "warning")
                    _snack_style = 'msg-warning';
                else if (x.t2 == "danger")
                    _snack_style = 'msg-danger';
                else if (x.t2 == "information")
                    _snack_style = 'msg-info';
                var snackbar_1 = document.getElementById("snackbar");
                snackbar_1.className = "show " + _snack_style;
                setTimeout(function () { snackbar_1.className = snackbar_1.className.replace("show", ""); }, 3000);
            }
        });
        this.init();
    }
    RpRootComponent.prototype.init = function () {
        var _this = this;
        this.http.doGet('json/config.json?random=' + Math.random()).subscribe(function (data) {
            _this.ics._title = data.title;
            _this.ics._app = data.app;
            _this.ics._appname = data.appname;
            _this.title.setTitle(_this.ics._title);
            _this.ics._apiurl = data.apiurl;
            _this.ics._rpturl = data.rpturl;
            _this.ics._wsurl = data.wsurl;
            _this.ics._uploadurl = data.uploadurl;
            _this.ics._regurl = data.regurl;
        }, function () { });
        this.http.doGet('json/lov3.json?random=' + Math.random()).subscribe(function (data) {
            _this.ref._lov3 = data;
            //this.getItemTypeList();
        }, function () { });
    };
    RpRootComponent = __decorate([
        core_1.Component({
            selector: 'rp-root',
            styleUrls: ['css/snackbar.css'],
            template: "\n    <div id=\"snackbar\">{{_alertmsg}}</div>\n    <rp-menu *ngIf=\"showmenu\"></rp-menu>\n\n    <!---  <div class=\"container col-md-12\">\n      <div id=\"alert\" class={{_alerttype}} [hidden]=\"_alertflag\">\n        {{_alertmsg}}\n      </div>\n    </div>    --->\n\n    <router-outlet></router-outlet>\n    <div id=\"rootpopup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"rootpopupsize\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"rootpopuptitle\" class=\"modal-title\">RP Report ***</h4>\n          </div>\n          <div id=\"rootpopupbody\" class=\"modal-body\">\n          </div>\n           <div class=\"modal-footer\">\n            <!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> -->\n          </div> \n        </div>\n      </div>\n    </div>\n\n    <!---- added by anh (2017-07-03) to test ---->\n\n    <div id=\"rootpopup1\" class=\"modal fade\" role=\"dialog\">\n        <div id=\"rootpopupsize1\" class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 id=\"rootpopuptitle1\" class=\"modal-title\">RP Report ***</h4>\n                </div>\n                <div id=\"rootpopupbody1\" class=\"modal-body\">\n                    Signing in\n                    <div id=\"wy\">\n                        <div id=\"wy_1\" class=\"wy\"></div>\n                        <div id=\"wy_2\" class=\"wy\"></div>\n                        <div id=\"wy_3\" class=\"wy\"></div>\n                        <div id=\"wy_4\" class=\"wy\"></div>\n                        <div id=\"wy_5\" class=\"wy\"></div>\n                        <div id=\"wy_6\" class=\"wy\"></div>\n                        <div id=\"wy_7\" class=\"wy\"></div>\n                        <div id=\"wy_8\" class=\"wy\"></div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, platform_browser_1.Title])
    ], RpRootComponent);
    return RpRootComponent;
}());
exports.RpRootComponent = RpRootComponent;
//# sourceMappingURL=rp-root.component.js.map