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
  selector: 'rp-importexcel',
  template: ` 
 
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
 

   <div class="list-container">
           <img id="profile-img" class="profile-img-card" src="image/DPlogo.png" />
           <div class="text-center">
             <h3 style="color:green"><strong> Diamond Palace Microfinance </strong></h3>
           </div>
           
           
           
<form class="form-update">     
          
            <div class="row"> <!-- First Main row Start   -->
                   <div class="col-md-12"> <!-- First Main md12 Start   -->    
                          <div class="card border-success rounded"> 
                                      <div class="card-header p-0">
                                          <div class="bg-success text-white text-center py-2">
                                              <h3><i class="fa fa-upload"></i>  Import Client Excel  </h3>
                                          </div>
                                      </div>
                                     
                                     
                          <!--  <div class="card container"> Card Container Start  -->   
                                        <div class="row"> <!-- Second Main Row Start -->
                                        
                                               <div class="col-md-1">  
                                               </div>
                                        
                                              <div class="col-md-3 mt-5">
                                              <img id="excel" class="excel" src="image/excel.jpg" />
                                              </div> <!-- Md3 End  -->
                                              
                                              <div class="col-md-2 mt-5">                                              
                                                   <div class="col-sm-5 mt-5"> </div>                                         
                                                 <img id="arrow" class="arrow" src="image/arrow2.gif" width="100px" height="100px" />
                                              </div> <!-- Md2 End  -->
                                              
                                              <div class="col-md-6">
                                                 <div class="card container"> <!-- Card Container Start  --> 
                                                    <div class="text-center">  
                                                      <div class="panel-body">
                  

                                                                             <div class="panel panel-info">
                                                                               <div class="panel-heading" hight:12px><h5><strong>Please Choose the Xlsx File that you want to upload.</strong></h5></div> 
                                                                                <div class="panel-body">
                                                                                
                                                                                    <form style="margin-top: 15px;padding: 20px;"  class="form-horizontal">                                                                                   
                                                            
                                                                                                <div class="row">
                                                                                                        Import File:&nbsp; &nbsp;                                                                                      
                                                                                                        <input type="file" align="center" name="import_file"/> 
                                                                                                </div>
                                                                                                
                                                                                              <input type="submit" value="Import CSV or Excel File" class="btn btn-success btn-sm mt-5" > 
                                                                                      </form>
                                                                                        
                                                                           
                                                               
                                                                                   </div>
                                                                                 </div>
                                                                               </div>
                                                    
                                                    </div>
                                                  </div> <!-- Card Container End  --> 
                                                    
                                               <!--      <button class="btn btn-primary"><i class="fa fa-upload"></i>&nbsp;&nbsp;Import CSV or Excel File</button> -->
                                                   
                                                    
                                              </div> <!-- Md6 End  -->
                                          
                                    </div> <!-- Second Main Row End -->  
                          <!--   </div> Card Container End  -->                                     
                          </div> <!-- Card Border End  -->         
                       </div> <!-- Main Md12 End  -->
                </div> <!-- First Main Row End  -->       
            
             
             
        
             
 </form>
         
  </div> <!-- List Container End  -->
   
  
  `
})
export class RpImportExcelComponent {
   
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
  _obj={"centerNo":"","groupNo":"","loaneeNo":"","collectionDay":"","loanOfficerName":"","clientName":"","gender":"","age":0,"currentAge":0,"husbandORfatherName":"","joiningDate":null,"nrcNumber":"","townshipName":"","wardORvillageTractName":"","villageNameORcenterName":"","address":"","remarks":"","groupCommittees":"","replaceORsubstitute":"","groupDissolveDate":null,"oldGroup":""};
  
  public static  _objst={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":"","appointmentDate":""};
  
  constructor(private ics: RpIntercomService, private _router: Router,private route: ActivatedRoute, private http: RpHttpService, private sanitizer: DomSanitizer) {
    this.subscription = ics.rpbean$.subscribe(x => { });  
  this.datepickerOpts = this.ics._datepickerOpts;
 
    this.ics.sendBean(new RpBean());  
    // this._loginload = false;
      this._dob = new Date();//todaydate
     
    //  this.endDate = this._util.getDatePickerDate(this._dates.sdate);
     
    
  }
  calculateByCustomDate(){
  let timeDiff = Math.abs(Date.now() - this._dob.getTime());
let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
this._age=age;
this._currentAge=age;
 
}
  getFileDetails (event) {
     let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
     console.log ( reader );
    }
    for (var i = 0; i < event.target.files.length; i++) { 
       var type = event.target.files[i].type;
       if( type == "application/pdf"){
      var name = event.target.files[i].name;  
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      
      this._name=name;
      console.log ('Name: ' + name + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");
       }else{
         console.log("Error");
       }
    }
  }
goRegister(){
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
   
    this._url = this.ics._apiurl + 'control/register';
     let profile: any = {"centerNo":this._centerNo,"groupNo":this._groupNo,"loaneeNo":this._loaneeNo,"collectionDay":this._collectionDay,"loanOfficerName":this._loanOfficerName,"clientName":this._clientName,"gender":this._gender,"age":this._age,"currentAge":this._currentAge,"husbandORfatherName":this._husbandORfatherName,"joiningDate":this._joiningDate,"nrcNumber":this._nrcNumber,"townshipName":this._townshipName,"wardORvillageTractName":this._wardORvillageTractName,"villageNameORcenterName":this._villageNameORcenterName,"address":this._address,"remarks":this._remarks,"groupCommittees":this._groupCommittees,"replaceORsubstitute":this._replaceORsubstitute,"groupDissolveDate":this._groupDissolveDate,"oldGroup":this._oldGroup };
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
        }
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 
}
  goPost(cdcno) {
    
   this._loginload = true;
   if (this.apiUrl == null && this.apiUrl == undefined) {
     // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
     this._loginload = true;
    }
   
    this._url = this.ics._apiurl + 'control/updatesearch';   
    let profile: any = {"cdcno": cdcno };
    this.http.doPost( this._url, profile).subscribe(
      data => {
           
        if (this.apiUrl == null && this.apiUrl == undefined) {
          this._loginload = true;
          this.ics.sendBean({ t1: "rp-msg-off" });
        }
       
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 
  }
  
  
}