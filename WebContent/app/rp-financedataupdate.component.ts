import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
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
  selector: 'rp-financedataupdate',
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
                                  <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_centerNo" [ngModelOptions]="{standalone: true}" placeholder="Center Number " required autofocus> 
                                </div>
                            </div>
                            
                            
                            
                          <div class="row">
                            <div class="col-md-4">
                                <label class="label-for-update"><strong>Loanee No:</strong></label>
                              </div> 
                              <div class="col-md-8">             
                                <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_loaneeNo" [ngModelOptions]="{standalone: true}" placeholder="Loanee Number " required autofocus> 
                              </div>
                          </div>

                            
                            
                         <div class="row">
                                <div class="col-md-4">
                                    <label class="label-for-update"> <strong> Officer Name: </strong> </label>
                                  </div> 
                                  <div class="col-md-8">             
                                    <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_loanOfficerName" [ngModelOptions]="{standalone: true}" placeholder="Loan Officer Name" required autofocus> 
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
                                  <datetime class="datetime" for="form3" [(ngModel)]="_dob" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"  ></datetime><!-- (ngModelChange)="calculateCurrentAge()"-->
                                </div>
                            </div> 
                            
                            
                            
                            <div class="row">
                                   <div class="col-md-4">  
                                    <!--    <label class="label-for-update"><strong>Current Age:</strong></label>   -->                                      
                                    </div>
                                    <div class="col-md-8">              
                                        <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_currentAge" [ngModelOptions]="{standalone: true}" placeholder="Current Age " readonly autofocus> 
                                     </div>
                              </div> <br>                           
                            
                            
                            
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="label-for-update"><strong>NRC Number:</strong></label>
                                  </div> 
                                  <div class="col-md-8">             
                                    <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_nrcNumber" [ngModelOptions]="{standalone: true}" placeholder="NRC Number" required autofocus> 
                                  </div>
                              </div>
                              
                              
                              
                              <div class="row">
                                  <div class="col-md-4">
                                      <label class="label-for-update"><strong>Township Name:</strong></label>
                                    </div> 
                                    <div class="col-md-8">             
                                      <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_townshipName" [ngModelOptions]="{standalone: true}" placeholder="Township Name" required autofocus> 
                                    </div>
                                </div>



                                  <div class="row">
                                    <div class="col-md-4">
                                        <label class="label-for-update"> <strong>Village/Center</strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                        <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_villageNameORcenterName" [ngModelOptions]="{standalone: true}" placeholder="Village Name/Center Name" required autofocus> 
                                      </div>
                                  </div>   
                                  
                                  
                                  
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Remarks:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_remarks" [ngModelOptions]="{standalone: true}" placeholder="Remarks " required autofocus> 
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Group Committees:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_groupCommittees" [ngModelOptions]="{standalone: true}" placeholder="Group Committees " required autofocus> 
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
                                          <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_oldGroup" [ngModelOptions]="{standalone: true}" placeholder="Old Group" required autofocus> 
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
                                  <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_groupNo" [ngModelOptions]="{standalone: true}" placeholder="Group Number " required autofocus> 
                                </div>
                            </div>
                            
                            
                            
                            
                             <div class="row">
                              <div class="col-md-4">
                                  <label class="label-for-update"> <strong> Collection Day: </strong></label>
                                </div> 
                                <div class="col-md-8">             
                                  <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_collectionDay" [ngModelOptions]="{standalone: true}" placeholder="Collection Day " required autofocus> 
                                </div>
                            </div>                          
                            
                            
                            
                            
                              <div class="row">
                                  <div class="col-md-4">
                                      <label class="label-for-update"><strong>Client Name:</strong></label>
                                    </div> 
                                    <div class="col-md-8">             
                                      <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_clientName" [ngModelOptions]="{standalone: true}" placeholder="Client Name " required autofocus> 
                                    </div>
                                </div> <br>   
                                
                                
                                
                                
                               <div class="row">
                                    <div class="col-md-4">
                                        <label class="label-for-update"><strong> Husband/Father </strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                        <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_husbandORfatherName" [ngModelOptions]="{standalone: true}" placeholder="Husband/Father Name " required autofocus> 
                                      </div>
                               </div><br>
                               
                               
                               
                               
                               <div class="row">
                                     <div class="col-md-4">
                                        <label class="label-for-update"><strong>Joining Date:</strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                         <datetime class="datetime" for="form3" [(ngModel)]="_joiningDate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"  ></datetime><!--(ngModelChange)="calculateAge()" -->
                                      </div>
                             </div>
                                     
                                                            
                              
                              
                                <div class="row">
                                      <div class="col-md-4">
                                       <!-- <label class="label-for-update"><strong> Age:</strong></label> -->
                                      </div>
                                      <div class="col-md-8">
                                        <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_age" [ngModelOptions]="{standalone: true}" placeholder="Age " readonly autofocus> 
                                      </div> 
                                 </div> <br>                                 
                                 
                                 
                                        
                                        
                                 <div class="row">       
                                     <div class="col-md-4">
                                        <label class="label-for-update"><strong>Phone Number:</strong></label>
                                      </div> 
                                      <div class="col-md-8">             
                                        <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_phNumber" [ngModelOptions]="{standalone: true}" placeholder="Phone Number" required autofocus> 
                                      </div>
                                  </div>  
                                  
                                  
                                  
                                  
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"> <strong> Ward/Village </strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_wardORvillageTractName" [ngModelOptions]="{standalone: true}" placeholder="Ward/Village Tract Name" required autofocus> 
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>Address:</strong></label>
                                        </div> 
                                        <div class="col-md-8">             
                                          <textarea class="form-control" rows="3" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_address" [ngModelOptions]="{standalone: true}" placeholder="Address " required autofocus> </textarea>
                                        </div>
                                    </div> <br>
                                    
                                    
                                    
                                    
                                  <div class="row">
                                        <div class="col-md-4">
                                            <label class="label-for-update"> <strong>Replace/Substitute:</strong></label>
                                          </div> 
                                          <div class="col-md-8">             
                                            <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_replaceORsubstitute" [ngModelOptions]="{standalone: true}" placeholder="Replace/Substitute" required autofocus> 
                                          </div>
                                      </div> 
                                      
                                      
                                        
                                  <div class="row" if>
                                        <div class="col-md-4">
                                            <label class="label-for-update"> <strong>Replace/Substitute:</strong></label>
                                          </div> 
                                          <div class="col-md-8">             
                                            <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_replaceORsubstitute" [ngModelOptions]="{standalone: true}" placeholder="Replace/Substitute" required autofocus> 
                                          </div>
                                      </div>    
                                      
                                 <div class="row">
                                      <div class="col-md-4">
                                          <label class="label-for-update"><strong>File Uploading:</strong></label>
                                       </div> 
                                        <div class="col-md-8">             
                                          <input type="file" id="file" (change)="getFileDetails($event)"  accept="application/pdf" [(ngModel)]="_uploadFile" [ngModelOptions]="{standalone: true}" required autofocus>
                                        </div>                                        
                                </div> <br>                                                                                                                                                                                                                                                            
                             <div class="text-center">
                                <input type="submit" value="Update" class="btn btn-primary" (click)="checkData()">
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
export class RpFinanceDataUpdateComponent {
   
  url = "url";
  _centerNo: string;
  _groupNo: string;
  _loaneeNo: string;
  _collectionDay: string;
  _loanOfficerName: string;
  _clientName: string ;
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
  _file: any;
  _fileName: string;
  _filePath: string;
  _phNumber: string;
  _uploadFile: any;
  _id: number;
 
  check: boolean=true;
  flagsave: boolean=true;
 _excelUrl: SafeResourceUrl;
  remembercheck: boolean = true;
  _result: string;
  _deleteresult: string;
  _remember: boolean;
  subscription: Subscription;
  _rpbean: RpBean;
  apiUrl: string;
  _url : string;
  datepickerOpts: any;
  _loginload: boolean = false;
   _dates = { "sdate": null, "edate": null };
    appdate = null;
    sub: any;
    endDate = null;
    _util: ClientUtil = new ClientUtil();
  _obj= {"centerNo":null,"groupNo":null,"loaneeNo":null,"collectionDay":null,"loanOfficerName":null,"clientName":null,"gender":null,"age":0,"currentAge":0,"husbandORfatherName":null,"joiningDate":null,"nrcNumber":null,"townshipName":null,"wardORvillageTractName":null,"villageNameORcenterName":null,"address":null,"remarks":null,"groupCommittees":null,"replaceORsubstitute":null,"groupDissolveDate":null,"oldGroup":null,"result":null,"dob":null,"phNumber":null,"filePath":null};
  
  public static  _objst={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":"","appointmentDate":""};
  
  constructor(private ics: RpIntercomService, private _router: Router,private route: ActivatedRoute, private http: RpHttpService, private sanitizer: DomSanitizer) {
    this.subscription = ics.rpbean$.subscribe(x => { });  
  this.datepickerOpts = this.ics._datepickerOpts;
 console.log(this.ics._apiurl);
   this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id != null && id != 0 ) {
                console.log(params['id']);
                this._id= id;  
                console.log(this._id);            
                this.checkForDataUpdate(this._id);
            }
        });
  }
  
//   calculateCurrentAge(){
//   let timeDiff = Math.abs(Date.now() - this._dob.getTime());
// let currentage = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
// this._currentAge=currentage;
//  this.calculateAge();
// }
//  calculateAge(){
//   let timeDiff = Math.abs(this._joiningDate.getTime()-this._dob.getTime());
// let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
// console.log(age);
// this._age=age;
 
// }
 checkForDataUpdate(id){
   if(id != 0 && id != undefined){
      if (this.apiUrl == null && this.apiUrl == undefined) {
      let url = this.ics._apiurl + 'control/checkForDataUpdate';
      let profile = {"id" : id};
      console.log("Ok");
      this.http.doPost( this._url, profile).subscribe(
      data => {     
        console.log("DataUpdateList"+data);
     
           console.log("DataUpdateList"+data);
   this._centerNo=data.centerNo;
   this._groupNo=data.groupNo;
   this._loaneeNo=data.loaneeNo;
   this._collectionDay=data.collectionDay;
  this._loanOfficerName=data.loanOfficerName;
   this._clientName=data.clientName;
   this._gender=data.gender;
   this._husbandORfatherName=data.husbandORfatherName;
   this._joiningDate=this._util.setDatePickerDateWithDat(data.joinningDate);
   this._nrcNumber=data.nrcNumber;
   this._townshipName=data.townshipName;
   this._wardORvillageTractName=data.wardORvillageTractName;
   this._villageNameORcenterName=data.villageNameORcenterName;
   this._address=data.address;
   this._remarks=data.remarks;
   this._groupCommittees=data.groupCommittees;
   this._replaceORsubstitute=data.replaceORsubstitute;
   this._groupDissolveDate=this._util.setDatePickerDateWithDat(data.groupDissolveDate);
   this._oldGroup=data.oldGroup;
   this._dob=this._util.setDatePickerDateWithDat(data.dob);
   this._age=data.age;
   this._currentAge=data.currentAge;
   this._joiningDate=this._util.setDatePickerDateWithDat(data.joiningDate);
   this._file=null;
   this._fileName="";
   this._filePath="";
   this._phNumber=data.phNumber;
   this._uploadFile=data.filePath;  
 this.checkFilePath(data.filePath); 
         
                },
                error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
                () => {}
            );     
     }
 }
  else{this.ics.sendBean({"t1" : "rp-alert", "t2": "danger", "t3": "Please select pdf file type"});}
 }
   getFileDetails (event) {
    if(event.target.files && event.target.files.length > 0) {
      this._file = event.target.files[0];
      console.log("File" + JSON.stringify(this._file.name));
      if(this._file.type != "application/pdf"){
      event.srcElement.value = null;
       this.ics.sendBean({"t1" : "rp-alert", "t2": "danger", "t3": "Please select pdf file type"});
      }else{
		  this._fileName=this._file.name;
      console.log("Upload FILE"+this._uploadFile);
    }
  }
   }
   goUpload(){
     console.log(" File Name " + this._fileName);
    if(this._fileName != null && this._fileName!= ""){
            let url = this.ics._apiurl + 'control/pdfupload?f=upload&fn=' + this._fileName ;
            this.http.upload(url, this._file).subscribe(
                data => {
                  this._fileName="";
                  console.log(JSON.stringify(data));
                  console.log("FILE PATH"+data.filePath+"CODE RESULT"+data.code);
                   this._filePath = data.filePath;
                   this.goRegister();
                   this.ics.sendBean({"t1" : "rp-alert", "t2": "info", "t3": data.code});
                },
                //error => alert(error),
                () => {}
            );     
     }this.ics.sendBean({"t1" : "rp-alert", "t2": "info", "t3": "FIle Name Undefied"});
   } 

 
 checkFilePath(fpath){
   
  //  if(fpath.lastIndexOf("/") != -1){
  //    fpath = fpath.slice(0,fpath.indexOf("/")-1) + fpath.slice(fpath.indexOf("/"));
  //    console.log("Before Complete Editing"+ fpath);
     
  //  }
  //  while(fpath.indexOf("/") != -1){
  //    console.log("After Editing"+fpath.replace(/\//, "\\"));
  //    fpath= fpath.replace(/\//, "\\");
  //  }
  //  if(fpath.indexOf("/") != -1){
    
  //  this._uploadFile=fpath;
  //   console.log(this._uploadFile);
  //  }
  //  else{
  //     this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "FIle Path Not Successful"}); 
  //  }
   if(fpath.lastIndexOf("/") != -1){
      this._fileName =  fpath.slice(fpath.lastIndexOf("/")+1);
     console.log(this._fileName);
     
   }
 }
goRegister(){
 
   if (this.apiUrl == null && this.apiUrl == undefined) {
     // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
     this._loginload = true;
    }
   
      if(this._filePath != undefined && this._filePath != null ){
     let profile: any = {"centerNo":this._centerNo,"groupNo":this._groupNo,"loaneeNo":this._loaneeNo,"collectionDay":this._collectionDay,"loanOfficerName":this._loanOfficerName,"clientName":this._clientName,"gender":this._gender,"age":this._age,"currentAge":this._currentAge,"husbandORfatherName":this._husbandORfatherName,"joiningDate":this._joiningDate,"nrcNumber":this._nrcNumber,"townshipName":this._townshipName,"wardORvillageTractName":this._wardORvillageTractName,"villageNameORcenterName":this._villageNameORcenterName,"address":this._address,"remarks":this._remarks,"groupCommittees":this._groupCommittees,"replaceORsubstitute":this._replaceORsubstitute,"groupDissolveDate":this._groupDissolveDate,"oldGroup":this._oldGroup,"phNumber": this._phNumber,"dob": this._dob ,"filePath": this._filePath};
    this._url = this.ics._apiurl + 'control/register';
    this.http.doPost( this._url, profile).subscribe(
      data => {
           
        if (this.apiUrl == null && this.apiUrl == undefined) {
          this._loginload = true;
          this.ics.sendBean({ t1: "rp-msg-off" });
        }
         if (data.result == null || data.result == "") {
           
         this._loginload = false;
          // this._result = ; 
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Not Successful"}); 
           //this.ics.sendBean({ t1: "rp-error", t3: "Invalid username and password });  
        } if (data.result != null && data.result == "Register") {
           this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Registration Successful"}); 
           this.goCancel();
        }
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 

 }this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "This._filePath is unfefied"}); 
}
checkData(){
  console.log("FIle Path" + this._filePath);
   if(this._centerNo ==" " || this._groupNo ==" " || this._loaneeNo ==" " || this._collectionDay =="" || this._loanOfficerName =="" || this._clientName =="" || this._gender =="" || this._husbandORfatherName =="" || this._joiningDate == null || this._nrcNumber =="" || this._townshipName ==" " || this._wardORvillageTractName =="" || this._villageNameORcenterName =="" || this._address =="" ||    this._remarks =="" || this._groupCommittees =="" || this._replaceORsubstitute=="" || this._groupDissolveDate==null || this._oldGroup=="" || this._dob == null ||   this._phNumber=="" || this._file== null){
     this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Please Fill the "}); 
   }else{
     this.goUpload();
   }
}
  
  goCancel(){
   this._centerNo="";
   this._groupNo="";
   this._loaneeNo="";
   this._collectionDay="";
  this._loanOfficerName="";
   this._clientName="";
   this._gender="";
   this._husbandORfatherName="";
   this._joiningDate=new Date();
   this._nrcNumber="";
   this._townshipName="";
   this._wardORvillageTractName="";
   this._villageNameORcenterName="";
   this._address="";
   this._remarks="";
   this._groupCommittees="";
   this._replaceORsubstitute="";
   this._groupDissolveDate=null;
   this._oldGroup="";
   this._dob=new Date();
   this._name="";
   this._age=0;
   this._currentAge=0;
   this._joiningDate=new Date();
   this._file=null;
   this._fileName="";
   this._filePath="";
   this._phNumber="";
   this._uploadFile=null;
    }
  
   
}