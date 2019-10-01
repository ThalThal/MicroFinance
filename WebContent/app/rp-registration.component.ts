import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpBean } from './framework/rp-bean';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { RpReferences } from './framework/rp-references';
import { ClientUtil } from './util/rp-client.util';
import { RpSIDUpdateComponent } from './rp-sidupdate.component';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
enableProdMode();
@Component({
  selector: 'rp-registration',
  template: ` 
 
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
 

   <div class="registration-container">
           <img id="profile-img" class="profile-img-card" src="image/DPlogo.png" />
           <div class="text-center">
             <h3 style="color:green"><strong> Diamond Palace Microfinance </strong></h3>
           </div>
           
           
           
<form class="form-update">
            
            
      
            
             
                
                      
            <div class="row"> <!-- First Main row End   -->
                   <div class="col-md-12">     
                          <div class="card border-success rounded">
                                      <div class="card-header p-0">
                                          <div class="bg-success text-white text-center py-2">
                                              <h3><i class="fa fa-users"></i>  Client Information System <i class="fa fa-users"></i> </h3>
                                          </div>
                                      </div>
                                      <div class="card-body p-3">
                                      
                                      
                                      
                                      
           <div class="row"> <!-- Second Main row Start   -->  
           
                <div class="col-md-5"> <!-- Main first Md5 Start  -->
                
                
                
                

                          <div class="row">
                              <div class="col-md-4">
                                  <label class="label-for-update"><strong>Center No:</strong></label>
                                </div> 
                                <div class="col-md-8">             
                                  <input type="text" class="form-control" id="centerNo" class="form-control" ngDefaultControl [(ngModel)]="_centerNo" [ngModelOptions]="{standalone: true}" placeholder="Center Number " required autofocus> 
                                </div>
                            </div>
                            
                            
                            
                          <div class="row">
                            <div class="col-md-4">
                                <label class="label-for-update"><strong>Loanee No:</strong></label>
                              </div> 
                              <div class="col-md-8">             
                                <input type="text" class="form-control" id="loaneeNo" class="form-control" ngDefaultControl [(ngModel)]="_loaneeNo" [ngModelOptions]="{standalone: true}" placeholder="Loanee Number " required autofocus> 
                              </div>
                          </div>

                            
                            
                         <div class="row">
                                <div class="col-md-4">
                                    <label class="label-for-update"> <strong> Officer Name: </strong> </label>
                                  </div> 
                                  <div class="col-md-8">             
                                    <input type="text" class="form-control" id="officeName" class="form-control" ngDefaultControl [(ngModel)]="_loanOfficerName" [ngModelOptions]="{standalone: true}" placeholder="Loan Officer Name" required autofocus> 
                                  </div>
                          </div> <br>
                          
                          
                          
                          <div class="row">
                            <div class="col-md-4">
                                <label class="label-for-update"><strong> Gender:</strong></label>
                              </div> 
                              <div class="col-md-8">             
                                  <input type="radio" value="Male" name="gender" [(ngModel)]="_gender" required> Male
                                  <input type="radio" value="Female" name="gender" [(ngModel)]="_gender" > Female
                              </div>
                          </div>  <br><br>
                          
                          
                          
                           <div class="row">
                                <div class="col-md-4">
                                  <label class="label-for-update"><strong>Date Of Birth:</strong></label>
                                </div> 
                                <div class="col-md-8">             
                                  <datetime class="datetime" for="form3" [(ngModel)]="_dob" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"  (ngModelChange)="calculateCurrentAge()"></datetime>
                                </div>
                            </div> 
                            
                            
                            
                            <div class="row">
                                   <div class="col-md-4">  
                                    <!--    <label class="label-for-update"><strong>Current Age:</strong></label>   -->                                      
                                    </div>
                                    <div class="col-md-8">              
                                        <input type="text" class="form-control" id="currentAge" class="form-control" ngDefaultControl [(ngModel)]="_currentAge" [ngModelOptions]="{standalone: true}" placeholder="Current Age " readonly autofocus> 
                                     </div>
                              </div> <br>                           
                            
                            
                            
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="label-for-update"><strong>NRC Number:</strong></label>
                                  </div> 
                                  <div class="col-md-8">             
                                    <input type="text" class="form-control" id="nrc" class="form-control" ngDefaultControl [(ngModel)]="_nrcNumber" [ngModelOptions]="{standalone: true}" placeholder="NRC Number" required autofocus> 
                                  </div>
                              </div>
                              
                              
                              
                              <div class="row">
                                  <div class="col-md-4">
                                      <label class="label-for-update"><strong>Township Name:</strong></label>
                                    </div> 
                                    <div class="col-md-8">             
                                      <input type="text" class="form-control" id="township" class="form-control" ngDefaultControl [(ngModel)]="_townshipName" [ngModelOptions]="{standalone: true}" placeholder="Township Name" required autofocus> 
                                    </div>
                                </div>



                                  <div class="row">
                                    <div class="col-md-4">
                                        <label class="label-for-update"> <strong>Village/Center</strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                        <input type="text" class="form-control" id="village" class="form-control" ngDefaultControl [(ngModel)]="_villageNameORcenterName" [ngModelOptions]="{standalone: true}" placeholder="Village Name/Center Name" required autofocus> 
                                      </div>
                                  </div>   
                                  
                                  
                                  
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Remarks:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="remarks" class="form-control" ngDefaultControl [(ngModel)]="_remarks" [ngModelOptions]="{standalone: true}" placeholder="Remarks " required autofocus> 
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Group Committees:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="group_committees" class="form-control" ngDefaultControl [(ngModel)]="_groupCommittees" [ngModelOptions]="{standalone: true}" placeholder="Group Committees " required autofocus> 
                                        </div>
                                    </div>   
                                           
                                         
                                           
                                    <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Group Dissolve Date:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <datetime class="datetime" for="form3" [(ngModel)]="_groupDissolveDate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}" required></datetime>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div class="row">
                                        <div class="col-md-4">
                                          <label class="label-for-update"><strong>Old Group:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="oldgroup" class="form-control" ngDefaultControl [(ngModel)]="_oldGroup" [ngModelOptions]="{standalone: true}" placeholder="Old Group" required autofocus> 
                                        </div>
                                    </div><br>

                        
                  </div> <!-- Main first Md5 End  --> 
                  
                  
                  
                  
                  
                  
                  <div class="col-md-2"> <!-- Middle Vertical Line -->
                     <div class="vl"></div>
                   </div>
                   
                   
                  
                    
                            
                            
            
                <div class="col-md-5"> <!-- Main Second Md5 Start  -->
                            
                            <div class="row">
                              <div class="col-md-4">
                                  <label class="label-for-update"> <strong> Group No: </strong> </label>
                                </div> 
                                <div class="col-md-8">             
                                  <input type="text" class="form-control" id="groupNo" class="form-control" ngDefaultControl [(ngModel)]="_groupNo" [ngModelOptions]="{standalone: true}" placeholder="Group Number " required autofocus> 
                                </div>
                            </div>
                            
                            
                            
                            
                             <div class="row">
                              <div class="col-md-4">
                                  <label class="label-for-update"> <strong> Collection Day: </strong></label>
                                </div> 
                                <div class="col-md-8">             
                                  <input type="text" class="form-control" id="collectionDay" class="form-control" ngDefaultControl [(ngModel)]="_collectionDay" [ngModelOptions]="{standalone: true}" placeholder="Collection Day " required autofocus> 
                                </div>
                            </div>                          
                            
                            
                            
                            
                              <div class="row">
                                  <div class="col-md-4">
                                      <label class="label-for-update"><strong>Client Name:</strong></label>
                                    </div> 
                                    <div class="col-md-8">             
                                      <input type="text" class="form-control" id="ClientName" class="form-control" ngDefaultControl [(ngModel)]="_clientName" [ngModelOptions]="{standalone: true}" placeholder="Client Name " required autofocus> 
                                    </div>
                                </div> <br>   
                                
                                
                                
                                
                               <div class="row">
                                    <div class="col-md-4">
                                        <label class="label-for-update"><strong> Husband/Father </strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                        <input type="text" class="form-control" id="Father" class="form-control" ngDefaultControl [(ngModel)]="_husbandORfatherName" [ngModelOptions]="{standalone: true}" placeholder="Husband/Father Name " required autofocus> 
                                      </div>
                               </div><br>
                               
                               
                               
                               
                               <div class="row">
                                     <div class="col-md-4">
                                        <label class="label-for-update"><strong>Joining Date:</strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                         <datetime class="datetime" for="form3" [(ngModel)]="_joiningDate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"  (ngModelChange)="calculateAge()"></datetime>
                                      </div>
                             </div>
                                     
                                                            
                              
                              
                                <div class="row">
                                      <div class="col-md-4">
                                       <!-- <label class="label-for-update"><strong> Age:</strong></label> -->
                                      </div>
                                      <div class="col-md-8">
                                        <input type="text" class="form-control" id="age" class="form-control" ngDefaultControl [(ngModel)]="_age" [ngModelOptions]="{standalone: true}" placeholder="Age " readonly autofocus> 
                                      </div> 
                                 </div> <br>                                 
                                 
                                 
                                        
                                        
                                 <div class="row">       
                                     <div class="col-md-4">
                                        <label class="label-for-update"><strong>Phone Number:</strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                        <input type="text" class="form-control" id="phNo" class="form-control" ngDefaultControl [(ngModel)]="_phNumber" [ngModelOptions]="{standalone: true}" placeholder="Phone Number" required autofocus> 
                                      </div>
                                  </div>  
                                  
                                  
                                  
                                  
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"> <strong> Ward/Village </strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="ward" class="form-control" ngDefaultControl [(ngModel)]="_wardORvillageTractName" [ngModelOptions]="{standalone: true}" placeholder="Ward/Village Tract Name" required autofocus> 
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Address:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <textarea class="form-control" rows="3" id="address" class="form-control" ngDefaultControl [(ngModel)]="_address" [ngModelOptions]="{standalone: true}" placeholder="Address " required autofocus> </textarea>
                                        </div>
                                    </div> <br>
                                    
                                    
                                    
                                    
                                  <div class="row">
                                        <div class="col-md-4">
                                            <label class="label-for-update"> <strong>Replace/Substitute:</strong></label>
                                          </div> 
                                          <div class="col-md-8">             
                                            <input type="text" class="form-control" id="replace" class="form-control" ngDefaultControl [(ngModel)]="_replaceORsubstitute" [ngModelOptions]="{standalone: true}" placeholder="Replace/Substitute" required autofocus> 
                                          </div>
                                      </div> 
                                      
                                      
                                      
                                      
                                 <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>File Uploading:</strong></label>
                                       </div> 
                                        <div class="col-md-8">             
                                          <input type="file" id="file" multiple (change)="getFileDetails($event)"  accept="application/pdf" [(ngModel)]="_uploadFile" [ngModelOptions]="{standalone: true}" required autofocus>
                                        </div>                                        
                                </div> <br>                                                                                                                                                                                                                                                            
                             <div class="text-center">
                                <input type="submit" value="Register" class="btn btn-primary" (click)="checkData()">
                              &nbsp;
                               <input type="button" value="Cancel" class="btn btn-danger" (click)="goCancel()">   
                             </div>                                       
                                                    
                 </div>  <!-- Main Second Md5 End  --> 
                 
                 
                 
                 
                          
                       
                 
                 
                 
                       
           </div> <!-- Second Main Row End  --> 
           
           
           
            
                                </div> <!-- Card Body End  --> 
                          </div> <!-- Card Border End  -->                
                      </div> <!-- Main Md12 End  -->
                </div> <!-- First Main Row End  -->       
             
     
            
 </form>
         
  </div> <!-- Registration Container End  -->
   
  
  `
})
export class RpRegistrationComponent {

  url = "url";
  _centerNo: string;
  _groupNo: string;
  _loaneeNo: string;
  _collectionDay: string;
  _loanOfficerName: string;
  _clientName: string;
  _gender: string;
  _age: number;
  _currentAge: number;
  _husbandORfatherName: string;
  _joiningDate: any;
  _nrcNumber: string;
  _townshipName: string;
  _wardORvillageTractName: string;
  _villageNameORcenterName: string;
  _address: string;
  _remarks: string;
  _groupCommittees: string;
  _replaceORsubstitute: string;
  _groupDissolveDate: any;
  _oldGroup: string;
  _dob: any;
  _name: string;
  _file: File;
  _fileName: string;
  _filePath: string;
  _phNumber: string;
  _uploadFile: File;


  check: boolean = true;
  flagsave: boolean = true;
  _excelUrl: SafeResourceUrl;
  remembercheck: boolean = true;
  _result: string;
  _deleteresult: string;
  _remember: boolean;
  subscription: Subscription;
  _rpbean: RpBean;
  apiUrl: string;
  _url: string;
  datepickerOpts: any;
  _loginload: boolean = false;
  _dates = { "sdate": null, "edate": null };
  appdate = null;
  sub: any;
  endDate = null;
  _util: ClientUtil = new ClientUtil();
  _obj = { "centerNo": null, "groupNo": null, "loaneeNo": null, "collectionDay": null, "loanOfficerName": null, "clientName": null, "gender": null, "age": 0, "currentAge": 0, "husbandORfatherName": null, "joiningDate": null, "nrcNumber": null, "townshipName": null, "wardORvillageTractName": null, "villageNameORcenterName": null, "address": null, "remarks": null, "groupCommittees": null, "replaceORsubstitute": null, "groupDissolveDate": null, "oldGroup": null, "result": null, "dob": null, "phNumber": null, "filePath": null };

  public static _objst = { "cdcno": "", "appId": "", "name": "", "qNo": "", "email": "", "tNo": "", "appDate": null, "passNo": "", "appointmentDate": "" };

  constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private sanitizer: DomSanitizer) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    this.datepickerOpts = this.ics._datepickerOpts;

    this.ics.sendBean(new RpBean());
    // this._loginload = false;
    this._dob = new Date();//todaydate
    this._joiningDate = new Date();
    if (this._dob != null || this._dob != "" || this._joiningDate != null || this._joiningDate != "") {
      this.calculateAge();
      this.calculateCurrentAge();
    }
    //  this.endDate = this._util.getDatePickerDate(this._dates.sdate);


  }
  calculateCurrentAge() {
    let timeDiff = Math.abs(Date.now() - this._dob.getTime());
    let currentage = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    this._currentAge = currentage;
    this.calculateAge();
  }
  calculateAge() {
    let timeDiff = Math.abs(this._joiningDate.getTime() - this._dob.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    console.log(age);
    this._age = age;

  }

  getFileDetails(event) {
    if (event.target.files && event.target.files.length > 0) {
      this._file = event.target.files[0];
      console.log("File " + this._file.name.trim());
      if (this._file.type != "application/pdf") {
        event.srcElement.value = null;
        this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Please select pdf file type" });
      } else {
        this._fileName = this._file.name;
      }
    }
  }
  goUpload() {
    console.log(this._fileName + " File Name")
    if (this._fileName != null && this._fileName != "") {
      let url = this.ics._apiurl + 'control/pdfupload?f=upload&fn=' + this._fileName;
      this.http.upload(url, this._file).subscribe(
        data => {
          this._fileName = "";
          console.log(JSON.stringify(data));
          console.log("FILE PATH" + data.filePath + "CODE RESULT" + data.code);
          this._filePath = data.filePath;
          this.goRegister();
          this.ics.sendBean({ "t1": "rp-alert", "t2": "info", "t3": data.code });
        },
        //error => alert(error),
        () => { }
      );
    } this.ics.sendBean({ "t1": "rp-alert", "t2": "info", "t3": "FIle Name Undefied" });
  }

  goRegister() {
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

    //  this._loginload = true;

    if (this.apiUrl == null && this.apiUrl == undefined) {
      // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
      this._loginload = true;
    }

    if (this._filePath != undefined && this._filePath != null) {
      let profile: any = { "centerNo": this._centerNo, "groupNo": this._groupNo, "loaneeNo": this._loaneeNo, "collectionDay": this._collectionDay, 
      "loanOfficerName": this._loanOfficerName, "clientName": this._clientName, "gender": this._gender, "age": this._age, "currentAge": this._currentAge, "husbandORfatherName": this._husbandORfatherName, "joiningDate": this._joiningDate, "nrcNumber": this._nrcNumber, "townshipName": this._townshipName, "wardORvillageTractName": this._wardORvillageTractName, "villageNameORcenterName": this._villageNameORcenterName, "address": this._address, 
      "remarks": this._remarks, "groupCommittees": this._groupCommittees, "replaceORsubstitute": this._replaceORsubstitute, "groupDissolveDate": this._groupDissolveDate, "oldGroup": this._oldGroup, "phNumber": this._phNumber, "dob": this._dob, "filePath": this._filePath };
      this._url = this.ics._apiurl + 'control/register';
      this.http.doPost(this._url, profile).subscribe(
        data => {

          if (this.apiUrl == null && this.apiUrl == undefined) {
            this._loginload = true;
            this.ics.sendBean({ t1: "rp-msg-off" });
          }
          if (data.result == null || data.result == "") {

            this._loginload = false;
            // this._result = ; 
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Not Successful" });
            //this.ics.sendBean({ t1: "rp-error", t3: "Invalid username and password });  
          } if (data.result != null && data.result == "Register") {
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Successful" });
            this.goCancel();
          }
        },
        error => {
          this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
        },
        () => { }
      );

    } this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "This._filePath is unfefied" });
  }
  checkData() {
    console.log("FIle Path" + this._filePath);
    if (this._centerNo == " " || this._groupNo == " " || this._loaneeNo == " " || this._collectionDay == "" || this._loanOfficerName == "" || this._clientName == "" || this._gender == "" || this._husbandORfatherName == "" || this._joiningDate == null || this._nrcNumber == "" || this._townshipName == " " || this._wardORvillageTractName == "" || this._villageNameORcenterName == "" || this._address == "" || this._remarks == "" || this._groupCommittees == "" || this._replaceORsubstitute == "" || this._groupDissolveDate == null || this._oldGroup == "" || this._dob == null || this._phNumber == "" || this._file == null) {
      this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Please Fill the " });
    } else {
      this.goUpload();
    }
  }

  goCancel() {
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
  }


}