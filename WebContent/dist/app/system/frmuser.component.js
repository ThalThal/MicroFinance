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
var rp_references_1 = require('../framework/rp-references');
var rp_intercom_service_1 = require('../framework/rp-intercom.service');
var rp_http_service_1 = require('../framework/rp-http.service');
// Application Specific
var FrmUserComponent = (function () {
    function FrmUserComponent(ics, ref, _router, route, http) {
        this.ics = ics;
        this.ref = ref;
        this._router = _router;
        this.route = route;
        this.http = http;
        // RP Framework 
        this.frmlink = "/user";
        this.rpChanged = new core_1.EventEmitter();
        // Application Specific
        this._note = "";
        this.confirmpwd = "";
        this._tmpT1 = false;
        this._returnResult = { "keyResult": 0, "longResult": "", "msgDesc": "", "state": false, "stringResult": "" };
        this._obj = { "syskey": 0, "n4": 0, "t1": "", "t2": "", "t3": "", "t4": "", "name": "", "userName": "", "rolesyskey": [], "userrolelist": [{ "syskey": 0, "t2": "", "flag": false }] };
        this._obj1 = { "a1": "admin" };
        this._key = "";
        this._ans = "";
        this.confirmpass = "";
        this.catch = "";
        this.message = "";
        this.flagnew = true;
        this.flagsave = true;
        this.flagdelete = true;
        this.strongRegex = new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{4,20})");
        this.mediumRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$");
        this.rolesyskey = [];
        this._ans1 = "";
        if (!ics.getRole() || ics.getRole() == 0)
            this._router.navigate(['/login']);
        this.getUserRoleList();
        this.flagdelete = true;
        this.setBtns();
    }
    FrmUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var cmd = params['cmd'];
            console.log("cmd: " + cmd);
            if (cmd != null && cmd != "" && cmd == "new") {
                _this.flagdelete = true;
                _this.getUserRoleList();
            }
            else if (cmd != null && cmd != "" && cmd == "read") {
                var id = params['id'];
                console.log(id);
                //  let url: string = this.ics._apiurl + 'service001/getUserData';
                _this._key = params['id'];
                if (_this.ics._profile.role == 11267) {
                    _this.url = _this.ics._apiurl + 'service001/getUserData';
                }
                else {
                    _this.url = _this.ics._apiurl + 'service001/getUserDataList?role=' + _this.ics._profile.role;
                }
                var json = _this._key;
                _this.http.doPost(_this.url, json).subscribe(function (data) {
                    console.log(JSON.stringify(data) + " get user role lists");
                    _this.confirmpwd = data.t2;
                    _this._obj = data;
                    for (var i = 0; i < _this._obj.userrolelist.length; i++) {
                        if (data.userrolelist[i].flag == true)
                            _this._obj.userrolelist[i].flag = true;
                        else
                            _this._obj.userrolelist[i].flag = false;
                    }
                    _this._tmpT1 = true;
                    _this.flagdelete = false;
                    _this.rolesyskey = [];
                    for (var i = 0; i < _this._obj.rolesyskey.length; i++) {
                        if (_this._obj.rolesyskey[i] != 0) {
                            _this.rolesyskey.push(_this._obj.rolesyskey[i]);
                        }
                    }
                    _this._obj.rolesyskey = _this.rolesyskey;
                    if (_this._obj.userrolelist[1].syskey == 0) {
                        if (_this._obj.userrolelist.length - 1 == _this.rolesyskey.length) {
                            _this._result = true;
                        }
                    }
                    else {
                        if (_this._obj.userrolelist.length == _this.rolesyskey.length) {
                            _this._result = true;
                        }
                    }
                }, function (error) {
                    return function () { };
                });
            }
        });
    };
    FrmUserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrmUserComponent.prototype.getUserRoleList = function () {
        var _this = this;
        if (this.ics._profile.role == 11267) {
            this.http.doGet(this.ics._apiurl + 'service001/getUserRolelist?role=' + this.ics._profile.role).subscribe(function (data) {
                console.log(JSON.stringify(data) + " user role lists");
                _this._obj = data;
                for (var i = 0; i < _this._obj.userrolelist.length; i++) {
                    _this._obj.userrolelist[i].flag = false;
                }
            }, function (error) {
                return function () { };
            });
        }
        else {
            this.http.doGet(this.ics._apiurl + 'service001/getUserRolelists?role=' + this.ics._profile.role).subscribe(function (data) {
                _this._obj = data;
                for (var i = 0; i < _this._obj.userrolelist.length; i++) {
                    _this._obj.userrolelist[i].flag = false;
                }
            }, function (error) {
                return function () { };
            });
        }
    };
    FrmUserComponent.prototype.updateChecked111 = function (event) {
        if (event.target.checked) {
            for (var i = 0; i < this._obj.userrolelist.length; i++) {
                this._obj.userrolelist[i].flag = true;
                this._result = true;
                if (this._obj.userrolelist[i].syskey != 0) {
                    this.rolesyskey[i] = this._obj.userrolelist[i].syskey;
                }
            }
        }
        else {
            //if parentmenu is not check, uncheck all childmenu
            for (var i = 0; i < this._obj.userrolelist.length; i++) {
                this._obj.userrolelist[i].flag = false;
                console.log(this._obj.userrolelist[i].flag);
                var indexx = this.rolesyskey.indexOf(this._obj.userrolelist[i].syskey);
                this.rolesyskey.splice(indexx, 1);
                this._result = false;
            }
        }
        this._ans1 = JSON.stringify(this.rolesyskey);
        this._obj.rolesyskey = this.rolesyskey;
    };
    FrmUserComponent.prototype.updateChecked = function (value, event) {
        if (event.target.checked) {
            this.rolesyskey.push(value);
            console.log(JSON.stringify(this.rolesyskey));
        }
        else if (!event.target.checked) {
            var indexx = this.rolesyskey.indexOf(value);
            this.rolesyskey.splice(indexx, 1);
            console.log(JSON.stringify(this.rolesyskey.splice(indexx, 1)));
        }
        this._ans = JSON.stringify(this.rolesyskey);
        this._obj.rolesyskey = this.rolesyskey;
        if (this._obj.userrolelist[1].syskey == 0) {
            console.log(JSON.stringify(this._obj.userrolelist.length) + "** " + JSON.stringify(this.rolesyskey.length));
            if (this._obj.userrolelist.length - 1 == this.rolesyskey.length) {
                for (var i = 0; i < this._obj.userrolelist.length - 1; i++) {
                    this._obj.userrolelist[i].flag = true;
                }
                this._result = true;
            }
            else {
                this._result = false;
            }
        }
        else {
            console.log(JSON.stringify(this._obj.userrolelist.length) + "** " + JSON.stringify(this.rolesyskey.length));
            if (this._obj.userrolelist.length == this.rolesyskey.length) {
                for (var i = 0; i < this._obj.userrolelist.length; i++) {
                    console.log(JSON.stringify(this._obj.userrolelist[i].flag + "** "));
                    this._obj.userrolelist[i].flag = true;
                }
                this._result = true;
            }
            else {
                this._result = false;
            }
        }
    };
    FrmUserComponent.prototype.goDelete = function () {
        var _this = this;
        var url = this.ics._apiurl + 'service001/deleteUser';
        var json = this._key;
        this.http.doPost(url, json).subscribe(function (data) {
            _this._returnResult = data;
            _this.showMessage(_this._returnResult.msgDesc, _this._returnResult.state);
        }, function (error) {
            return function () { };
        });
        this.clearData();
    };
    FrmUserComponent.prototype.goPost = function () {
        var _this = this;
        console.log(JSON.stringify(this._obj) + " **");
        if (this.isValidate(this._obj)) {
            this.flagsave = true;
            ///this._obj.t4 = this.ics._profile.t4; // brand id (0002 or 0001)
            var url = this.ics._apiurl + 'service001/saveUser';
            var json = this._obj;
            this.http.doPost(url, json).subscribe(function (data) {
                _this._returnResult = data;
                if (_this._returnResult.msgDesc == 'Saved Successfully!' || _this._returnResult.msgDesc == 'Updated Successfully!') {
                    _this._obj.syskey = _this._returnResult.keyResult;
                    _this.message = "";
                    _this._key = _this._returnResult.keyResult + "";
                    _this.flagsave = false;
                    _this.flagdelete = false;
                }
                if (_this._returnResult.msgDesc == 'Please select Role!') {
                    _this.rolesyskey = [];
                }
                _this.showMessage(_this._returnResult.msgDesc, _this._returnResult.state);
            }, function (error) {
                return function () { };
            });
        }
    };
    FrmUserComponent.prototype.goList = function () {
        this._router.navigate(['/userList']);
    };
    FrmUserComponent.prototype.isValidate = function (obj) {
        if (this._obj.t2 != this.confirmpwd) {
            this.showMessage("Password and Confirm Password do not Match!", false);
            return false;
        }
        else if (this.catch.length > 0) {
            this.showMessage("Invalid Password,Try Again!", false);
            return false;
        }
        else if (this._obj.t3.length > 0 && !this.validateEmail(this._obj.t3)) {
            this.showMessage("Your email address is invalid!", false);
            return false;
        }
        else {
            return true;
        }
    };
    FrmUserComponent.prototype.clearconfirm = function (e) {
        this.confirmpass = "";
    };
    FrmUserComponent.prototype.goNew = function () {
        this.clearData();
    };
    FrmUserComponent.prototype.messagealert = function () {
        var _this = this;
        this.messagehide = false;
        setTimeout(function () { return _this.messagehide = true; }, 3000);
    };
    FrmUserComponent.prototype.clearData = function () {
        this.confirmpwd = "";
        this.message = "";
        this._result = false;
        this._key = "";
        this.rolesyskey = [];
        this._obj.rolesyskey = [];
        this._obj.t1 = "";
        this._obj.t2 = "";
        this._obj.t3 = "";
        this._tmpT1 = false;
        this._obj.name = "";
        this._obj.userName = "";
        this._obj.syskey = 0;
        this.messagehide = true;
        this._returnResult = { "keyResult": 0, "longResult": "", "msgDesc": "", "state": false, "stringResult": "" };
        for (var i = 0; i < this._obj.userrolelist.length; i++) {
            this._obj.userrolelist[i].flag = false;
        }
        this.flagdelete = true;
    };
    FrmUserComponent.prototype.validateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    FrmUserComponent.prototype.showMessage = function (msg, bool) {
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
    FrmUserComponent.prototype.setBtns = function () {
        var k = this.ics.getBtns("/user");
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
    FrmUserComponent = __decorate([
        core_1.Component({
            selector: 'frmuser',
            template: " \n    <div class=\"container\">      \n\n      <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\" (ngSubmit)=\"goPost()\" >\n      <fieldset>  \n      <legend>Admin</legend>\n            \n      <div class=\"form-group\"> \n        \n        <div class=\"row  col-md-12\"> \n        \n          <button class=\"btn btn-primary\" [disabled]=\"flagnew\" id=\"new\" type=\"button\" (click)=\"goNew()\" >New</button>      \n          <div> &nbsp; </div>\n          <button class=\"btn btn-primary\" [disabled]=\"flagsave\" id=\"save\" type=\"submit\" >Save</button> \n          <div> &nbsp; </div>\n          <button class=\"btn btn-primary\" [disabled]=\"flagdelete\" id=\"delete\" type=\"button\" (click)=\"goDelete();\" >Delete</button>\n          <div> &nbsp; </div>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList()\" >List</button>  \n         </div>        \n         \n         </div>\n      <div class=\"row col-md-12\">&nbsp;</div>    \n          <div class=\"form-group\">\n           <!-- <rp-input rpId=\"id\" rpType=\"text\" rpLabel=\"Login ID\" [(rpModel)]=\"_obj.t1\" rpReadonly=\"_tmpT1\" rpLabelRequired=\"true\"></rp-input>--> \n             <div class=\"input-group mb-3\">                  \n            \n                           <label class=\"col-md-2\"> Login ID <span style=\"color:red\">*</span></label>    \n                            <div class=\"col-md-3\">\n                                 <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter Login ID\" [(ngModel)]=\"_obj.t1\" [ngModelOptions]=\"{standalone: true}\"  required>\n                                        \n                            </div>\n                            &nbsp;                                \n\n               </div>\n          </div>      \n            \n              <div class=\"form-group\"  >                                                                            \n                     <div class=\"input-group mb-3\">\n                     \n            \n                           <label class=\"col-md-2\"> Name <span style=\"color:red\">*</span></label>    \n                                   <div class=\"col-md-3\">\n                                       <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter Your Name\" [(ngModel)]=\"_obj.name\" [ngModelOptions]=\"{standalone: true}\"  required>\n                                        \n                                    </div>\n                                    &nbsp;\n                                         \n                                    <label class=\"col-md-2\"> Password <span style=\"color:red\">*</span></label>    \n                                       <div class=\"col-md-3\">\n                                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter Your Password\" [(ngModel)]=\"_obj.t2\" [ngModelOptions]=\"{standalone: true}\"  required>\n                                        \n                                       </div>\n\n                    </div>\n             </div>\n             <div class=\"form-group\"  >\n                                                                            \n                  <div class=\"input-group mb-3\">\n                       <label class=\"col-md-2\"> Email </label>    \n                        <div class=\"col-md-3\">\n                            <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Your Email Address\" [(ngModel)]=\"_obj.t3\" [ngModelOptions]=\"{standalone: true}\"  required>\n                        </div>\n                        &nbsp;\n                                         \n                        <label class=\"col-md-2\"> Confirm Password </label>    \n                        <div class=\"col-md-3\">\n                             <input type=\"password\" class=\"form-control\" id=\"cpwd\" name=\"cpwd\" placeholder=\"Enter Your Password again\" [(ngModel)]=\"confirmpwd\" [ngModelOptions]=\"{standalone: true}\" (keydown)=\"clearconfirm($event)\" required>\n                        </div>\n\n                  </div>\n             </div>\n                                \n         <!-- <ul class=\"navv navv-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\"><b>Role</b></a></li>      \n          </ul>-->\n\n<div class=\"nav-tabs-wrapper\">\n    <ul class=\"nav nav-tabs dragscroll horizontal\">\n        <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tab1\"><b>Role</b></a></li>\n       \n    </ul>\n</div>\n      \n <div class=\"tab-content\">\n    <div class=\"tab-pane fade show active\" id=\"tab1\">\n        <div class=\"row col-md-12\">&nbsp;</div>\n        <div class=\"form-group\"> \n            <label>\n                <input type=\"checkbox\"  [(ngModel)]=\"_result\" (change)=\"updateChecked111($event)\" [ngModelOptions]=\"{standalone: true}\"><b> Select All</b>\n               <!-- {{_role}} --> </label>             \n           </div>\n           \n          <ul  style=\"list-style:none;\">\n          <li *ngFor=\"let role of _obj.userrolelist\">\n\n          <div class=\"form-group\">\n          <div *ngIf=\"role.syskey!=0\"> \n          <input type=\"checkbox\"  [(ngModel)]=\"role.flag\" (change)=\"updateChecked(role.syskey,$event)\" [ngModelOptions]=\"{standalone: true}\">             \n          {{role.t2}}\n          </div>\n          </div>\n          </li>\n          </ul>\n    </div> \n  </div>\n      \n   \n    \n   </fieldset>\n    \n\n    </form>\n\n    </div>\n    </div>\n    </div>\n   ",
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_references_1.RpReferences, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService])
    ], FrmUserComponent);
    return FrmUserComponent;
}());
exports.FrmUserComponent = FrmUserComponent;
//# sourceMappingURL=frmuser.component.js.map