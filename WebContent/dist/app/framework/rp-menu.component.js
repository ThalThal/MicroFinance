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
var rp_intercom_service_1 = require('./rp-intercom.service');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var RpMenuComponent = (function () {
    function RpMenuComponent(ics, _router) {
        var _this = this;
        this.ics = ics;
        this._router = _router;
        this._brandname = '';
        this._right = true;
        this._cmd = "";
        this._profile = {
            "userName": "?",
            "logoText": "AG2",
            "logoLink": "/Menu00",
            "role": 100,
            "t4": "",
            "commandCenter": "false",
            "menus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
                { "menuItem": "Menu02", "caption": "Menu 02" },
                { "menuItem": "Menu03", "caption": "Menu 03" },
                {
                    "menuItem": "", "caption": "Menu Group",
                    "menuItems": [
                        { "menuItem": "Menu01", "caption": "Menu 001" },
                        { "menuItem": "Menu02", "caption": "Menu 002" },
                        { "menuItem": "Menu03", "caption": "Menu 003" },
                        { "menuItem": "Menu04", "caption": "Menu 004" },
                        { "menuItem": "Menu05", "caption": "Menu 005" },
                        { "menuItem": "Menu06", "caption": "Menu 006" },
                        { "menuItem": "Menu07", "caption": "Menu 007" }
                    ]
                }
            ],
            "rightMenus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
                { "menuItem": "Menu02", "caption": "Menu 02" },
                { "menuItem": "Menu03", "caption": "Menu 03" },
                {
                    "menuItem": "", "caption": "Menu Group",
                    "menuItems": [{ "menuItem": "Menu01", "caption": "Menu 001" },
                        { "menuItem": "Menu02", "caption": "Menu 002" },
                        { "menuItem": "Menu03", "caption": "Menu 003" }]
                }
            ]
        };
        this._profile = ics._profile;
        console.log(JSON.stringify(this._profile) + " menu obj");
        this.subscription = ics.rpbean$.subscribe(function (x) { _this._profile = ics._profile; });
    }
    RpMenuComponent.prototype.cmd = function () {
        this._router.navigate(['/command', this._cmd]);
    };
    /* clk() {
       document.getElementById("navbar").className = "navbar-collapse collapse";
     }*/
    RpMenuComponent.prototype.clk = function () {
        document.getElementById("navbar").className = "navbar-collapse collapse";
    };
    RpMenuComponent = __decorate([
        core_1.Component({
            selector: 'rp-menu',
            template: "\n    <nav class=\"navbar navbar-expand-lg navbar-dark  fixed-top\" style=\"background-color: #17A2B8;\">\n  <div class=\"menucontainer col-md-12\">\n    <!--<a class=\"navbar-brand\" [routerLink]=\"[_profile.logoLink]\">\n     <img alt=\"Home\" title=\"Home\" src=\"image/MKL.jpg\">\n    </a>-->\n     <a class=\"navbar-brand\" style=\"color:#ffffff; padding-top:10px;\" [routerLink]=\"[_profile.logoLink]\">{{_profile.logoText}}</a>\n    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbarNavDropdown\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n     <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul *ngIf=\"_profile.menus!=null\" class=\"nav navbar-nav\">\n            <li *ngFor=\"let item of _profile.menus;\" [class]=\"item!=null&&item.menuItem==''?'dropdown':''\">\n                    <a (click)=\"clk()\"  *ngIf=\"item!=null && item.menuItem!='' && item.menuItem!=null\"  [routerLink]=\"[item.menuItem]\">{{item.caption}}</a> \n                    <a  *ngIf=\"item!=null && item.menuItem=='' && item.menuItem!=null\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">{{item.caption}}<span class=\"caret\"></span></a> \n                      <ul *ngIf=\"item!=null && item.menuItems!=null\" class=\"dropdown-menu\">\n                        <li *ngFor=\"let subitem of item.menuItems;\"><a (click)=\"clk()\" *ngIf=\"subitem!=null && subitem.menuItem!='' && subitem.menuItem!=undefined && subitem.menuItem!=null\" [routerLink]=\"[subitem.menuItem]\" class =\"ex1\">{{subitem.caption}}</a></li> \n                      </ul>\n            </li>  \n          </ul>\n          <div  *ngIf=\"_right\" class=\" navbar-right\">\n            <!--<input (keyup.enter)=\"cmd();clk();\" [(ngModel)]=\"_cmd\" *ngIf=\"_profile.commandCenter!='false'\" placeholder=\" Search\"  type=\"text\" class=\"nav navbar-nav \" style=\"margin-top: 15px;margin-left: 0px;margin-right: 5px; width:180px;\">-->\n            <span class=\"navbar-brand\" style=\"font-size:14px\" > {{_profile.userName}} </span>\n            <ul *ngIf=\"_profile.rightMenus!=null\" class=\"nav navbar-nav\">\n            <li *ngFor=\"let item of _profile.rightMenus;\" [class]=\"item!=null&&item.menuItem==''?'dropdown':''\">\n                    <a (click)=\"clk()\"  *ngIf=\"item!=null && item.menuItem!='' && item.menuItem!=null\"  [routerLink]=\"[item.menuItem]\">{{item.caption}}</a> \n                    <a   *ngIf=\"item!=null && item.menuItem=='' && item.menuItem==null && item.caption!='System'\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">{{item.caption}} <span class=\"caret\"></span></a>                     \n                    <a   *ngIf=\"item!=null && item.menuItem=='' && item.menuItem!=null && item.caption=='System'\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"caret\"></span></a>\n                      <ul *ngIf=\"item!=null && item.menuItems!=null\" class=\"dropdown-menu\">\n                        <li *ngFor=\"let subitem of item.menuItems;\" ><a (click)=\"clk()\" *ngIf=\"subitem!=null && subitem.menuItem!='' && subitem.menuItem!=undefined && subitem.menuItem!=null\" [routerLink]=\"[subitem.menuItem]\">{{subitem.caption}}</a></li> \n                      </ul>\n            </li>  \n            </ul>\n            </div>\n        </div>\n  </div>\n</nav>\n  ",
            styleUrls: ['css/menu.css']
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router])
    ], RpMenuComponent);
    return RpMenuComponent;
}());
exports.RpMenuComponent = RpMenuComponent;
//# sourceMappingURL=rp-menu.component.js.map