export class ClientUtil {
  constructor() {
  }
  //20160526 2:09pm YMK...
  changeDatetoString(dt) {
    if (dt != null) {
      var datepattern = /(\d{4})?[- ]?(\d{2})?[- ]?(\d{2})/;
      return dt.replace(datepattern, '$1$2$3');
    } else {
      return "";
    }
  }

  //get DatePicker Date...
  getDatePickerDate(dt){
    if (dt != null) {
      var datestring = dt.getFullYear() + ("0" + (dt.getMonth() + 1)).slice(-2) + ("0" + dt.getDate()).slice(-2);
      return datestring;
    } else {
      return "";
    }
  }
  setDatePickerDate(str){
    if (str != "" && str != null) {
      let date = new Date();
      date.setFullYear(+str.substring(0, 4));
      date.setMonth(+str.substring(4, 6));
      date.setDate(+str.substring(6, 8));
      return date;
    } else {
      return null;
    }
  }

  // ANH
  setDatePickerDateNew(str){
    if (str != "" && str != null) {
      let date = new Date();
      date.setFullYear(+str.substring(0, 4));
      date.setMonth(+ parseInt(str.substring(4, 6)) - 1,1);
      date.setDate(+str.substring(6, 8));
      return date;
    } else {
      return null;
    }
  }
  
  //FOr 1997-04-23
 setDatePickerDateWithDat(str){
    if (str != "" && str != null) {
      let date = new Date();
      date.setFullYear(+str.substring(0, 4));
      date.setMonth(+ parseInt(str.substring(5, 8)) - 1,1);
      date.setDate(+str.substring(8, 9));
      return date;
    } else {
      return null;
    }
  }



  //for YYYY-MM-DD fomat
  changeDatetoStringYMD(dt) {
    if (dt != null) {
      dt = dt.substring(0, 10);
      var datepattern = /(\d{4})?[- ]?(\d{2})?[- ]?(\d{2})/;
      return dt.replace(datepattern, '$3/$2/$1');
    } else {
      return "";
    }
  }
  changeStringtoDate(dt) {
    if (dt != null) {
      var pattern = /(\d{4})(\d{2})(\d{2})/;
      return dt.replace(pattern, '$1-$2-$3');
    } else {
      return "";
    }
  }

  changeStringtoDateTime(dt) {
    if (dt != null) {
      var pattern = /(\d{4})(\d{2})(\d{2})/;
      dt = dt.substring(0, 10);
      return dt.replace(pattern, '$1-$2-$3');
    } else {
      return "";
    }
  }
  changeStringTimetoDate(dt) {
    if (dt != null) {
      var pattern = /(\d{4})(\d{2})(\d{2})/;
      return dt.replace(pattern, '$1/$2/$3');
    } else {
      return "";
    }
  }
  changeStringtoDateDDMMYYYY(dt) {
    if (dt != null) {
      var pattern = /(\d{4})(\d{2})(\d{2})/;
      return dt.replace(pattern, '$3/$2/$1');
    } else {
      return "";
    }
  }
  getTodayDate() {
    var d = new Date();
    var datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    return datestring;
  }

  getCurrentYear() {
    var d = new Date();
    var datestring = d.getFullYear();
    return datestring;
  }
  validateEmail(d) {
    var pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    return pattern.test(d);
  };
  validateIR(d) {
    var pattern = /IR(\d{2})(\d{2})/;
    return pattern.test(d);
  };
  validateLanguage(d) {
    var IS_UNICODE_MY = /[ဃငဆဇဈဉညတဋဌဍဎဏဒဓနဘရဝဟဠအ]်|ျ[က-အ]ါ|ျ[ါ-း]|[^\1031]စ် |\u103e|\u103f|\u1031[^\u1000-\u1021\u103b\u1040\u106a\u106b\u107e-\u1084\u108f\u1090]|\u1031$|\u100b\u1039|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]/;
    return IS_UNICODE_MY.test(d);
  };
 
  compareStringLength(str, strln) {
    if (str.length <= strln) {
      return true;
    } else {
      return false;
    }
  }
  checkNumber(num) {
    return isNaN(num);
  }
  changeArray(data, obj, num) {
    let arr = [];
    if (data instanceof Array) {
      arr = data;
      return arr;
    } else {
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
  }
  currencyFormat(p) {
    p.toFixed(2);
  }

  changeDatefromat(dt) {
    if (dt != undefined) { return this.changeStringtoDate(this.changeDatetoString(dt)).substring(0, 10); }
  }
  //money format #,###.## - ymk 20160908
  formatMoney(n) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }
  validateUrl(d) {
    var pattern = /(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/;
    return pattern.test(d);
  };

  //validate date...
  validateDate(d) {
    var datepattern = /(\[0-9]{4})?[-]?(\[0-9]{2})?[-]?(\[0-9]{2})/;
    return datepattern.test(d);
  }

  changeStringtoDateFromDB(dt){
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    return dt.replace(pattern, '$3/$2/$1');
  }
   getAge(d){
      var today :any;
       today = new Date();				
	    var birthDate = d;
      var dd :any;
      var mm :any;
	    dd = today.getDate();
       mm = today.getMonth()+1; 
	    var yyyy = today.getFullYear(); if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} 
	    today = dd+'/'+mm+'/'+yyyy;

	    var age = today.substring(6,10) - birthDate.substring(0,4);
	    var month = today.substring(3,5) - birthDate.substring(3,5);
	    var tday = parseInt(today.substring(0,2)) ;
	    var bday = parseInt(birthDate.substring(8,10));

	    if (month < 0 || (month === 0 && bday > tday ) ) {
	        age--;
	    }
	    return age;
  }
  //20170113 wtza 
  getTodayTime() {
    var d = new Date();   
    var hours =  d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var minute =(minutes < 10 ? '0' + minutes : minutes);
    var strTime = hours + ':' + minute + ' ' + ampm;
    return strTime;
    
  }

  
}