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
core_1.enableProdMode();
var FrmPrintPreviewComponent = (function () {
    function FrmPrintPreviewComponent(ics, route, _router) {
        var _this = this;
        this.ics = ics;
        this.route = route;
        this._router = _router;
        this.imageArr = [];
        this._img = "";
        this._resobj = { "syskey": 0, "autokey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0,
            "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "addArray": [], "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0, "n13": 0, "n14": 0,
            "n11": 0, "n12": 0, "state": false, "t9": "", "t1": "", "t2": "", "t5": "", "t6": "", "t3": "", "t7": "", "t10": "", "t4": "", "t8": "", "msg": "" };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        //this._resobj= RpLoginComponent._newresultobjst;
        //console.log(JSON.stringify(this._resobj) + " save obj")
        // if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);  
        this.imageArr = this._resobj.addArray;
        console.log(JSON.stringify(this.imageArr) + " images obj");
        this.sub = this.route.params.subscribe(function (params) {
            var cmd = params['cmd'];
            if (cmd != null && cmd != "" && cmd == "READ") {
                console.log(params['i']);
                _this._img = params['i'];
            }
        });
    }
    /*ngAfterViewInit(){
              $(document).ready(function(){
              window.print();
      });
       }*/
    FrmPrintPreviewComponent.prototype.setImgUrl = function (p) {
        var url = "";
        url = "upload/other/BarcodeImage/" + p;
        return url;
    };
    FrmPrintPreviewComponent.prototype.printSlip = function () {
        var slip = document.getElementById("slip").innerHTML;
        var mywindow = window.open('', 'Print Contents');
        mywindow.document.write('<html><head><title></title>');
        mywindow.document.write('<style type="text/css">th{ border-bottom: 2px solid #ddd;text-align: center;}h5{margin-top: -15px;}td{height: 20px;}#slip,.slip{width: 281px;margin-top: -15px;}.slipTable{width: 281px;} .headSlip{width: 281px;}</style>');
        mywindow.document.write('</head><body>');
        mywindow.document.write(slip);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10
        mywindow.print();
        mywindow.print();
        var i = 1;
        for (i = 0; i < this.imageArr.length; i++) {
            var receipt = "receipt" + String(i);
            var printReceipt = document.getElementById(receipt).innerHTML;
            var mywindow = window.open('', 'Print Contents');
            mywindow.document.write('<html><head><title></title>');
            mywindow.document.write('<style type="text/css"> .receipt{width: 282px;}.barcodePrint{width: 282px;}</style>');
            mywindow.document.write('</head><body>');
            mywindow.document.write(printReceipt);
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
        }
        mywindow.close();
    };
    FrmPrintPreviewComponent.prototype.goBack = function () {
        this._router.navigate(['slip']);
    };
    FrmPrintPreviewComponent = __decorate([
        core_1.Component({
            selector: 'frm-print',
            template: "\n   \n   \n  \n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<div class=\"slip-container\"> \n  \n\n\n<style type=\"text/css\">\n   \n th{ border-bottom: 1px solid #ddd;text-align: center;}\n td{height: 20px;}\n #slip,.slip{width: 300px;border-right: 3px line-solid;margin-left: 300px;margin-top: -30px;}\n .slipTable{width: 300px;}\n .headSlip{width: 310px;}\n.barcodePrint{width: \"50%\";}\n.receipt{width: 240px;}\nh5{margin-top: -5px;}\n</style>\n\n<!-- <div class=\"input-group-btn input-md\"> <img src=\"image/index.jpg\" width=\"33px\" height=\"28px;\" style=\"border: 1px solid #ddd;margin-top: 15px;margin-left: 10px;border-bottom-left-radius: 5px;border-top-left-radius: 5px;\">\n<input type=\"button\" name=\"print\" (click)=\"printSlip()\" value=\"Print\" style=\"width: 60px;margin-top: -28px;border: 1px solid #ddd;height: 28px;margin-left: 43px;background-color: white;border-bottom-right-radius: 5px;border-top-right-radius: 5px;\">\n</div>-->\n<div class=\"input-group\">&nbsp;</div>\n <span class=\"input-group-btn input-md\">    \n        <button class=\"btn btn-primary fa fa-print\" title=\"Print\" type=\"button\" (click)=\"printSlip()\" ></button>\n       <button class=\"btn btn-primary fa fa-arrow-left\" title=\"go back\" type=\"button\" (click)=\"goBack()\" ></button>\n </span>\n<div class=\"form-group\">\n<div class=\"row\">\n<div class='col-md-6'> \n<div id=\"slip\" class=\"slip\" >\n    <div class=\"headSlip\">\n    <h4 style=\"text-align: center;\">Meikhtila Hotel</h4>\n    <h5 style=\"text-align: center;\">Yangon-Mandalay Highway,Pyitharyar Street(1),</h5>\n    <h5 style=\"text-align: center;\"> PyiTharYar Qtr., Meikhtila Township</h5>\n    <h5  style=\"text-align: center;\">Ph: 064-2035171,2015172,2035174</h5>\n    <div >Receipt No:</div>\n    <div style=\"text-align: right;margin-top: -15px;\">Date:</div><br>\n    <div style=\"margin-top: -15px;\"><div>{{_resobj.t1}}</div><div style=\"text-align: right;margin-top: -15px;\">{{_resobj.t3}}</div></div><br>\n    <hr style=\"margin-top: -15px;\">\n</div>\n    <table class=\"slipTable\">\n        <tr>\n            <th style=\"text-align: left;\">Categories</th>\n            <th style=\"text-align: right;\">Qty</th>\n            <th style=\"text-align: right;\">Price</th>\n            <th style=\"text-align: right;\">Amount</th>\n        </tr>\n       <tr *ngIf=\"_resobj.n1 != ''\">\n            <td>{{_resobj.t4}}(Adult)</td>\n            <td style=\"text-align: right;\">{{_resobj.n1}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t5}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n6}}</td>\n        </tr>\n         <tr *ngIf=\"_resobj.n13 != ''\">\n            <td>{{_resobj.t4}}(Children)</td>\n            <td style=\"text-align: right;\">{{_resobj.n13}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t6}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n14}}</td>\n        </tr>\n        <tr *ngIf=\"_resobj.n2 != ''\">\n            <td>Swimming Suit (Rent)</td>\n            <td style=\"text-align: right;\">{{_resobj.n2}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t7}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n7}}</td>\n        </tr>\n         <tr *ngIf=\"_resobj.n3 != ''\">\n            <td>{{_resobj.t4}Swimming Suit (Sell)</td>\n            <td style=\"text-align: right;\">{{_resobj.n3}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t8}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n8}}</td>\n        </tr>\n        <tr *ngIf=\"_resobj.n4 != ''\">\n            <td>Life Saver </td>\n            <td style=\"text-align: right;\">{{_resobj.n4}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t9}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n9}}</td>\n        </tr>\n        <tr><td colspan=\"4\" style=\"border-collapse: collapse; border-bottom: 1px dotted black; margin-top: -30px;height: 17px;\"></td></tr>\n        <tr>\n            <td>Total</td>\n            <td colspan=\"3\" style=\"text-align: right;\">{{_resobj.n10}}</td>\n        </tr>\n        <tr>\n            <td>Tax(5%)</td>\n            <td colspan=\"3\" style=\"text-align: right;\">{{_resobj.n11}}</td>\n        </tr>\n        <tr><td colspan=\"4\" style=\"border-collapse: collapse; border-bottom: 1px dotted black; margin-top: -30px;height: 17px;\"></td></tr>\n         <tr>\n            <td>Net Amount</td>\n            <td colspan=\"3\" style=\"text-align: right;\">{{_resobj.n12}}</td>\n        </tr>\n        <tr><td colspan=\"4\" style=\"text-align: center;\">Thank You</td></tr>\n    </table>\n</div>\n</div>\n\n<!-- ///receipt1 -->\n\n\n<div class='col-md-6'> \n<div style=\"width: 330px;border-right: 3px line-solid;margin-top: -30px;border-left: 1px solid black;padding-left: 20px;\">\n    <h4 style=\"text-align: center;\">Meikhtila Hotel</h4>\n    <h5 style=\"text-align: center;\">Yangon-Mandalay Highway,Pyitharyar Street(1),</h5>\n    <h5 style=\"text-align: center;\"> PyiTharYar Qtr., Meikhtila Township</h5>\n    <h5  style=\"text-align: center;\">Ph: 064-2035171,2015172,2035174</h5>\n    <div >Receipt No:</div>\n    <div style=\"text-align: right;margin-top: -15px;\">Date:</div><br>\n    <div style=\"margin-top: -15px;\"><div>{{_resobj.t1}}</div><div style=\"text-align: right;margin-top: -15px;\">{{_resobj.t3}}</div></div><br>\n    <hr style=\"margin-top: -15px;\">\n    <table style=\"width: 320px;\">\n        <tr>\n            <th style=\"text-align: right;\">Categories</th>\n            <th style=\"text-align: left;\">Qty</th>\n            <th style=\"text-align: left;\">Price</th>\n            <th style=\"text-align: left;\">Amount</th>\n        </tr>\n        <tr *ngIf=\"_resobj.n1 != ''\">\n            <td>{{_resobj.t4}}(Adult)</td>\n            <td style=\"text-align: right;\">{{_resobj.n1}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t5}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n6}}</td>\n        </tr>\n         <tr *ngIf=\"_resobj.n13 != ''\">\n            <td>{{_resobj.t4}}(Children)</td>\n            <td style=\"text-align: right;\">{{_resobj.n13}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t6}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n14}}</td>\n        </tr>\n        <tr *ngIf=\"_resobj.n2 != ''\">\n            <td>Swimming Suit (Rent)</td>\n            <td style=\"text-align: right;\">{{_resobj.n2}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t7}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n7}}</td>\n        </tr>\n         <tr *ngIf=\"_resobj.n3 != ''\">\n            <td>{{_resobj.t4}Swimming Suit (Sell)</td>\n            <td style=\"text-align: right;\">{{_resobj.n3}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t8}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n8}}</td>\n        </tr>\n        <tr *ngIf=\"_resobj.n4 != ''\">\n            <td>Life Saver </td>\n            <td style=\"text-align: right;\">{{_resobj.n4}}</td>\n            <td style=\"text-align: right;\">{{_resobj.t9}}</td>\n            <td style=\"text-align: right;\">{{_resobj.n9}}</td>\n        </tr>\n        <tr><td colspan=\"4\" style=\"border-collapse: collapse; border-bottom: 1px dotted black; margin-top: -30px;height: 17px;\"></td></tr>\n        <tr>\n            <td>Total</td>\n            <td colspan=\"3\" style=\"text-align: right;\">{{_resobj.n10}}</td>\n        </tr>\n        <tr>\n            <td>Tax(5%)</td>\n            <td colspan=\"3\" style=\"text-align: right;\">{{_resobj.n11}}</td>\n        </tr>\n        <tr><td colspan=\"4\" style=\"border-collapse: collapse; border-bottom: 1px dotted black; margin-top: -30px;height: 17px;\"></td></tr>\n         <tr>\n            <td>Net Amount</td>\n            <td colspan=\"3\" style=\"text-align: right;\">{{_resobj.n12}}</td>\n        </tr>\n        <tr><td colspan=\"4\" style=\"text-align: center;\">Thank You</td></tr>\n    </table>\n</div>\n</div>\n</div>\n</div>\n<hr>\n\n<!-- //////////// -->\n\n\n\n<div class=\"row\" style=\"padding-left: 5px;\">\n\n<div *ngFor =\" let img of imageArr; let num = index\" style=\"width: 240px;height: 320px; border: 1px solid #ddd;float: left;margin: 2px;margin-left: 20px;\">\n<div id=\"receipt{{num}}\" class=\"receipt\" style=\"font-size: 10px;\">\n    <table class=\"barcodePrint\">\n        <tr>\n            <td width=\"30%\">&nbsp;</td>\n            <td width=\"50%\">&nbsp;</td>\n        </tr>\n        <tr>\n            <td width=\"100%\" colspan=\"2\">\n                <p align=\"center\">Date : {{_resobj.t3}}</p>\n                <h3 align=\"center\" style=\"text-transform: uppercase;\">Meikhtila Swimming Pool</h3>\n                <p align=\"left\">&nbsp;</p>\n                <p class=\"line-solid\"></p>\n                <p align=\"center\" ><strong>Thanks for visiting our swimming pool</strong></p>\n                <p align=\"center\"><img id=\"imgPhoto\" src={{setImgUrl(img.t2)}} width=\"230px\" height=\"100px\" style=\"padding-right: 4px;\"/></p>\n                <!--<p align=\"center\">ID</p>-->\n                <p class=\"line-solid\"></p>\n                <p align=\"left\">&nbsp;</p>\n            </td>\n        </tr>\n       \n    </table>\n    \n</div>\n</div>\n\n</div>  <!-- row -->             \n</div>\n    \n\n\n   \n    \n    \n    \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.ActivatedRoute, router_1.Router])
    ], FrmPrintPreviewComponent);
    return FrmPrintPreviewComponent;
}());
exports.FrmPrintPreviewComponent = FrmPrintPreviewComponent;
//# sourceMappingURL=frm-print-preview.component.js.map