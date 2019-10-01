import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { enableProdMode } from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';
// RP Framework
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service';
import {RpReferences} from '../framework/rp-references';

declare var jQuery: any;
// Application Specific
enableProdMode(); 
@Component({
  selector: 'changePassword',
  template: `
    <div class="container">
    <div class="row clearfix">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
    <form class= "form-horizontal"  (ngSubmit)="goPost()" > 
    <!-- Form Name -->
    <legend>Change Password</legend>
    <div class="row col-md-12">&nbsp;</div>

    <div style="color: #3b5998;" class="row col-md-12">
        <span>* Password are case-sensitive and must be at least 6 characters.</span><br>
        <span>* A good password should contain a mix of capital and lower-case letters, numbers and symbols.</span>
    </div>    
    <div class="row col-md-12">&nbsp;</div>
    <div class="form-group">
        <rp-input [(rpModel)]="_obj.oldpass" rpRequired ="true" rpType="password" rpLabel="Current password" autofocus></rp-input>
    </div>

    <div class="form-group">
        <rp-input [(rpModel)]="_obj.newpass" rpRequired ="true" rpType="password" rpLabel="New Password" autofocus></rp-input>
    </div>

    <div class="form-group">
        <rp-input [(rpModel)]="_obj.confirm" rpRequired ="true" rpType="password" rpLabelClass="col-md-3" rpLabel="Confirm New Password" autofocus></rp-input>
    </div>

    <div class="row  col-md-12"> 
        <div class="col-md-2">&nbsp;</div>
        <button class="btn btn-primary"  type="submit" >Change Password</button>  
        <div>&nbsp;</div>     
        <button class="btn btn-danger" type="button" (click)="goNew()" >Cancel</button>   
    </div>
    <div class="row  col-md-12">&nbsp;</div>
    </form>
    </div>
    </div>
    </div>
  `
})
export class FrmChangePasswordComponent {
    // RP Framework 
    subscription: Subscription;
    _obj = {"userid":"","oldpass":"","newpass":"","confirm":""}
    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
        if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
    }
    goNew() {
        this._obj = {"userid":"","oldpass":"","newpass":"","confirm":""};
    }
    goPost() {
        let url: string = this.ics._apiurl + 'service001/changePassword';
        console.log(this.ics._profile.userName);
        this._obj.userid = this.ics._profile.userid;
        if (this._obj.confirm == this._obj.newpass) {
            let json: any = this._obj;
            this.http.doPost(url, json).subscribe(
                data => {
                    if (data.state) {
                        this.showMessage("Password Changed Successfully!!!", true);
                    }
                    else {
                        this.showMessage("Password Changing Unsuccessful!!!", false);
                    }
                },
                error => {
                    this.showMessage("Can't Change Password!!!", undefined);
                },
                () => { }
            );
        } else {
            this.showMessage("New Password and Confirm New Password must be the same!!!", false);
        }
    }    
    showMessage(msg, bool) {
        if (bool == true) { this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg }); }
        if (bool == false) { this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg }); }
        if (bool == undefined) { this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg }); }
    }
}