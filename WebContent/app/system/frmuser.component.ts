import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { enableProdMode } from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';
// RP Framework
import { RpReferences } from '../framework/rp-references';
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service';

declare var jQuery: any;
// Application Specific


@Component({
  selector: 'frmuser',
  template: ` 
    <div class="container">      

      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal" (ngSubmit)="goPost()" >
      <fieldset>  
      <legend>Admin</legend>
            
      <div class="form-group"> 
        
        <div class="row  col-md-12"> 
        
          <button class="btn btn-primary" [disabled]="flagnew" id="new" type="button" (click)="goNew()" >New</button>      
          <div> &nbsp; </div>
          <button class="btn btn-primary" [disabled]="flagsave" id="save" type="submit" >Save</button> 
          <div> &nbsp; </div>
          <button class="btn btn-primary" [disabled]="flagdelete" id="delete" type="button" (click)="goDelete();" >Delete</button>
          <div> &nbsp; </div>
          <button class="btn btn-primary" type="button" (click)="goList()" >List</button>  
         </div>        
         
         </div>
      <div class="row col-md-12">&nbsp;</div>    
          <div class="form-group">
           <!-- <rp-input rpId="id" rpType="text" rpLabel="Login ID" [(rpModel)]="_obj.t1" rpReadonly="_tmpT1" rpLabelRequired="true"></rp-input>--> 
             <div class="input-group mb-3">                  
            
                           <label class="col-md-2"> Login ID <span style="color:red">*</span></label>    
                            <div class="col-md-3">
                                 <input type="text" class="form-control" id="name" name="name" placeholder="Enter Login ID" [(ngModel)]="_obj.t1" [ngModelOptions]="{standalone: true}"  required>
                                        
                            </div>
                            &nbsp;                                

               </div>
          </div>      
            
              <div class="form-group"  >                                                                            
                     <div class="input-group mb-3">
                     
            
                           <label class="col-md-2"> Name <span style="color:red">*</span></label>    
                                   <div class="col-md-3">
                                       <input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name" [(ngModel)]="_obj.name" [ngModelOptions]="{standalone: true}"  required>
                                        
                                    </div>
                                    &nbsp;
                                         
                                    <label class="col-md-2"> Password <span style="color:red">*</span></label>    
                                       <div class="col-md-3">
                                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter Your Password" [(ngModel)]="_obj.t2" [ngModelOptions]="{standalone: true}"  required>
                                        
                                       </div>

                    </div>
             </div>
             <div class="form-group"  >
                                                                            
                  <div class="input-group mb-3">
                       <label class="col-md-2"> Email </label>    
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="email" name="email" placeholder="Enter Your Email Address" [(ngModel)]="_obj.t3" [ngModelOptions]="{standalone: true}"  required>
                        </div>
                        &nbsp;
                                         
                        <label class="col-md-2"> Confirm Password </label>    
                        <div class="col-md-3">
                             <input type="password" class="form-control" id="cpwd" name="cpwd" placeholder="Enter Your Password again" [(ngModel)]="confirmpwd" [ngModelOptions]="{standalone: true}" (keydown)="clearconfirm($event)" required>
                        </div>

                  </div>
             </div>
                                
         <!-- <ul class="navv navv-tabs">
            <li class="active"><a data-toggle="tab" href="#tab1"><b>Role</b></a></li>      
          </ul>-->

<div class="nav-tabs-wrapper">
    <ul class="nav nav-tabs dragscroll horizontal">
        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab1"><b>Role</b></a></li>
       
    </ul>
</div>
      
 <div class="tab-content">
    <div class="tab-pane fade show active" id="tab1">
        <div class="row col-md-12">&nbsp;</div>
        <div class="form-group"> 
            <label>
                <input type="checkbox"  [(ngModel)]="_result" (change)="updateChecked111($event)" [ngModelOptions]="{standalone: true}"><b> Select All</b>
               <!-- {{_role}} --> </label>             
           </div>
           
          <ul  style="list-style:none;">
          <li *ngFor="let role of _obj.userrolelist">

          <div class="form-group">
          <div *ngIf="role.syskey!=0"> 
          <input type="checkbox"  [(ngModel)]="role.flag" (change)="updateChecked(role.syskey,$event)" [ngModelOptions]="{standalone: true}">             
          {{role.t2}}
          </div>
          </div>
          </li>
          </ul>
    </div> 
  </div>
      
   
    
   </fieldset>
    

    </form>

    </div>
    </div>
    </div>
   ` ,
})

export class FrmUserComponent {

  // RP Framework 
  frmlink = "/user";
  rpChanged: any = new EventEmitter();
  subscription: Subscription;
  // Application Specific
  _note = "";
  confirmpwd = "";
  _tmpT1 = false;
  _returnResult = { "keyResult": 0, "longResult": "", "msgDesc": "", "state": false, "stringResult": "" };
   
  messagehide: boolean;
  _obj = { "syskey": 0, "n4": 0, "t1": "", "t2": "", "t3": "", "t4": "", "name": "", "userName": "", "rolesyskey": [], "userrolelist": [{ "syskey": 0, "t2": "", "flag": false }] };

  _obj1 = { "a1": "admin" };
  _key = "";
  _ans = "";
  confirmpass = "";
  catch = "";
  message = "";
  sub:any;

  flagnew = true;
  flagsave = true;
  flagdelete = true;

  strongRegex = new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{4,20})");
  mediumRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$");

  constructor(private ics: RpIntercomService,private ref: RpReferences, private _router: Router, private route: ActivatedRoute, private http: RpHttpService) {
    if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
    this.getUserRoleList();
    this.flagdelete = true;
    this.setBtns();
    
  }
   url : string ;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let cmd = params['cmd'];
      console.log("cmd: " + cmd);
      if (cmd != null && cmd != "" && cmd == "new") {
        this.flagdelete = true;
        this.getUserRoleList();
      } else if (cmd != null && cmd != "" && cmd == "read") {
        let id = params['id'];
        console.log(id);
      //  let url: string = this.ics._apiurl + 'service001/getUserData';
        this._key = params['id'];
        if(this.ics._profile.role == 11267){
            this.url = this.ics._apiurl + 'service001/getUserData';
        }else{
         this.url = this.ics._apiurl + 'service001/getUserDataList?role=' + this.ics._profile.role;
        }
        
        let json: any = this._key;

        this.http.doPost(this.url, json).subscribe(
          data => {
            console.log(JSON.stringify(data) + " get user role lists")
            this.confirmpwd = data.t2;
            this._obj = data;

            for (let i = 0; i < this._obj.userrolelist.length; i++) {

              if (data.userrolelist[i].flag == true)
                this._obj.userrolelist[i].flag = true;
              else
                this._obj.userrolelist[i].flag = false;

            }
            this._tmpT1 = true;
            this.flagdelete = false;
            this.rolesyskey = [];

            for (let i = 0; i < this._obj.rolesyskey.length; i++) {
              if (this._obj.rolesyskey[i] != 0) {
                this.rolesyskey.push(this._obj.rolesyskey[i]);
              }
            }

            this._obj.rolesyskey = this.rolesyskey;

            if (this._obj.userrolelist[1].syskey == 0) {

              if (this._obj.userrolelist.length - 1 == this.rolesyskey.length) {

                this._result = true;
              }

            } else {

              if (this._obj.userrolelist.length == this.rolesyskey.length) {

                this._result = true;
              }

            }

          },
          error => //alert(error),
          () => { }
        );
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 getUserRoleList() {
    if(this.ics._profile.role ==11267){
      this.http.doGet(this.ics._apiurl + 'service001/getUserRolelist?role=' + this.ics._profile.role).subscribe(
      data => {
        console.log(JSON.stringify(data) + " user role lists")
        this._obj = data;

        for (let i = 0; i < this._obj.userrolelist.length; i++) {
          this._obj.userrolelist[i].flag = false;

        }
      },
      error => //alert(error), 
      () => { }
    );
    
    }else{
    this.http.doGet(this.ics._apiurl + 'service001/getUserRolelists?role=' + this.ics._profile.role).subscribe(
      data => {
        this._obj = data;

        for (let i = 0; i < this._obj.userrolelist.length; i++) {
          this._obj.userrolelist[i].flag = false;

        }
      },
      error => //alert(error), 
      () => { }
    );
    }
  }

  rolesyskey: Array<any> = [];
  _result: boolean;

  updateChecked111(event) {

    if (event.target.checked) {


      for (let i = 0; i < this._obj.userrolelist.length; i++) {

        this._obj.userrolelist[i].flag = true;
        this._result = true;
        if (this._obj.userrolelist[i].syskey != 0) {
          this.rolesyskey[i] = this._obj.userrolelist[i].syskey;
        }
      }

    }
    else {
      //if parentmenu is not check, uncheck all childmenu
      for (let i = 0; i < this._obj.userrolelist.length; i++) {
        this._obj.userrolelist[i].flag = false;
        console.log(this._obj.userrolelist[i].flag);
        let indexx = this.rolesyskey.indexOf(this._obj.userrolelist[i].syskey);
        this.rolesyskey.splice(indexx, 1);
        this._result = false;

      }

    }
    this._ans1 = JSON.stringify(this.rolesyskey);
    this._obj.rolesyskey = this.rolesyskey;

  }

  _ans1 = "";

  updateChecked(value, event) {

    if (event.target.checked) {

      this.rolesyskey.push(value);
      console.log(JSON.stringify(this.rolesyskey));

    }
    else if (!event.target.checked) {

      let indexx = this.rolesyskey.indexOf(value);
      this.rolesyskey.splice(indexx, 1);
      
       console.log(JSON.stringify(this.rolesyskey.splice(indexx, 1)));
      

    }
    this._ans = JSON.stringify(this.rolesyskey);

    this._obj.rolesyskey = this.rolesyskey;

    if (this._obj.userrolelist[1].syskey == 0) {
        console.log(JSON.stringify(this._obj.userrolelist.length) +"** "+JSON.stringify(this.rolesyskey.length) );

      if (this._obj.userrolelist.length - 1 == this.rolesyskey.length) {

        for (let i = 0; i < this._obj.userrolelist.length - 1; i++) {
          this._obj.userrolelist[i].flag = true;
        }

        this._result = true;
      }

      else {

        this._result = false;
      }

    }

    else {
        console.log(JSON.stringify(this._obj.userrolelist.length) +"** "+JSON.stringify(this.rolesyskey.length) );

      if (this._obj.userrolelist.length == this.rolesyskey.length) {
        
        for (let i = 0; i < this._obj.userrolelist.length; i++) {
           console.log(JSON.stringify(this._obj.userrolelist[i].flag  +"** ") );
          this._obj.userrolelist[i].flag = true;

        }

        this._result = true;
      }

      else {

        this._result = false;
      }
    }

  }

  goDelete() {
    let url: string = this.ics._apiurl + 'service001/deleteUser';
    let json: any = this._key;
    this.http.doPost(url, json).subscribe(
      data => {
        this._returnResult = data;
        this.showMessage(this._returnResult.msgDesc, this._returnResult.state);
      },
      error => //alert(error),
      () => { }
    );
    this.clearData();
  }
  goPost() {
    console.log(JSON.stringify(this._obj) + " **")
    if (this.isValidate(this._obj)) {
      this.flagsave = true;
      ///this._obj.t4 = this.ics._profile.t4; // brand id (0002 or 0001)
      let url: string = this.ics._apiurl + 'service001/saveUser';
      let json: any = this._obj;
      this.http.doPost(url, json).subscribe(
        data => {
          this._returnResult = data;

          if (this._returnResult.msgDesc == 'Saved Successfully!' || this._returnResult.msgDesc == 'Updated Successfully!') {
            this._obj.syskey = this._returnResult.keyResult;
            this.message = "";
            this._key = this._returnResult.keyResult + "";
            this.flagsave = false;
            this.flagdelete = false;

          }


          if (this._returnResult.msgDesc == 'Please select Role!') {
            this.rolesyskey = [];

          }

          this.showMessage(this._returnResult.msgDesc, this._returnResult.state);
        },
        error => //alert(error),
        () => { }
      );
    }
  }
  goList() {
    this._router.navigate(['/userList']);
  }


  isValidate(obj) {
    if (this._obj.t2 != this.confirmpwd) {
      this.showMessage("Password and Confirm Password do not Match!", false);
      return false;
    } else if (this.catch.length > 0) {
      this.showMessage("Invalid Password,Try Again!", false);
      return false;
    } else if (this._obj.t3.length > 0 && !this.validateEmail(this._obj.t3)) {
      this.showMessage("Your email address is invalid!", false);
      return false;
    } else {
      return true;
    }
  }

  clearconfirm(e: any) {
    this.confirmpass = "";
  }

  goNew() {

    this.clearData();
  }
  messagealert() {
    this.messagehide = false;
    setTimeout(() => this.messagehide = true, 3000);
  }

  clearData() {

    this.confirmpwd = "";
    this.message = "";
    this._result = false;
    this._key = "";
    this.rolesyskey = [];
    this._obj.rolesyskey = [];
    this._obj.t1 = "";
    this._obj.t2 = "";
    this._obj.t3 = "";
    this._tmpT1 = false;
    this._obj.name = "";
    this._obj.userName = "";
    this._obj.syskey = 0;
    this.messagehide = true;
    this._returnResult = { "keyResult": 0, "longResult": "", "msgDesc": "", "state": false, "stringResult": "" };

    for (let i = 0; i < this._obj.userrolelist.length; i++) {
      this._obj.userrolelist[i].flag = false;

    }
    this.flagdelete = true;
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
    }
    return (false);
  }

  showMessage(msg, bool) {
    if (bool == true) { this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg }); }
    if (bool == false) { this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg }); }
    if (bool == undefined) { this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg }); }
  }
  setBtns(){
    let k = this.ics.getBtns("/user");
    if(k!="" && k!=undefined){
      let strs = k.split(",");
      for(let i = 0; i<strs.length; i++){
        if(strs[i] == "1"){
          this.flagnew = false;
        }
        if(strs[i] == "2"){
          this.flagsave = false;
        }
      }
    }
  }
  

}

