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
declare var jQuery: any;
// Application Specific
import {ClientUtil} from '../util/rp-client.util';
import {Pager} from '../util/pager.component';

@Component({
  selector: 'frmrole-list',
  template: ` 
      <div class="container">
      <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-inline"> 
    <!-- Form Name -->
        <legend>Role List</legend>   
      <div class="input-group">
      <span class="input-group-btn input-md">
       <button class="btn btn-primary" type="button" (click)="goNew();">New</button>
       </span>
       <input id="textinput" name="textinput" type="text" placeholder="Search" [(ngModel)]="_searchVal" (keyup.enter)= "search()"  class="form-control input-md">
       <span class="input-group-btn input-md">
	     <button class="btn btn-primary input-md" type="button" (click)="search()" >
       <span class="glyphicon glyphicon-search"></span>Search
       </button>
	      </span>
	    </div> 
    </form>
        
    <div class="row col-md-12">&nbsp;</div> 
    
 <pager id="pgrole" [(rpModel)]="_totalcount" (rpChanged)="changedPager($event)"></pager> 
 
  <div class="col-md-12">&nbsp;</div> 
 
 <div class="table-responsive">
 <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
     <thead>
      <tr>
        <th>Code</th>
        <th>Description</th>
      </tr>
    </thead>
   
    <tbody>
       <tr *ngFor="let obj of _array">
        <td><a (click)="goto(obj.syskey)">{{obj.t1}}</a></td>
        <td>{{obj.t2}}</td>
      </tr> 
    </tbody>
   
  </table> 
 </div>
    </div>
    </div>
    </div>
   ` ,
})

export class FrmRoleList {
  // RP Framework 
  subscription: Subscription;
  // Application Specific
  _searchVal = "";
  _totalcount = 1;
  _pgobj = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
  _util: ClientUtil = new ClientUtil();
  _array = [];
  constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService) {
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(x => { })
    if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
    this.search();
  }
  changedPager(event) {
    this._pgobj = event.obj;
    let k = event.flag;
    if (k) { this.search(); }
  }
  search() {
    if (this._pgobj.end == 0) { this._pgobj.end = this.ics._profile.n1; }
    if (this._pgobj.size == 0) { this._pgobj.size = this.ics._profile.n1; }
    let url: string = this.ics._apiurl + 'service001/browseAllRole?searchVal=' + this._searchVal;
    //let url: string = this.ics._apiurl + 'service001/browseSelectRole?searchVal=' + this._searchVal+ "&role=" + this.ics._profile.role;
    let json: any = this._pgobj;
    this.http.doPost(url, json).subscribe(
      response => {
        if (response != null && response != undefined && response.state) {
          this._totalcount = response.totalCount;
          this._array = response.data;
        }
        else {
          this._array = [];
          this._totalcount = 1;
          this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
        }
      },
      error => { },
        () => { }
    );
  }
  goto(p) {
    this._router.navigate(['/role', 'read', p]);
  }
  goNew() {
    this._router.navigate(['/role', 'new']);
  }
}
