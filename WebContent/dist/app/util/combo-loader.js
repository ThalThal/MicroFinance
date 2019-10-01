"use strict";
// RP Application Spedific 
var rp_client_util_1 = require('../util/rp-client.util');
var ComboLoader = (function () {
    function ComboLoader(ics, ref, http) {
        this.ics = ics;
        this.ref = ref;
        this.http = http;
        this._util = new rp_client_util_1.ClientUtil();
        this._comboobj = { "value": "", "caption": "" };
        this.array = [{ "value": "", "caption": "" }];
    }
    ComboLoader.prototype.loadCombo = function () {
        this.getCarrierAreaList();
        this.getCarrierCountryList();
    };
    //get lov3 refs for carriers' combo...
    ComboLoader.prototype.getCarrierAreaList = function () {
        var _this = this;
        this.http.doGet(this.ics._apiurl + 'serviceCarrier/getcarrierarealist').subscribe(function (response) {
            if (response != null && response != undefined) {
                _this.ref._lov3.ref011 = response.data;
            }
            else {
                _this.ref._lov3.ref011 = _this.array;
            }
        }, function (error) {
            //alert(error);
        }, function () { });
    };
    ComboLoader.prototype.getCarrierCountryList = function () {
        var _this = this;
        this.http.doGet(this.ics._apiurl + 'serviceCarrier/getcarriercountrylist').subscribe(function (response) {
            if (response != null && response != undefined) {
                _this.ref._lov3.ref012 = response.data;
            }
            else {
                _this.ref._lov3.ref012 = _this.array;
            }
        }, function (error) {
            //alert(error);
        }, function () { });
    };
    return ComboLoader;
}());
exports.ComboLoader = ComboLoader;
//# sourceMappingURL=combo-loader.js.map