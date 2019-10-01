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
var RpReferences = (function () {
    function RpReferences() {
        this._lov1 = {
            "stock": [{ "value": "1", "caption": "STOCK" }],
            "currency": [{ "value": "1", "caption": "USD" }],
            "gender": [{ "value": "", "caption": "" }, { "value": "m", "caption": "male" }, { "value": "f", "caption": "female" }, { "value": "0", "caption": "others" }],
            "prefix": [{ "value": "", "caption": "" }, { "value": "5", "caption": "Dr" }, { "value": "3", "caption": "Miss" }, { "value": "1", "caption": "Mr" }, { "value": "2", "caption": "Mrs" }, { "value": "4", "caption": "Ms" }],
            "string": [{ "value": "eq", "caption": "Equals" }, { "value": "c", "caption": "Contains" }, { "value": "bw", "caption": "Begins with" }, { "value": "ew", "caption": "End with" }],
            "numeric": [{ "value": "eq", "caption": "Equals" }, { "value": "gt", "caption": "Greater than" }, { "value": "lt", "caption": "Less than" }, { "value": "geq", "caption": "Greater than or Equal" },
                { "value": "leq", "caption": "Less than or Equal" }, { "value": "bt", "caption": "Between" }],
            "date": [{ "value": "eq", "caption": "Equals" }, { "value": "gt", "caption": "Greater than" }, { "value": "lt", "caption": "Less than" }, { "value": "geq", "caption": "Greater than or Equal" },
                { "value": "leq", "caption": "Less than or Equal" }, { "value": "bt", "caption": "Between" }],
            "yesno": [{ "value": "1", "caption": "NO" }, { "value": "2", "caption": "YES" }],
            "atricleType": [{ "value": "", "caption": "" }, { "value": "article", "caption": "Article" }, { "value": "question", "caption": "Question" }, { "value": "topic", "caption": "Topic" }],
            "messageType": [{ "value": "", "caption": "-" }, { "value": "state", "caption": "State" }, { "value": "group", "caption": "Group" }]
        };
        this._lov2 = {
            "ref001": [{ "value": "", "caption": "Empty" }]
        };
        this._lov3 = {
            "ref001": [{ "value": "", "caption": "Empty" }],
            "ref002": { "data": [{ "syskey": 0, "autokey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "keyValue": null, "usersyskey": 0, "parentid": 0, "sr": 0, "recordstatus": 0, "n2": 0, "n3": 0.0, "n4": 0, "syncbatch": 0, "t1": "", "t3": "", "t5": "", "syncstatus": 0, "t2": "", "t4": "", "n1": 0, "n5": 0 }] },
            "ref003": [{ "value": "", "caption": "" }],
            "ref004": [{ "value": "", "caption": "" }],
            "ref005": { "data": [{ "syskey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "parentId": 0, "userSyskey": 0, "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "t17": "", "t18": "", "t19": "", "t20": "", "t21": "", "t22": "", "t23": "", "t24": "", "t25": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0.0, "n8": 0, "n9": 0, "n10": 0, "n11": 0, "n12": 0, "n13": 0, "n14": 0, "n15": 0, "n16": 0, "n17": 0, "n18": 0, "n19": 0, "o1": "" }] },
            "brand": [{ "value": "", "caption": "" }],
            "skuInfo": [{ "value": "", "caption": "" }],
            "grandPrize": [{ "value": "", "caption": "" }],
            "ePinSetup": [{ "value": "", "caption": "" }],
            "batchNo": [{ "value": "", "caption": "" }],
        };
    }
    RpReferences = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RpReferences);
    return RpReferences;
}());
exports.RpReferences = RpReferences;
//# sourceMappingURL=rp-references.js.map