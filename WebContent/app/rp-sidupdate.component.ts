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
enableProdMode(); 
@Component({
  selector: 'rp-sidupdate',
  template: ` 
 
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
 


 <nav class="navbar navbar-fluid">
  <div class="nav-container">
    <div class="navbar-header">
      <div class="navbar-brand" (click)="goBack()">
        SID Data Checking System
      </div>
    </div>  
     
    <ul class="nav navbar-nav navbar-right">  
      
      <div (click)="gologout()"  class="logout"><span class="fas fa-sign-out-alt"  aria-hidden="true"></span> Logout</div>    
    </ul>
  </div>
</nav>



      <!-- <div class="container">-->
        <div class="card update-container">
           <img id="profile-img" class="profile-img-card" src="image/sid.jpg" />
           <div class="text-center">
             <h5>SID Data Updating System</h5>
           </div>
            <form class="form-update">
             <div class="row">
              <div class="col-md-6">
                <label ngDefaultControl [(ngModel)]="_name" [ngModelOptions]="{standalone: true}">NAME:{{_name}}</label>
              </div>
              <div class="col-md-6">
                <label  ngDefaultControl [(ngModel)]="_cdcno" [ngModelOptions]="{standalone: true}">CDC_NO:{{_cdcno}}</label>
              </div>
             </div>
             
              <div class="row">
               <div class="col-md-4">
                  <label class="label-for-update">Phone No:</label>
                </div> 
                <div class="col-md-8">             
                  <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_pNo" [ngModelOptions]="{standalone: true}" placeholder="Application ID " required autofocus> 
                </div>
             </div>
              <div class="row">
               <div class="col-md-4">
                  <label class="label-for-update">Email:</label>
                </div> 
                <div class="col-md-8">             
                  <input type="text" class="form-control" id="appId" class="form-control" ngDefaultControl [(ngModel)]="_email" [ngModelOptions]="{standalone: true}" placeholder="Email " required autofocus> 
                </div>
             </div>
              <div class="row">
               <div class="col-md-4">
                  <label class="label-for-update">Appointment Date:</label>
                </div> 
                <div class="col-md-8">             
                   <datetime class="datetime" for="form3" [(ngModel)]="_dates.sdate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"></datetime>
                </div>
             </div>
               <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" (click)="goUpdate()">                  
                <span>
                  <i class="fa fa-edit" aria-hidden="true" ></i> 
                   &nbsp; Update
                </span>
                    <span *ngIf="_loginload" style="position: absolute;margin-top: -2px;">
                      <div class="ld ld-pie ld-spin-fast" style="font-size:1.5em"></div>
                    </span>
               </button>                 
            </form>
            
            <button class="btn btn-lg btn-primary btn-block btn-signin"  (click)="goBack()">
               <span>                
                 <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                  &nbsp; Back
                </span>
              </button>
            
         
        </div>
   
  
  `
})
export class RpSIDUpdateComponent {
    _role: any;
  _name:string;
  _cdcno: string;
  _appId: string;
  _qNo: string;
  _pNo: string;
  _email: string;
  url: string = "url";
  t1: string = "t1";
  _sort = "desc";
    _type = "0";
    datelabel: string;
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
  _obj={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":"","appointmentDate":""};
  
  public static  _objst={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":"","appointmentDate":""};
  
  constructor(private ics: RpIntercomService, private _router: Router,private route: ActivatedRoute, private http: RpHttpService, private sanitizer: DomSanitizer) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    this._obj = RpSIDUpdateComponent._objst;
   this.checkLogin();
    //this.checkCookie();
    // if(this.ics._sidprofile.role == 0 ){
    //   this._router.navigate(['/SIDLogin']);
    // }
  this.datepickerOpts = this.ics._datepickerOpts;
     this._dates.sdate = new Date();//todaydate   
    this.ics.sendBean(new RpBean());  
    // this._loginload = false;
     
     if(this.ics._sidprofile.role == 0 ){
      this._router.navigate(['/SIDLogin']);
    }else{
      this._role=this.ics._sidprofile.role;
    }
    //  this._dates.edate = new Date();//todaydate
     
    //  this.endDate = this._util.getDatePickerDate(this._dates.sdate);
      this.sub = this.route.params.subscribe(params => {
            let cdcno = params['cdcno'];
            if (cdcno != null && cdcno != "" ) {
                console.log(params['cdcno']);


                this._obj.cdcno = params['cdcno'];
                
                this.goPost(this._obj.cdcno);
               // this._newregisterobj.usersyskey = params['key'];
               // this._newregisterobj.t11 = params['brand'];


            }
        });
    
  }
   gologout(){
    this._cdcno ="";
    RpSIDUpdateComponent._objst = {"cdcno":"","appId":"","name":"","qNo":"","appointmentDate":"","email":"","tNo":"","appDate":null,"passNo":""};
   
    this._router.navigate(['/SIDLogin']);
  }
 goBack()
 {
    this._router.navigate(['/SID']);
 }
  checkLogin() {
    if(this.ics._sidprofile.check==false || this.ics._sidprofile.username== "" || this.ics._sidprofile.role != 2  )
      {
        this._router.navigate(['/SIDLogin']);
      }
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
        if(data != "")
        {
          this._loginload = false;
          this._obj=data;
          this._name=this._obj.name;
          this._cdcno=this._obj.cdcno;
          this._appId=this._obj.appId;
          this._qNo=this._obj.qNo;
          this._pNo=this._obj.tNo;
          this._email=this._obj.email;
         this._dates.sdate= this._util.setDatePickerDateNew(this._obj.appointmentDate);
           
         console.log("Start Date"+this._obj.appointmentDate + " " +this._util.changeDatetoStringYMD(this._obj.appointmentDate));
       // console.log(data);  
        }
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 
  }
  goUpdate() {
    this._url = this.ics._apiurl + 'control/updateData';
   this.appdate=this._util.getDatePickerDate(this._dates.sdate);
    let profile: any = {"username": this.ics._sidprofile.username, "cdcno": this._cdcno,"tNo": this._pNo,"email":this._email,"appDate":this._dates.sdate,  "commandCenter": this._remember };
    this.http.doPost( this._url, profile).subscribe(
      data => {  
        console.log(data.role);
        if (this.apiUrl == null && this.apiUrl == undefined) {
          this.ics.sendBean({ t1: "rp-msg-off" });
        }
        if (data.commandCenter == true ) {      
          this._result = "Data have been updated";
         this.flagsave=false; 
         //this.goPost(this._cdcno);   
         this._obj.cdcno = this._cdcno;
          this._router.navigate(['/SID']);     
        }else{
          this._result = "Data havenot  been updated";
         this.flagsave=true;  
        }
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 }
  
}