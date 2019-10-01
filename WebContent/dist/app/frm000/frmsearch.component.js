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
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_bean_1 = require('../framework/rp-bean');
var rp_references_1 = require('../framework/rp-references');
var core_2 = require('@angular/core');
// Application Specific
core_2.enableProdMode();
var FrmSearchComponent = (function () {
    function FrmSearchComponent(ics, _router, route, http, ref) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.ref = ref;
        // Application Specific 
        this._obj = { "t1": "00-9-81", "t2": "Dr TTT", "t3": "No. 12, Inya Road, Yangon" };
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
    }
    FrmSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var cmd = params['cmd'];
            if (cmd != null && cmd != undefined && cmd != "") {
                _this._obj.t1 = cmd;
            }
        });
    };
    FrmSearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrmSearchComponent.prototype.popup = function () {
        var bean = new rp_bean_1.RpBean;
        bean.t1 = "rp-popup";
        bean.t2 = "RP Framework Popup View";
        bean.t3 = this.ics._rpturl + "direct.jsp";
        this.ics.sendBean(bean);
    };
    FrmSearchComponent.prototype.clickBtn = function () {
        var user = this.ics._profile.userName;
        alert(user + " clicked the button!");
    };
    FrmSearchComponent = __decorate([
        core_1.Component({
            selector: 'frmsearch',
            template: " \n      <div class=\"container\">\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\">\n      <fieldset>  \n      <legend>Command Center / Search Results </legend>\n      \n      <div class=\"form-group\"> \n      <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" (click)=\"clickBtn()\" >Button</button>  \n      </div>\n      </div>\n      \n      <div class=\"form-group\">\n      <rp-input rpId=\"id1\" rpType=\"text\" rpLabel=\"Customer ID\" [(rpModel)]=\"_obj.t1\"></rp-input> \n      <rp-input rpId=\"id2\" rpType=\"text\" rpLabel=\"Name\" [(rpModel)]=\"_obj.t2\"></rp-input> \n      </div>\n      <div class=\"form-group\">\n      <rp-input rpId=\"id3\" rpLabelClass=\"col-md-2\" rpClass=\"col-md-5\" rpType=\"text\" rpLabel=\"Address\" [(rpModel)]=\"_obj.t3\"></rp-input> \n      </div>\n    \n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">General</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tab2\">Others</a></li> \n    </ul>\n    <div class=\"form-group\"></div>\n    <div class=\"tab-content\">\n      <div id=\"tab1\" class=\"tab-pane fade in active\">\n          <div class=\"form-group\"> \n          <rp-input rpId=\"id5\"  rpType=\"text\" rpLabel=\"Field 1*\" [(rpModel)]=\"_obj.t1\"></rp-input> \n          <rp-input rpId=\"id6\"  rpType=\"text\" rpLabel=\"Field 2\" [(rpModel)]=\"_obj.t2\"></rp-input>  \n          </div>\n          <div class=\"form-group\"> \n          <rp-input rpId=\"id7\"  rpClass=\"col-md-10\" rpType=\"text\" rpLabel=\"Field 3\" [(rpModel)]=\"_obj.t3\"></rp-input> \n          </div> \n      </div>\n      <div id=\"tab2\" class=\"tab-pane fade\">  \n        <p>This quick brown fox jumps over the lazy dog.</p> \n      </div> \n    </div>\n    \n      <div class=\"form-group\">\n      <label class=\"col-md-2 control-label\"></label>\n      <div class=\"col-md-9\"> \n      <button class=\"btn btn-default\" (click)=\"popup()\" >Rpt 1</button>\n      </div>\n      </div>\n  \n    </fieldset>\n    </form> \n    </div>\n    </div>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
    ], FrmSearchComponent);
    return FrmSearchComponent;
}());
exports.FrmSearchComponent = FrmSearchComponent;
//# sourceMappingURL=frmsearch.component.js.map