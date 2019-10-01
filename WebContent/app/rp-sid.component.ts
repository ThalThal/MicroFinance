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
import {RpSIDUpdateComponent}  from './rp-sidupdate.component'
import {RpFinanceLoginComponent}  from './rp-financelogin.component'
enableProdMode(); 
@Component({
  selector: 'rp-sid',
  template: ` 
 
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
 <div class="modal fade" id="ExcelExportForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header image-center">
       <img  alt="avatar" class="modal-title img-responsive" src="image/sidExcel.jpg" />
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">         
          <span aria-hidden="true">&times;</span>          
        </button>
      
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <div class="row col-md-12">
          <label class="datelabel" data-error="wrong" data-success="right" for="form3">Start Date:</label>&nbsp;&nbsp;
          
          <datetime class="datetime" for="form3" [(ngModel)]="_dates.sdate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"></datetime>
         </div>
        </div>

        <div class="md-form mb-5">
        <div class="row col-md-12">
         <label class="datelabel" data-error="wrong" data-success="right" for="form2">End Date:</label>&nbsp;&nbsp;&nbsp;
         
         <datetime class="datetime" [(ngModel)]="_dates.edate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}"></datetime>
        </div> 
        </div>
        
         <div class="checkdate-label-danger">
            <span *ngIf="datelabel != null" class="label">{{datelabel}} </span>
         </div>
        
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-primary btn-md" (click)="goexcel()"><i class="fa fa-file ml-1"></i>&nbsp;Export </button>
      </div>
    </div>
  </div>
</div>
<!-- <div class="row clearfix"> -->
<!-- <div class="for-nav col-md-12"> -->
 <nav class="navbar navbar-fluid">
  <div class="nav-container">
    <div class="navbar-header">
      <div class="navbar-brand">
        SID Data Checking System
      </div>
    </div>  
     
    <ul class="nav navbar-nav navbar-right">  
     
      <div (click)="gologout()"  class="logout"><span class="fas fa-sign-out-alt"  aria-hidden="true"></span> Logout</div>    
    </ul>
  </div>
</nav>
<!-- </div> -->

  <!--  <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12  ">    -->
      <!-- <div class="container">-->
        <div class="card card-container">
           <img id="profile-img" class="profile-img-card" src="image/sid.jpg" />
           <div class="text-center">
             <h5>SID Data Checking System</h5>
           </div>
            <form class="form-signin">
              <!-- <input type="text" id="name" class="form-control" ngDefaultControl [(ngModel)]="_name" [ngModelOptions]="{standalone: true}" placeholder="Name " required autofocus> -->
               <input type="text" id="cdcno" class="form-control" ngDefaultControl placeholder="CDC NO" [(ngModel)]="_cdcno" [ngModelOptions]="{standalone: true}" required autofocus> 
               <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" (click)="goPost()">                  
                <span>
                  <i class="fa fa-search" aria-hidden="true" ></i> 
                   &nbsp; Search
                </span>
                    <span *ngIf="_loginload" style="position: absolute;margin-top: -2px;">
                      <div class="ld ld-pie ld-spin-fast" style="font-size:1.5em"></div>
                    </span>
               </button>                 
            </form>
            
            <button class="btn btn-lg btn-primary btn-block btn-signin" data-toggle="modal" data-target="#ExcelExportForm">
               <span>                
                 <i class="fa fa-file" aria-hidden="true"></i>
                  &nbsp; Export Excel
                </span>
              </button>
              <div class="alert alert-danger"  *ngIf="_result == 'No Record Found'">
                 <strong>Warning!</strong> No Record Found
              </div>
              <div class="alert alert-success"  *ngIf="_result == 'Record Found'">
                  <strong>Success!</strong> Record Found
              </div>
              <div class="alert alert-success"  *ngIf="_result == 'Data has been deleted'">
                  <strong>Success!</strong> Data has been deleted
              </div>
        </div>
        
        
        <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                  <thead>
                     <tr>
                       <th> CDC NO </th> 
                       <th>APPLICATION ID</th>                              
                       <th> QUEUE_NO</th>                                    
                       <th> NAME</th>
                       <th> TELEPHONE NUMBER</th>
                       <th> EMAIL</th>
                       <th> APPOINTMENT DATE </th>
                       <th> PASSWORD NUMBER </th>
                       <th></th>
                      </tr>
                   </thead>
                      <tr class="datarow">
                        <td class="data">{{_obj.cdcno}}</td>                               
                        <td class="data">{{_obj.appId}}</td>
                        <td class="data">{{_obj.qNo}}</td>                               
                        <td class="data">{{_obj.name}}</td>                               
                        <td class="data">{{_obj.tNo}}</td>
                        <td class="data">{{_obj.email}}</td>
                        <td class="data">{{_obj.appDate}}</td>
                        <td class="data">{{_obj.passNo}}</td>
                        <td class="data" colspan="2"> 
                          <input type="button" class="btn btn-danger btn-block btn-sm"  [disabled]="flagsave" name="Delete" value="Cancel"  (click)="confirm()">
                          <input type="button" class="btn btn-primary btn-block btn-sm" *ngIf="_role == 2"  [disabled]="flagsave" name="update" value="Update"  (click)="goUpdate()">
                        </td>
                       </tr>
                  </table>
                </div>
            </div>
   
  
  `
})
export class RpSIDComponent {
  _role: any;
  _cdcno: string;
  _t1: string;
  sdate: Date;
  edate: Date;
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
    startDate = null;
    endDate = null;
    _util: ClientUtil = new ClientUtil();
  _obj={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":""};
  constructor(private ics: RpIntercomService, private _router: Router, private http: RpHttpService, private sanitizer: DomSanitizer) {
    this.subscription = ics.rpbean$.subscribe(x => { });
   //this.checkLogin();
    //this.checkCookie();
    console.log(JSON.stringify(this.ics._sidprofile) + " ics obj") ;
    this._obj = RpSIDUpdateComponent._objst;
    if(this._obj.cdcno != "" && this._obj.cdcno != null ){
      this._cdcno = this._obj.cdcno;
      this.goPost();
    }
    if(this.ics._sidprofile.role == 0 ){
      this._router.navigate(['/SIDLogin']);
    }else{
      this._router.navigate(['/SID']);
      this._role=this.ics._sidprofile.role;
    }
    this.ics.sendBean(new RpBean());  

    this._loginload = false;
     this.datepickerOpts = this.ics._datepickerOpts;
     this._dates.sdate = new Date();//todaydate
     this._dates.edate = new Date();//todaydate
     this.startDate = this._util.getDatePickerDate(this._dates.sdate);
     this.endDate = this._util.getDatePickerDate(this._dates.sdate);
     
  }
  gologout(){
    this._cdcno ="";
    RpSIDUpdateComponent._objst = {"cdcno":"","appId":"","name":"","qNo":"","appointmentDate":"","email":"","tNo":"","appDate":null,"passNo":""};
    this._obj={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":""};
    this._router.navigate(['/SIDLogin']);
  }
   goUpdate(){
    this._router.navigate(['SIDUpdate',this._obj.cdcno]);
  }
  checkLogin() {
    if(this.ics._sidprofile.check==false || this.ics._sidprofile.username== "")
      {
        this._router.navigate(['/SIDLogin']);
      }
  }
  confirm() {
  if(confirm("Are you sure to delete this record")) {
    this.goDelete();
  }else{
    this.goPost();
  }
}

  goPost() {
    if(this._cdcno!=null){
   this._loginload = true;
   if (this.apiUrl == null && this.apiUrl == undefined) {
     // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
     this._loginload = true;
    }
   
        this._url = this.ics._apiurl + 'control/search';
   
    let profile: any = {"cdcno": this._cdcno,  "commandCenter": this._remember };
    this.http.doPost( this._url, profile).subscribe(
      data => {
        this._obj=data;
      
      
        if (this.apiUrl == null && this.apiUrl == undefined) {
          this._loginload = true;
          this.ics.sendBean({ t1: "rp-msg-off" });
        }
        if (data.commandCenter == false ) {
         this._loginload = false;
           this.flagsave=true;
           this._result = "No Record Found";
          //this.authorize(data);
        } else {
          this._loginload = false;
           this.flagsave=false;
          this._result = "Record Found";
          
        }
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 }
  }
  goDelete() {
    this._url = this.ics._apiurl + 'control/deleteData';
   
    let profile: any = { "cdcno": this._cdcno,"username": this.ics._sidprofile.username,  "commandCenter": this._remember };
    this.http.doPost( this._url, profile).subscribe(
      data => {  
        console.log(data.role);
        if (this.apiUrl == null && this.apiUrl == undefined) {
          this.ics.sendBean({ t1: "rp-msg-off" });
        }
        if (data.role == 1 ) {
         this._obj={"cdcno":"","appId":"","name":"","qNo":"","email":"","tNo":"","appDate":null,"passNo":""};  
          this._cdcno="";        
          this._result = "Data has been deleted";
         this.flagsave=true;         
        }
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 }
  goexcel() {
        
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.edate);
       
        if (this.startDate != "" || this.endDate != "") {
            if (this.startDate <= this.endDate) {
       var filename = "SIDDataList_";      
       let url = this.ics._apiurl + 'control/SIDExcelExport?&filename=' + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
       this._excelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ics._apiurl + 'control/SIDExcelExport?&filename=' + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate);
       var redirectWindow = window.open(url,' _blank').focus();
            } else {
              this.check=false;
               this.datelabel="Start date should not be greater than to end date.";
            }
        }

    }
}