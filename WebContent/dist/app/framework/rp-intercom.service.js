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
var Subject_1 = require('rxjs/Subject');
var RpIntercomService = (function () {
    function RpIntercomService() {
        this._apiurl = "";
        this._rpturl = "";
        this._wsurl = "";
        this._uploadurl = "";
        this._regurl = "";
        this._title = "";
        this._app = "";
        this._appname = "";
        this._profile = {
            "userName": "?",
            "role": 0,
            "logoText": "AG2",
            "logoLink": "Menu00",
            "commandCenter": "true",
            "btndata": [],
            "menus": [],
            "rightMenus": [],
            "userid": "",
            "t1": "",
            "t4": "",
            "n1": 10
        };
        this._sidprofile = {
            "username": "",
            "check": false,
            "role": 0
        };
        this._datepickerOpts = {
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            placeholder: 'dd/mm/yyyy',
            format: 'dd/mm/yyyy'
        };
        // Observable string sources 
        this._channel001Source = new Subject_1.Subject();
        this._channel002Source = new Subject_1.Subject();
        this._channel003Source = new Subject_1.Subject();
        this._rpbeanSource = new Subject_1.Subject();
        // Observable string streams 
        this.channel001$ = this._channel001Source.asObservable();
        this.channel002$ = this._channel002Source.asObservable();
        this.channel003$ = this._channel003Source.asObservable();
        this.rpbean$ = this._rpbeanSource.asObservable();
    }
    // Service message commands 
    RpIntercomService.prototype.send001 = function (x) {
        this._channel001Source.next(x);
    };
    RpIntercomService.prototype.send002 = function (x) {
        this._channel002Source.next(x);
    };
    RpIntercomService.prototype.send003 = function (x) {
        this._channel003Source.next(x);
    };
    RpIntercomService.prototype.sendBean = function (x) {
        this._mybean = x;
        this._rpbeanSource.next(x);
    };
    RpIntercomService.prototype.getBean = function () {
        return this._mybean;
    };
    RpIntercomService.prototype.getRole = function () {
        return this._profile.role;
    };
    RpIntercomService.prototype.isMenuBar = function () {
        return this._profile.role > 0;
    };
    RpIntercomService.prototype.confirmUpload = function (p) {
        if (p) {
            jQuery(window).on('beforeunload', function () { return "Exit Application"; });
        }
        else {
            jQuery(window).unbind('beforeunload');
        }
    };
    RpIntercomService.prototype.getBtns = function (link) {
        var arr = this._profile.btndata;
        for (var i = 0; i < arr.length; i++) {
            if (link == arr[i].link) {
                return arr[i].desc;
            }
        }
    };
    RpIntercomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RpIntercomService);
    return RpIntercomService;
}());
exports.RpIntercomService = RpIntercomService;
//# sourceMappingURL=rp-intercom.service.js.map