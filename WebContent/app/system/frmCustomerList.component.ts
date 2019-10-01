// RP Framework
import { Component, Output, Input, OnDestroy, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { enableProdMode } from '@angular/core'; 
// RP Framework
import {Subscription}   from 'rxjs/Subscription';
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component'; 
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean'; 
import {ClientUtil} from '../util/rp-client.util';
declare var jQuery: any;
// Application Specific
import {DomSanitizer, SafeResourceUrl} from  "@angular/platform-browser";

enableProdMode();

@Component({
  selector: 'frmcustomer-list',
  template: ` 
  <div class="container col-md-12">
   <form class="form-inline"> 
    <legend>Customer List</legend>
   <div class="row col-md-12">&nbsp;</div>
    <div *ngIf="_flagas" class="input-group">
       <input id="textinput" name="textinput" type="text" placeholder="Search" [(ngModel)]="_searchVal" [ngModelOptions]="{standalone: true}" (keyup.enter)= "searchVal()"  class="form-control input-md">
       <span class="input-group-btn input-md">
	     <button class="btn btn-primary input-md" type="button" (click)="searchVal()">
	     <span class="glyphicon glyphicon-search"></span>Search
	     </button>
	     </span>
        <span class="input-group-btn input-md" style="width:70px" >
         <button class="btn btn-primary" type="button" (click)="getRegister();">ShowAll</button>
          </span>
    </div>
    </form>

   <pager id="pgclaim" rpPageSizeMax="100" [(rpCurrent)]="_srchobj.pager.current" [(rpModel)]="_totalcount" (rpChanged)="changedPager($event)"></pager>

   <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
    <thead>
     <tr>
        <th>Name  <img src="image/sortAsc.png" [hidden]="_flagSortName" alt="sortAsc.png" height="12" width="15" (click)="addSort(1)"/>
                        <img src="image/sortDesc.png" [hidden]="!_flagSortName" alt="sortDesc.png" height="12" width="15" (click)="addSort(1)"/></th>
        <th>Email<img src="image/sortAsc.png" [hidden]="_flagSortEmail" alt="sortAsc.png" height="12" width="15" (click)="addSort(3)"/>
                        <img src="image/sortDesc.png" [hidden]="!_flagSortEmail" alt="sortDesc.png" height="12" width="15" (click)="addSort(3)"/></th>
        <th>Mobile Number<img src="image/sortAsc.png" [hidden]="_flagSortPhno" alt="sortAsc.png" height="12" width="15" (click)="addSort(4)"/>
                        <img src="image/sortDesc.png" [hidden]="!_flagSortPhno" alt="sortDesc.png" height="12" width="15" (click)="addSort(4)"/></th>
     </tr>
    </thead>
    <tbody>
      <tr *ngFor="let obj of _array">
        <td><a (click)="goto(obj.syskey)">{{obj.t3}}</a></td>
        <td>{{obj.t7}}</td>
        <td>{{obj.t1}}</td>         
      </tr> 
    </tbody>
  </table>
  </div> 
  
   ` ,
})
export class FrmCustomerListComponent {
  // RP Framework 
  subscription: Subscription;
  sub;

  // Application Specific
  _filter1 = "";
  _output1 = "";
   _searchVal = "";
   _value="";
  _searching=false;
  _array=[];
  _totalcount=1;

    // bind Model Data
  @Input() rpModel: any;
  @Output() rpModelChange: any = new EventEmitter();
  @Output() rpChanged: any = new EventEmitter();
  _isModal = false;

 _util:ClientUtil = new ClientUtil();
  _flagas = true;
  _adsearch = [];
  _order=2;
  output: string;
 _type="1";
 _sort="asc";
_srchobj = {"pager":{ "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 },"search":[]};
  
  _obj={"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,"syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n11":0,"n12":0,"n13":0,"n14":0,"n15":0,"n16":0,"n17":0,"n18":0,"n19":0,"n20":0,"t25":"","t24":"","t1":"","t9":"","t2":"","t4":"","t14":"","t12":"","t18":"","t19":"","t5":"","t6":"","t8":"","t16":"","t20":"","t15":"","t7":"","t21":"","t11":"","t22":"","t3":"","t17":"","t10":"","t13":"","t23":""};

  _objs = {"data":[{"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,"syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n11":0,"n12":0,"n13":0,"n14":0,"n15":0,"n16":0,"n17":0,"n18":0,"n19":0,"n20":0,"t25":"","t24":"","t1":"","t9":"","t2":"","t4":"","t14":"","t12":"","t18":"","t19":"","t5":"","t6":"","t8":"","t16":"","t20":"","t15":"","t7":"","t21":"","t11":"","t22":"","t3":"","t17":"","t10":"","t13":"","t23":""}],
  "state":false,"m_searchText":null,"m_totalCount":0,"m_currentPage":0,"m_pageSize":0};

    _flagSortName = false;
    _flagSortPhno = false;
    _flagSortEmail = false;

    
  constructor(private ics: RpIntercomService, private _router: Router,  private http: RpHttpService,private sanitizer: DomSanitizer) {
    if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);

  }

  ngOnChanges(rpModel) {
    if(this.rpModel != undefined) {
        this._isModal = this.rpModel;
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        if(this._isModal) this.search(this._srchobj);
    }
  }

  search(p){
    if(p.pager.end == 0){p.pager.end = this.ics._profile.n1;}
    if(p.pager.size == 0){p.pager.size = this.ics._profile.n1;}
    let url: string = this.ics._apiurl + 'serviceRegister/browseAuthorization?viewType=3&searchVal='+this._searchVal+"&sort="+this._sort+"&type="+this._type;
    let json: any = p;
       this.http.doPost(url, json).subscribe(
        response => {
            if (response != null && response != undefined && response.state) {
                this._totalcount = response.m_totalCount;
                this._array = response.data;
            }
            else {
                this._array = [];
                this._totalcount = 1;
                this.alertMessage("Data not found!");
            }
        },
        error => { },
        () => { }
      );
  }

  alertMessage(message){
      this.ics.sendBean({"t1":"rp-msg","t2":"Information","t3":message});
  }
  searchVal() {
      this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
      this._srchobj.search = [];
      this.search(this._srchobj);
  }
  changeAS(event){
    this._adsearch = event;
    this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
    this._srchobj.search = this._adsearch;
    this.search(this._srchobj);
  }
  goto(p) {
    if(this._isModal)
    this.rpChanged.emit();
    this._router.navigate(['/authorization','READ',p]);
  }
 
  hideShowAS(event){
    this._flagas = event;
  }
changedPager(event){
    let k = event.flag;
    this._srchobj.pager = event.obj;
    this._srchobj.search = this._adsearch;
    if (k) { this.search(this._srchobj); }
}
 changeDefault() {
       
        this._flagSortName = false;
        this._flagSortPhno = false;
        this._flagSortEmail = false;

    }
   
    addSort(e) {
        if (e == 1) {
            if (!this._flagSortName) {
                this.changeDefault();
                this._flagSortName = true;
                this._sort = "desc";
                this._type = "1";
                this.search(this._srchobj);
            }
            else if (this._flagSortName) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "1";
                this.search(this._srchobj);
            }
        } else if (e == 3) {
            if (!this._flagSortEmail) {
                this.changeDefault();
                this._flagSortEmail = true;
                this._sort = "desc";
                this._type = "3";
                this.search(this._srchobj);
            }
            else if (this._flagSortEmail) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "3";
                this.search(this._srchobj);
            }
        } else if (e == 4) {
            if (!this._flagSortPhno) {
                this.changeDefault();
                this._flagSortPhno = true;
                this._sort = "desc";
                this._type = "4";
                this.search(this._srchobj);
            }
            else if (this._flagSortPhno) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "4";
                this.search(this._srchobj);
            }
        }        
    } 
    getRegister(){
    this._searchVal="";
    this._searching = false;
    this.http.doGet(this.ics._apiurl + 'serviceRegister/getAuthList?viewType=3&searchVal=' + this._searchVal ).subscribe(
        response => { 
          let k = response;
          this._totalcount = k.m_totalCount;   
          if ((response != null || response != undefined) && response.m_totalCount > 0) {
              
              this._array = this._util.changeArray(response.data, this._obj, 1);
            }
            else{
            this._array = [];
            this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
          }
        },
        error => alert(error),
        () => { }
      );
      
  }
  
}
