"use strict";
var ClientUtil = (function () {
    function ClientUtil() {
    }
    //20160526 2:09pm YMK...
    ClientUtil.prototype.changeDatetoString = function (dt) {
        if (dt != null) {
            var datepattern = /(\d{4})?[- ]?(\d{2})?[- ]?(\d{2})/;
            return dt.replace(datepattern, '$1$2$3');
        }
        else {
            return "";
        }
    };
    //get DatePicker Date...
    ClientUtil.prototype.getDatePickerDate = function (dt) {
        if (dt != null) {
            var datestring = dt.getFullYear() + ("0" + (dt.getMonth() + 1)).slice(-2) + ("0" + dt.getDate()).slice(-2);
            return datestring;
        }
        else {
            return "";
        }
    };
    ClientUtil.prototype.setDatePickerDate = function (str) {
        if (str != "" && str != null) {
            var date = new Date();
            date.setFullYear(+str.substring(0, 4));
            date.setMonth(+str.substring(4, 6));
            date.setDate(+str.substring(6, 8));
            return date;
        }
        else {
            return null;
        }
    };
    // ANH
    ClientUtil.prototype.setDatePickerDateNew = function (str) {
        if (str != "" && str != null) {
            var date = new Date();
            date.setFullYear(+str.substring(0, 4));
            date.setMonth(+parseInt(str.substring(4, 6)) - 1, 1);
            date.setDate(+str.substring(6, 8));
            return date;
        }
        else {
            return null;
        }
    };
    //FOr 1997-04-23
    ClientUtil.prototype.setDatePickerDateWithDat = function (str) {
        if (str != "" && str != null) {
            var date = new Date();
            date.setFullYear(+str.substring(0, 4));
            date.setMonth(+parseInt(str.substring(5, 8)) - 1, 1);
            date.setDate(+str.substring(8, 9));
            return date;
        }
        else {
            return null;
        }
    };
    //for YYYY-MM-DD fomat
    ClientUtil.prototype.changeDatetoStringYMD = function (dt) {
        if (dt != null) {
            dt = dt.substring(0, 10);
            var datepattern = /(\d{4})?[- ]?(\d{2})?[- ]?(\d{2})/;
            return dt.replace(datepattern, '$3/$2/$1');
        }
        else {
            return "";
        }
    };
    ClientUtil.prototype.changeStringtoDate = function (dt) {
        if (dt != null) {
            var pattern = /(\d{4})(\d{2})(\d{2})/;
            return dt.replace(pattern, '$1-$2-$3');
        }
        else {
            return "";
        }
    };
    ClientUtil.prototype.changeStringtoDateTime = function (dt) {
        if (dt != null) {
            var pattern = /(\d{4})(\d{2})(\d{2})/;
            dt = dt.substring(0, 10);
            return dt.replace(pattern, '$1-$2-$3');
        }
        else {
            return "";
        }
    };
    ClientUtil.prototype.changeStringTimetoDate = function (dt) {
        if (dt != null) {
            var pattern = /(\d{4})(\d{2})(\d{2})/;
            return dt.replace(pattern, '$1/$2/$3');
        }
        else {
            return "";
        }
    };
    ClientUtil.prototype.changeStringtoDateDDMMYYYY = function (dt) {
        if (dt != null) {
            var pattern = /(\d{4})(\d{2})(\d{2})/;
            return dt.replace(pattern, '$3/$2/$1');
        }
        else {
            return "";
        }
    };
    ClientUtil.prototype.getTodayDate = function () {
        var d = new Date();
        var datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
        return datestring;
    };
    ClientUtil.prototype.getCurrentYear = function () {
        var d = new Date();
        var datestring = d.getFullYear();
        return datestring;
    };
    ClientUtil.prototype.validateEmail = function (d) {
        var pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        return pattern.test(d);
    };
    ;
    ClientUtil.prototype.validateIR = function (d) {
        var pattern = /IR(\d{2})(\d{2})/;
        return pattern.test(d);
    };
    ;
    ClientUtil.prototype.validateLanguage = function (d) {
        var IS_UNICODE_MY = /[ဃငဆဇဈဉညတဋဌဍဎဏဒဓနဘရဝဟဠအ]်|ျ[က-အ]ါ|ျ[ါ-း]|[^\1031]စ် |\u103e|\u103f|\u1031[^\u1000-\u1021\u103b\u1040\u106a\u106b\u107e-\u1084\u108f\u1090]|\u1031$|\u100b\u1039|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]/;
        return IS_UNICODE_MY.test(d);
    };
    ;
    ClientUtil.prototype.compareStringLength = function (str, strln) {
        if (str.length <= strln) {
            return true;
        }
        else {
            return false;
        }
    };
    ClientUtil.prototype.checkNumber = function (num) {
        return isNaN(num);
    };
    ClientUtil.prototype.changeArray = function (data, obj, num) {
        var arr = [];
        if (data instanceof Array) {
            arr = data;
            return arr;
        }
        else {
            if (num == 0) {
                arr[0] = obj;
                arr[1] = data;
                return arr;
            }
            if (num == 1) {
                arr[0] = data;
                arr[1] = obj;
                return arr;
            }
        }
    };
    ClientUtil.prototype.currencyFormat = function (p) {
        p.toFixed(2);
    };
    ClientUtil.prototype.changeDatefromat = function (dt) {
        if (dt != undefined) {
            return this.changeStringtoDate(this.changeDatetoString(dt)).substring(0, 10);
        }
    };
    //money format #,###.## - ymk 20160908
    ClientUtil.prototype.formatMoney = function (n) {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    };
    ClientUtil.prototype.validateUrl = function (d) {
        var pattern = /(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/;
        return pattern.test(d);
    };
    ;
    //validate date...
    ClientUtil.prototype.validateDate = function (d) {
        var datepattern = /(\[0-9]{4})?[-]?(\[0-9]{2})?[-]?(\[0-9]{2})/;
        return datepattern.test(d);
    };
    ClientUtil.prototype.changeStringtoDateFromDB = function (dt) {
        var pattern = /(\d{4})(\d{2})(\d{2})/;
        return dt.replace(pattern, '$3/$2/$1');
    };
    ClientUtil.prototype.getAge = function (d) {
        var today;
        today = new Date();
        var birthDate = d;
        var dd;
        var mm;
        dd = today.getDate();
        mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;
        var age = today.substring(6, 10) - birthDate.substring(0, 4);
        var month = today.substring(3, 5) - birthDate.substring(3, 5);
        var tday = parseInt(today.substring(0, 2));
        var bday = parseInt(birthDate.substring(8, 10));
        if (month < 0 || (month === 0 && bday > tday)) {
            age--;
        }
        return age;
    };
    //20170113 wtza 
    ClientUtil.prototype.getTodayTime = function () {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var minute = (minutes < 10 ? '0' + minutes : minutes);
        var strTime = hours + ':' + minute + ' ' + ampm;
        return strTime;
    };
    return ClientUtil;
}());
exports.ClientUtil = ClientUtil;
//# sourceMappingURL=rp-client.util.js.map