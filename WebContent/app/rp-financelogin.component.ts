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
  selector: 'rp-financelogin',
  template: ` 
   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

        <div class="card card-container login-container">
           <img id="profile-img" class="profile-img-card" src="image/DPlogo.png" />
           <div class="text-center">
             <h5><strong style="color:green;">Client Information System</strong></h5><br>
           </div>
           
            <form class="form-signin">
                       
               <input type="text" id="name" class="form-control" ngDefaultControl [(ngModel)]="_name" [ngModelOptions]="{standalone: true}" placeholder="Enter Name " required autofocus> 
               <input type="password" id="password" class="form-control" ngDefaultControl placeholder="Enter Password" [(ngModel)]="_password" [ngModelOptions]="{standalone: true}" required autofocus> 
               <button class="btn btn-lg btn-success btn-block btn-signin" (click)="goPost()"  type="submit" >                  
                <span>
                  <i class="fa fa-login" aria-hidden="true"></i> 
                   &nbsp; Login
                </span>
                    <span *ngIf="_loginload" style="position: absolute;margin-top: -2px;">
                      <div class="ld ld-pie ld-spin-fast" style="font-size:1.5em"></div>
                    </span>
               </button>                 
            </form>
            
            </div>
            
 
   
  
  `
})
export class RpFinanceLoginComponent {
  _password: string;
  _name: string;
  url: string = "url";
    datelabel: string;
    check: boolean=true;
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
  _obj={"name":"","password":"", "commandCenter":false};
  public static  _objst={"name":"","password":"", "commandCenter":false};
  constructor(private ics: RpIntercomService, private _router: Router, private http: RpHttpService, private sanitizer: DomSanitizer) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    this.ics._profile.role = 0;
    //this.checkCookie();     
  }
  // checkCookie() {
  //   let value = this.readCookieValue('username');
  //   //let urls = this.readUrl('url');
  //   if (value != "" && value != null) {
  //     this._user = value;
  //   }
  //   else {
  //     this._user = "";
  //     this.remembercheck = false;
  //   }
  // }
 

  goPost() {
    
    if(this._name!=null && this._password!=null){
   this._loginload = true;
   
   if (this.apiUrl == null && this.apiUrl == undefined) {
     // this.ics.sendBean({ t1: "rp-wait", t2: "Signing in ..." });
     this._loginload = true;
     
    }
   
        this._url = this.ics._apiurl + 'control/signin';
   
    let profile: any = {"username": this._name, "password": this._password,  "commandCenter": this._remember };
    this.http.doPost( this._url, profile).subscribe(
      data => {       
        this.ics._sidprofile = data;    
        if (this.apiUrl == null && this.apiUrl == undefined) {
          this._loginload = true;
          
          this.ics.sendBean({ t1: "rp-msg-off" });
        }
        if (data.check == false || data.role == 0) {
           
         this._loginload = false;
          // this._result = ; 
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Invalid username and password"}); 
           //this.ics.sendBean({ t1: "rp-error", t3: "Invalid username and password });  
        } 
       
       
        if (data.check == true && data.role != 0)
        {
          this._router.navigate(['/SID']);
        } 
        
      },
      error => {
       this.ics.sendBean({ t1: "rp-error", t2: "HTTP Error Type " + error.type });
      },
      () => { }
    ); 
 }
  }
  
}