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
import {RpBean} from '../framework/rp-bean';
declare var jQuery: any;
// Application Specific
enableProdMode(); 
@Component({
  selector: 'frm-paginator',
  template: `
    <div class="container">
    <div class="row clearfix">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
    <form class= "form-horizontal" > 
    <!-- Form Name -->
    <legend>Custom Pagination</legend>
    <div class="row col-md-12">&nbsp;</div>

    <div class="row col-md-12" style="color: #4285F4;">
        Set the amount of data that will show in List forms
    </div>    
    <div class="row col-md-12">&nbsp;</div>
    <div class="form-group">
        <rp-input [(rpModel)]="_pager" rpRequired ="true" rpType="number" rpLabel="Amount of Paginator" autofocus></rp-input>
    </div>

    <div class="row  col-md-12"> 
        <div class="col-md-2">&nbsp;</div>
        <button class="btn btn-primary" type="button" (click)="goPost()"  >Save</button>       
         <div>&nbsp;</div>    
        <button class="btn btn-primary" type="button" (click)="goNew()" >Reset</button>   
        <div class="row  col-md-12"> &nbsp;</div>
    </div>
    </form>
    </div>
    </div>
    </div>
  `
})
export class FrmPaginatorComponent {
    // RP Framework 
    subscription: Subscription;
    _pager = 10;
    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
        if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
        this._pager = this.ics._profile.n1;
    }
    goNew() {
        this._pager = 10;
    }
    goPost() {
        let d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toDateString();
        document.cookie = "pager" + "=" + this._pager + ";" + expires;
        this.ics._profile.n1 = this._pager;        
        this.ics.sendBean(new RpBean());
        this.showMessage("Pagination Saved!!!",true)
    }    
    showMessage(msg, bool) {
        if (bool) { this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg }); }
        if (!bool) { this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg }); }
        if (bool == undefined) { this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg }); }
    }
}