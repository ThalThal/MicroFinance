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
// RP Framework
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
var rp_references_1 = require('../framework/rp-references');
core_2.enableProdMode();
// Application Specific
var FrmAuthorizationComponent = (function () {
    function FrmAuthorizationComponent(ics, _router, http, ref, route) {
        this.ics = ics;
        this._router = _router;
        this.http = http;
        this.ref = ref;
        this.route = route;
        this._frmCusRpModel = false;
        this._result = { "state": false, "msgCode": "", "msgDesc": "" };
        this._array = [{ "tier": "", "brand": "" }];
        this._msgDesc = "";
        this._refreshing = true;
        this._obj = { "syskey": 0, "autokey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0, "n11": 0, "n12": 0, "n13": 0, "n14": 0, "n15": 0, "n16": 0, "n17": 0, "n18": 0, "n19": 0, "n20": 0, "t25": "", "t24": "", "t1": "", "t9": "", "t2": "", "t4": "", "t14": "", "t12": "", "t18": "", "t19": "", "t5": "", "t6": "", "t8": "", "t16": "", "t20": "", "t15": "", "t7": "", "t21": "", "t11": "", "t22": "", "t3": "", "t17": "", "t10": "", "t13": "", "t23": "", "tb": [] };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        if (!ics.getRole() || ics.getRole() == 0) {
            this._router.navigate(['/login']);
            this._refreshing = false;
        }
        this.getCompany();
        this.getClass();
        this.getBrandList();
    }
    FrmAuthorizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery("#btndelete").prop("disabled", true);
        this.sub = this.route.params.subscribe(function (params) {
            var cmd = params['cmd'];
            if (cmd != null && cmd != "" && cmd == "NEW") {
                _this.goNew();
                _this._frmCusRpModel = false;
            }
            else if (cmd != null && cmd != "" && cmd == "READ") {
                _this._frmCusRpModel = false;
                var syskey = params['id'];
                _this.goGet(syskey);
            }
        });
    };
    FrmAuthorizationComponent.prototype.goADD = function () {
        var obj = { "tier": "", "brand": "" };
        this._array.push(obj);
    };
    FrmAuthorizationComponent.prototype.goRemove = function (index) {
        var temp = [];
        for (var i = 0; i < this._array.length; i++) {
            if (index != i) {
                temp.push(this._array[i]);
            }
        }
        this._array = [];
        this._array = temp;
    };
    FrmAuthorizationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrmAuthorizationComponent.prototype.getCompany = function () {
        var _this = this;
        if (this._refreshing == true) {
            this.http.doGet(this.ics._apiurl + "service001/getCompanylist").subscribe(function (response) {
                if ((response != null || response != undefined) && response.data.length > 1)
                    _this.ref._lov3.ref005 = response;
            }, function (error) {
                alert(error);
            }, function () { });
        }
    };
    FrmAuthorizationComponent.prototype.getClass = function () {
        var _this = this;
        if (this._refreshing == true) {
            this.http.doGet(this.ics._apiurl + "serviceRule/getClass").subscribe(function (response) {
                if ((response != null || response != undefined) && response.data.length > 1)
                    _this.ref._lov3.ref012 = response.data;
            }, function (error) {
                alert(error);
            }, function () { });
        }
    };
    FrmAuthorizationComponent.prototype.getBrandList = function () {
        var _this = this;
        if (this._refreshing == true) {
            this.http.doGet(this.ics._apiurl + 'serviceBrand/getAllBrandList').subscribe(function (response) {
                console.log(" this._spobj" + JSON.stringify(response));
                if ((response != null || response != undefined) && response.data.length > 1) {
                    _this.ref._lov3.ref002 = response;
                }
            }, function (error) {
                alert(error);
            }, function () { });
        }
    };
    FrmAuthorizationComponent.prototype.goNew = function () {
        jQuery("#btndelete").prop("disabled", true);
        this._obj = { "syskey": 0, "autokey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0, "n11": 0, "n12": 0, "n13": 0, "n14": 0, "n15": 0, "n16": 0, "n17": 0, "n18": 0, "n19": 0, "n20": 0, "t25": "", "t24": "", "t1": "", "t9": "", "t2": "", "t4": "", "t14": "", "t12": "", "t18": "", "t19": "", "t5": "", "t6": "", "t8": "", "t16": "", "t20": "", "t15": "", "t7": "", "t21": "", "t11": "", "t22": "", "t3": "", "t17": "", "t10": "", "t13": "", "t23": "", "tb": [] };
        this._array = [{ "tier": "", "brand": "" }];
    };
    FrmAuthorizationComponent.prototype.goSave = function () {
        var _this = this;
        this._obj.tb = this._array;
        if (this.isValid()) {
            jQuery("#btnsave").prop("disabled", true);
            var url = this.ics._apiurl + "serviceRegister/saveAuthorization";
            var json = this._obj;
            this.http.doPost(url, json).subscribe(function (response) {
                if (response != null || response != undefined) {
                    if (response.state) {
                        _this._frmCusRpModel = false;
                        jQuery("#btndelete").prop("disabled", true);
                        _this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": response.msgDesc });
                    }
                }
                else {
                    _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": response.msgDesc });
                }
                jQuery("#btnsave").prop("disabled", false);
            }, function (error) { return alert(error); }, function () { });
        }
        else {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": this._result.msgDesc });
        }
    };
    FrmAuthorizationComponent.prototype.goList = function () {
        this._router.navigate(['authorization-list']);
    };
    FrmAuthorizationComponent.prototype.search = function () {
        this._frmCusRpModel = true;
        jQuery("#Modal").modal();
    };
    FrmAuthorizationComponent.prototype.changeItem = function (event) {
        jQuery("#Modal").modal('hide');
    };
    FrmAuthorizationComponent.prototype.goGet = function (p) {
        var _this = this;
        jQuery("#btndelete").prop("disabled", false);
        this.http.doGet(this.ics._apiurl + "serviceRegister/readByEMPSK?syskey=" + p).subscribe(function (response) {
            if (response != null || response != undefined)
                _this._obj = response;
            _this._array = _this._obj.tb;
        }, function (error) {
            alert(error);
        }, function () { });
    };
    FrmAuthorizationComponent.prototype.isValid = function () {
        if (this._obj.t3 == "" || this._obj.t3 == null) {
            this._result.msgDesc = "Choose Customer!.";
            return false;
        }
        if (this._obj.n1 == 0 || this._obj.n1 == null) {
            this._result.msgDesc = "Select Company Name!.";
            return false;
        }
        if (this._obj.n3 == 0 || this._obj.n3 == null) {
            this._result.msgDesc = "Select Class For Zarla Board!.";
            return false;
        }
        if (this._obj.tb.length > 0) {
            for (var i = 0; i < this._obj.tb.length; i++) {
                if (this._obj.tb[i].tier == 0) {
                    this._result.msgDesc = "Select Tier For Brand Board!.";
                    return false;
                }
                if (this._obj.tb[i].brand == "-") {
                    this._result.msgDesc = "Select Brand For Brand Board!.";
                    return false;
                }
            }
        }
        return true;
    };
    FrmAuthorizationComponent = __decorate([
        core_1.Component({
            selector: 'frmauthorization',
            template: "\n        <div class=\"container\">\n            <div class=\"row clearfix\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\">\n                    <form class=\"form-horizontal\" (ngSubmit)=\"goPost()\">\n                        <fieldset>\n                            <legend>Authorization</legend>\n\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12\">\n                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goNew()\" >New</button>\n                                    <button class=\"btn btn-success\" id = \"btnsave\" type=\"button\" (click)=\"goSave()\">Save</button> \n                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList();\" >List</button>                              \n                                </div>\n                            </div>\n\n                             <div class=\"form-group\">\n                                <label class=\"col-md-2\">Customer Name</label>\n                                <div class=\"col-md-4\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" id=\"textinput\" name=\"textinput\" [(ngModel)]=\"_obj.t3\" required class=\"form-control input-md\" >\n                                        <span class=\"input-group-btn input-md\">\n                                            <button class=\"btn btn-primary input-md\" type=\"button\" (click)=\"search()\">\n                                                <span class=\"glyphicon glyphicon-list\"></span>&nbsp;\n                                            </button>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <rp-input id=\"company\" rpType=\"ref005\" rpClass=\"col-md-4\" [(rpModel)]=\"_obj.n1\" rpLabelClass=\"col-md-2\" rpLabel=\"Company Name\"></rp-input>\n                            </div>\n\n                            <!--<div class=\"form-group\">\n                                <rp-input id=\"class\" rpType=\"ref012\" rpClass=\"col-md-4\" [(rpModel)]=\"_obj.n3\" rpLabelClass=\"col-md-2\" rpLabel=\"Tier\"></rp-input>\n                            </div> -->\n\n                            <ul class=\"nav nav-tabs\">\n                                <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Zarla</a></li>\n                                <li><a data-toggle=\"tab\" href=\"#tab2\">Brand</a></li> \n                            </ul>\n\n                            <div class=\"tab-content\">\n                                <div id=\"tab1\" class=\"tab-pane fade in active\"> \n                                    <div class=\"row col-md-12\">&nbsp;</div>\n                                    <rp-input id=\"class\" rpType=\"ref012\" rpClass=\"col-md-4\" [(rpModel)]=\"_obj.n3\" rpLabelClass=\"col-md-2\" rpLabel=\"Tier\"></rp-input>\n                                </div>\n                                <div id=\"tab2\" class=\"tab-pane fade\"> \n                                    <div class=\"row col-md-12\">&nbsp;</div>\n                                    <div class=\"col-md-4\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"goADD()\" >ADD</button></div>\n                                    <div class=\"row col-md-12\">&nbsp;</div>\n                                    <table id=\"brandTable\" class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                                        <thead>\n                                            <tr>\n                                                <th>Tier  </th>\n                                                <th>Brand   </th> \n                                                <th> </th> \n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of _array; let k=index\">\n                                                <td><rp-input id=\"class\" rpType=\"ref012\" rpClass=\"col-md-4\" [(rpModel)]=\"obj.tier\" rpLabelClass=\"col-md-2\" rpLabel=\"Tier\"></rp-input></td> \n                                                <td><rp-input id=\"class\" rpType=\"ref002\" rpClass=\"col-md-4\" [(rpModel)]=\"obj.brand\"rpLabelClass=\"col-md-2\" rpLabel=\"Brand\"></rp-input></td>\n                                                <td align=\"center\" ><img src=\"image/delete.png\" id=\"btnRemove\" style=\"width: 20px;height: 20px;\" (click)=\"goRemove(k)\"/></td>\n                                            </tr> \n                                        </tbody>\n                                    </table>\n                                </div> \n                            </div>\n\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <!-- Modal -->\n        <div id=\"Modal\" class=\"modal fade\" role=\"dialog\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        <h4 class=\"modal-title\">Choose Customer</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div style=\"overflow : hidden; position: relative;\">\n                             <frmcustomer-list [(rpModel)]=\"_frmCusRpModel\" (rpChanged)=\"changeItem($event)\" style=\"height:100%\" ></frmcustomer-list> \n                        </div>\n                     </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, router_1.ActivatedRoute])
    ], FrmAuthorizationComponent);
    return FrmAuthorizationComponent;
}());
exports.FrmAuthorizationComponent = FrmAuthorizationComponent;
//# sourceMappingURL=frmauthorization.component.js.map