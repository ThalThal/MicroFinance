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
var core_2 = require('@angular/core');
var rp_http_service_1 = require('./framework/rp-http.service');
var rp_intercom_service_1 = require('./framework/rp-intercom.service');
var rp_bean_1 = require('./framework/rp-bean');
var platform_browser_1 = require('@angular/platform-browser');
var rp_client_util_1 = require('./util/rp-client.util');
core_2.enableProdMode();
var RpFinanceDatUpdateComponent = (function () {
    function RpFinanceDatUpdateComponent(ics, _router, route, http, sanitizer) {
        this.ics = ics;
        this._router = _router;
        this.route = route;
        this.http = http;
        this.sanitizer = sanitizer;
        this.url = "url";
        this.check = true;
        this.flagsave = true;
        this.remembercheck = true;
        this._loginload = false;
        this._dates = { "sdate": null, "edate": null };
        this.appdate = null;
        this.endDate = null;
        this._util = new rp_client_util_1.ClientUtil();
        this._obj = { "centerNo": null, "groupNo": null, "loaneeNo": null, "collectionDay": null, "loanOfficerName": null, "clientName": null, "gender": null, "age": 0, "currentAge": 0, "husbandORfatherName": null, "joiningDate": null, "nrcNumber": null, "townshipName": null, "wardORvillageTractName": null, "villageNameORcenterName": null, "address": null, "remarks": null, "groupCommittees": null, "replaceORsubstitute": null, "groupDissolveDate": null, "oldGroup": null, "result": null, "dob": null, "phNumber": null, "filePath": null };
        this.subscription = ics.rpbean$.subscribe(function (x) { });
        this.datepickerOpts = this.ics._datepickerOpts;
        this.ics.sendBean(new rp_bean_1.RpBean());
        // this._loginload = false;
        this._dob = new Date(); //todaydate
        this._joiningDate = new Date();
        if (this._dob != null || this._dob != "" || this._joiningDate != null || this._joiningDate != "") {
            this.calculateAge();
            this.calculateCurrentAge();
        }
        //  this.endDate = this._util.getDatePickerDate(this._dates.sdate);
    }
    RpFinanceDatUpdateComponent.prototype.calculateCurrentAge = function () {
        var timeDiff = Math.abs(Date.now() - this._dob.getTime());
        var currentage = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        this._currentAge = currentage;
        this.calculateAge();
    };
    RpFinanceDatUpdateComponent.prototype.calculateAge = function () {
        var timeDiff = Math.abs(this._joiningDate.getTime() - this._dob.getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        console.log(age);
        this._age = age;
    };
    RpFinanceDatUpdateComponent.prototype.getFileDetails = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            this._file = event.target.files[0];
            console.log("File" + this._file.name);
            if (this._file.type != "application/pdf") {
                event.srcElement.value = null;
                this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Please select pdf file type" });
            }
            else {
                this._fileName = this._file.name;
            }
        }
    };
    RpFinanceDatUpdateComponent.prototype.goUpload = function () {
        var _this = this;
        console.log(" File Name " + this._fileName);
        if (this._fileName != null && this._fileName != "") {
            var url = this.ics._apiurl + 'control/pdfupload?f=upload&fn=' + this._fileName;
            this.http.upload(url, this._file).subscribe(function (data) {
                _this._fileName = "";
                console.log(JSON.stringify(data));
                console.log("FILE PATH" + data.filePath + "CODE RESULT" + data.code);
                _this._filePath = data.filePath;
                _this.goRegister();
                _this.ics.sendBean({ "t1": "rp-alert", "t2": "info", "t3": data.code });
            }, 
            //error => alert(error),
            function () { });
        }
        this.ics.sendBean({ "t1": "rp-alert", "t2": "info", "t3": "FIle Name Undefied" });
    };
    RpFinanceDatUpdateComponent.prototype.goRegister = function () {
        // this._obj.centerNo=this._centerNo;
        // this._obj.groupNo=this._groupNo;
        // this._obj.loaneeNo=this._loaneeNo;
        // this._obj.collectionDay=this._collectionDay;
        // this._obj.loanOfficerName=this._loanOfficerName;
        // this._obj.clientName=this._clientName;
        // this._obj.gender=this._gender;
        // this._obj.age=this._age;
        // this._obj.currentAge=this._currentAge;
        // this._obj.husbandORfatherName=this._husbandORfatherName;
        // this._obj.joiningDate=this._joiningDate;
        // this._obj.nrcNumber=this._nrcNumber;
        // this._obj.townshipName=this._townshipName;
        // this._obj.wardORvillageTractName=this._wardORvillageTractName;
        // this._obj.villageNameORcenterName=this._villageNameORcenterName;
        // this._obj.address=this._address;
        // this._obj.remarks=this._remarks;
        // this._obj.groupCommittees=this._groupCommittees;
        // this._obj.replaceORsubstitute=this._replaceORsubstitute;
        // this._obj.groupDissolveDate=this._groupDissolveDate;
        // this._obj.oldGroup=this._oldGroup;
        var _this = this;
        //  this._loginload = true;
        if (this.apiUrl == null && this.apiUrl == undefined) {
            // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
            this._loginload = true;
        }
        if (this._filePath != undefined && this._filePath != null) {
            var profile = { "centerNo": this._centerNo, "groupNo": this._groupNo, "loaneeNo": this._loaneeNo, "collectionDay": this._collectionDay, "loanOfficerName": this._loanOfficerName, "clientName": this._clientName, "gender": this._gender, "age": this._age, "currentAge": this._currentAge, "husbandORfatherName": this._husbandORfatherName, "joiningDate": this._joiningDate, "nrcNumber": this._nrcNumber, "townshipName": this._townshipName, "wardORvillageTractName": this._wardORvillageTractName, "villageNameORcenterName": this._villageNameORcenterName, "address": this._address, "remarks": this._remarks, "groupCommittees": this._groupCommittees, "replaceORsubstitute": this._replaceORsubstitute, "groupDissolveDate": this._groupDissolveDate, "oldGroup": this._oldGroup, "phNumber": this._phNumber, "dob": this._dob, "filePath": this._filePath };
            this._url = this.ics._apiurl + 'control/register';
            this.http.doPost(this._url, profile).subscribe(function (data) {
                if (_this.apiUrl == null && _this.apiUrl == undefined) {
                    _this._loginload = true;
                    _this.ics.sendBean({ t1: "rp-msg-off" });
                }
                if (data.result == null || data.result == "") {
                    _this._loginload = false;
                    // this._result = ; 
                    _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Not Successful" });
                }
                if (data.result != null && data.result == "Register") {
                    _this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Successful" });
                    _this.goCancel();
                }
            }, function (error) {
                _this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
            }, function () { });
        }
        this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "This._filePath is unfefied" });
    };
    RpFinanceDatUpdateComponent.prototype.checkData = function () {
        console.log("FIle Path" + this._filePath);
        if (this._centerNo == " " || this._groupNo == " " || this._loaneeNo == " " || this._collectionDay == "" || this._loanOfficerName == "" || this._clientName == "" || this._gender == "" || this._husbandORfatherName == "" || this._joiningDate == null || this._nrcNumber == "" || this._townshipName == " " || this._wardORvillageTractName == "" || this._villageNameORcenterName == "" || this._address == "" || this._remarks == "" || this._groupCommittees == "" || this._replaceORsubstitute == "" || this._groupDissolveDate == null || this._oldGroup == "" || this._dob == null || this._phNumber == "" || this._file == null) {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Please Fill the " });
        }
        else {
            this.goUpload();
        }
    };
    RpFinanceDatUpdateComponent.prototype.goCancel = function () {
        this._centerNo = "";
        this._groupNo = "";
        this._loaneeNo = "";
        this._collectionDay = "";
        this._loanOfficerName = "";
        this._clientName = "";
        this._gender = "";
        this._husbandORfatherName = "";
        this._joiningDate = new Date();
        this._nrcNumber = "";
        this._townshipName = "";
        this._wardORvillageTractName = "";
        this._villageNameORcenterName = "";
        this._address = "";
        this._remarks = "";
        this._groupCommittees = "";
        this._replaceORsubstitute = "";
        this._groupDissolveDate = null;
        this._oldGroup = "";
        this._dob = new Date();
        this._name = "";
        this._age = 0;
        this._currentAge = 0;
        this._joiningDate = new Date();
        this._file = null;
        this._fileName = "";
        this._filePath = "";
        this._phNumber = "";
        this._uploadFile = null;
    };
    RpFinanceDatUpdateComponent._objst = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "", "appointmentDate": "" };
    RpFinanceDatUpdateComponent = __decorate([
        core_1.Component({
            selector: 'rp-financedataupdate',
            template: " \n \n <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n \n\n   <div class=\"registration-container\">\n           <img id=\"profile-img\" class=\"profile-img-card\" src=\"image/DPlogo.png\" />\n           <div class=\"text-center\">\n             <h3 style=\"color:green\"><strong> Diamond Palace Microfinance </strong></h3>\n           </div>\n           \n           \n           \n<form class=\"form-update\">\n            \n            \n      \n            \n             \n                \n                      \n            <div class=\"row\"> <!-- First Main row End   -->\n                   <div class=\"col-md-12\">     \n                          <div class=\"card border-success rounded\">\n                                      <div class=\"card-header p-0\">\n                                          <div class=\"bg-success text-white text-center py-2\">\n                                              <h3><i class=\"fa fa-users\"></i>  Client Information System <i class=\"fa fa-users\"></i> </h3>\n                                          </div>\n                                      </div>\n                                      <div class=\"card-body p-3\">\n                                      \n                                      \n                                      \n                                      \n           <div class=\"row\"> <!-- Second Main row Start   -->  \n           \n                <div class=\"col-md-5\"> <!-- Main first Md5 Start  -->\n                \n                \n                \n                \n\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <label class=\"label-for-update\"><strong>Center No:</strong></label>\n                                </div> \n                                <div class=\"col-md-8\">             \n                                  <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_centerNo\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Center Number \" required autofocus> \n                                </div>\n                            </div>\n                            \n                            \n                            \n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label class=\"label-for-update\"><strong>Loanee No:</strong></label>\n                              </div> \n                              <div class=\"col-md-8\">             \n                                <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_loaneeNo\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Loanee Number \" required autofocus> \n                              </div>\n                          </div>\n\n                            \n                            \n                         <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <label class=\"label-for-update\"> <strong> Officer Name: </strong> </label>\n                                  </div> \n                                  <div class=\"col-md-8\">             \n                                    <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_loanOfficerName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Loan Officer Name\" required autofocus> \n                                  </div>\n                          </div> <br>\n                          \n                          \n                          \n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label class=\"label-for-update\"><strong> Gender:</strong></label>\n                              </div> \n                              <div class=\"col-md-8\">             \n                                  <input type=\"radio\" value=\"Male\" name=\"gender\" [(ngModel)]=\"_gender\" required> Male\n                                  <input type=\"radio\" value=\"Female\" name=\"gender\" [(ngModel)]=\"_gender\" > Female\n                              </div>\n                          </div>  <br><br>\n                          \n                          \n                          \n                           <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                  <label class=\"label-for-update\"><strong>Date Of Birth:</strong></label>\n                                </div> \n                                <div class=\"col-md-8\">             \n                                  <datetime class=\"datetime\" for=\"form3\" [(ngModel)]=\"_dob\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"  (ngModelChange)=\"calculateCurrentAge()\"></datetime>\n                                </div>\n                            </div> \n                            \n                            \n                            \n                            <div class=\"row\">\n                                   <div class=\"col-md-4\">  \n                                    <!--    <label class=\"label-for-update\"><strong>Current Age:</strong></label>   -->                                      \n                                    </div>\n                                    <div class=\"col-md-8\">              \n                                        <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_currentAge\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Current Age \" readonly autofocus> \n                                     </div>\n                              </div> <br>                           \n                            \n                            \n                            \n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <label class=\"label-for-update\"><strong>NRC Number:</strong></label>\n                                  </div> \n                                  <div class=\"col-md-8\">             \n                                    <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_nrcNumber\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"NRC Number\" required autofocus> \n                                  </div>\n                              </div>\n                              \n                              \n                              \n                              <div class=\"row\">\n                                  <div class=\"col-md-4\">\n                                      <label class=\"label-for-update\"><strong>Township Name:</strong></label>\n                                    </div> \n                                    <div class=\"col-md-8\">             \n                                      <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_townshipName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Township Name\" required autofocus> \n                                    </div>\n                                </div>\n\n\n\n                                  <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        <label class=\"label-for-update\"> <strong>Village/Center</strong></label>\n                                      </div> \n                                      <div class=\"col-md-8\">             \n                                        <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_villageNameORcenterName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Village Name/Center Name\" required autofocus> \n                                      </div>\n                                  </div>   \n                                  \n                                  \n                                  \n                                  <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"><strong>Remarks:</strong></label>\n                                        </div> \n                                        <div class=\"col-md-8\">             \n                                          <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_remarks\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Remarks \" required autofocus> \n                                        </div>\n                                    </div>\n                                    \n                                    \n                                    \n                                    <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"><strong>Group Committees:</strong></label>\n                                        </div> \n                                        <div class=\"col-md-8\">             \n                                          <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_groupCommittees\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Group Committees \" required autofocus> \n                                        </div>\n                                    </div>   \n                                           \n                                         \n                                           \n                                    <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"><strong>Group Dissolve Date:</strong></label>\n                                        </div> \n                                        <div class=\"col-md-8\">             \n                                          <datetime class=\"datetime\" for=\"form3\" [(ngModel)]=\"_groupDissolveDate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\" required></datetime>\n                                        </div>\n                                    </div>\n                                    \n                                    \n                                    \n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"><strong>Old Group:</strong></label>\n                                        </div> \n                                        <div class=\"col-md-8\">             \n                                          <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_oldGroup\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Old Group\" required autofocus> \n                                        </div>\n                                    </div><br>\n\n                        \n                  </div> <!-- Main first Md5 End  --> \n                  \n                  \n                  \n                  \n                  \n                  \n                  <div class=\"col-md-2\"> <!-- Middle Vertical Line -->\n                     <div class=\"vl\"></div>\n                   </div>\n                   \n                   \n                  \n                    \n                            \n                            \n            \n                <div class=\"col-md-5\"> <!-- Main Second Md5 Start  -->\n                            \n                            <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <label class=\"label-for-update\"> <strong> Group No: </strong> </label>\n                                </div> \n                                <div class=\"col-md-8\">             \n                                  <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_groupNo\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Group Number \" required autofocus> \n                                </div>\n                            </div>\n                            \n                            \n                            \n                            \n                             <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <label class=\"label-for-update\"> <strong> Collection Day: </strong></label>\n                                </div> \n                                <div class=\"col-md-8\">             \n                                  <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_collectionDay\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Collection Day \" required autofocus> \n                                </div>\n                            </div>                          \n                            \n                            \n                            \n                            \n                              <div class=\"row\">\n                                  <div class=\"col-md-4\">\n                                      <label class=\"label-for-update\"><strong>Client Name:</strong></label>\n                                    </div> \n                                    <div class=\"col-md-8\">             \n                                      <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_clientName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Client Name \" required autofocus> \n                                    </div>\n                                </div> <br>   \n                                \n                                \n                                \n                                \n                               <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        <label class=\"label-for-update\"><strong> Husband/Father </strong></label>\n                                      </div> \n                                      <div class=\"col-md-8\">             \n                                        <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_husbandORfatherName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Husband/Father Name \" required autofocus> \n                                      </div>\n                               </div><br>\n                               \n                               \n                               \n                               \n                               <div class=\"row\">\n                                     <div class=\"col-md-4\">\n                                        <label class=\"label-for-update\"><strong>Joining Date:</strong></label>\n                                      </div> \n                                      <div class=\"col-md-8\">             \n                                         <datetime class=\"datetime\" for=\"form3\" [(ngModel)]=\"_joiningDate\" [datepicker]=\"datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"  (ngModelChange)=\"calculateAge()\"></datetime>\n                                      </div>\n                             </div>\n                                     \n                                                            \n                              \n                              \n                                <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                       <!-- <label class=\"label-for-update\"><strong> Age:</strong></label> -->\n                                      </div>\n                                      <div class=\"col-md-8\">\n                                        <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_age\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Age \" readonly autofocus> \n                                      </div> \n                                 </div> <br>                                 \n                                 \n                                 \n                                        \n                                        \n                                 <div class=\"row\">       \n                                     <div class=\"col-md-4\">\n                                        <label class=\"label-for-update\"><strong>Phone Number:</strong></label>\n                                      </div> \n                                      <div class=\"col-md-8\">             \n                                        <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_phNumber\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Phone Number\" required autofocus> \n                                      </div>\n                                  </div>  \n                                  \n                                  \n                                  \n                                  \n                                  <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"> <strong> Ward/Village </strong></label>\n                                        </div> \n                                        <div class=\"col-md-8\">             \n                                          <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_wardORvillageTractName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Ward/Village Tract Name\" required autofocus> \n                                        </div>\n                                    </div>\n                                    \n                                    \n                                    \n                                    \n                                  <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"><strong>Address:</strong></label>\n                                        </div> \n                                        <div class=\"col-md-8\">             \n                                          <textarea class=\"form-control\" rows=\"3\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_address\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Address \" required autofocus> </textarea>\n                                        </div>\n                                    </div> <br>\n                                    \n                                    \n                                    \n                                    \n                                  <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <label class=\"label-for-update\"> <strong>Replace/Substitute:</strong></label>\n                                          </div> \n                                          <div class=\"col-md-8\">             \n                                            <input type=\"text\" class=\"form-control\" id=\"appId\" class=\"form-control\" ngDefaultControl [(ngModel)]=\"_replaceORsubstitute\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Replace/Substitute\" required autofocus> \n                                          </div>\n                                      </div> \n                                      \n                                      \n                                      \n                                      \n                                 <div class=\"row\">\n                                      <div class=\"col-md-4\">\n                                          <label class=\"label-for-update\"><strong>File Uploading:</strong></label>\n                                       </div> \n                                        <div class=\"col-md-8\">             \n                                          <input type=\"file\" id=\"file\" multiple (change)=\"getFileDetails($event)\"  accept=\"application/pdf\" [(ngModel)]=\"_uploadFile\" [ngModelOptions]=\"{standalone: true}\" required autofocus>\n                                        </div>                                        \n                                </div> <br>                                                                                                                                                                                                                                                            \n                             <div class=\"text-center\">\n                                <input type=\"submit\" value=\"Register\" class=\"btn btn-primary\" (click)=\"checkData()\">\n                              &nbsp;\n                               <input type=\"button\" value=\"Cancel\" class=\"btn btn-danger\" (click)=\"goCancel()\">   \n                             </div>                                       \n                                                    \n                 </div>  <!-- Main Second Md5 End  --> \n                 \n                 \n                 \n                 \n                          \n                       \n                 \n                 \n                 \n                       \n           </div> <!-- Second Main Row End  --> \n           \n           \n           \n            \n                                </div> <!-- Card Body End  --> \n                          </div> <!-- Card Border End  -->                \n                      </div> <!-- Main Md12 End  -->\n                </div> <!-- First Main Row End  -->       \n             \n     \n            \n </form>\n         \n  </div> <!-- Registration Container End  -->\n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, platform_browser_1.DomSanitizer])
    ], RpFinanceDatUpdateComponent);
    return RpFinanceDatUpdateComponent;
}());
exports.RpFinanceDatUpdateComponent = RpFinanceDatUpdateComponent;
//# sourceMappingURL=re-financedataupdate.component.js.map