import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { enableProdMode } from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';
// RP Framework
import {RpReferences} from '../framework/rp-references';
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service';

import {RpRootComponent} from '../rp-root.component';
import { ClientUtil } from '../util/rp-client.util';

declare var jQuery: any;
// Application Specific
enableProdMode();
@Component({
  selector: 'frmmenu',
  template: ` 
    <div class="container">
     <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
          <form class= "form-horizontal"   (ngSubmit)="goPost()" >
            <fieldset>   
     
              <legend>Menu</legend>
              <div class="form-group">
                  <div class="row  col-md-12">                     
                    <button class="btn btn-primary" [disabled]="flagnew" id="new" type="button" (click)="goNew()">New</button>      
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
                          <label class="checkbox-inline">    
                                  <input type="radio" [checked]="parentcheck" id="parentradio"  (click)="checkParents()" name="optionsRadiosinline"   value="option1" checked> 
                                  Main Menu 
                          </label>  
                          
                          <label class="checkbox-inline">      
                                  <input type="radio" [checked]="childcheck" id="childradio" (click)="checkChild()"   name="optionsRadiosinline"   value="option2"> 
                                  Sub Menu    
                          </label>  
                    </div>
              
                  <div class="form-group"> 
                    <rp-input  [hidden]="rd" [(rpModel)]="menusys" rpRequired ="true"  rpType="mainmenu" rpLabel="Main Menu &nbsp;&nbsp;"></rp-input>
                  </div>
                          
                  <div class="form-group">
                        <rp-input  rpType="text" rpClass="col-md-2" rpLabel="Code" [(rpModel)]="_syskey" rpReadonly="true" rpRequired="true"></rp-input>
                  </div>

                  <div class="form-group">        
                    <rp-input  rpType="text" rpLabel="Menu Link" [(rpModel)]="_obj.t1" rpReadonly="{{rd}}" rpRequired="true"></rp-input>
                  </div>
                  
                  <div class="form-group">        
                    <rp-input  rpType="text" rpLabel="Description" [(rpModel)]="_obj.t2" rpRequired="true"></rp-input>
                  </div>
       
             </fieldset>  
             <fieldset class="col-md-6"> 
             <div style="width:auto;height:auto;padding:15px;border:1px solid #e5e5e5; border-radius:10px">
             <legend><span style="font-size:16px;">Button Right</span></legend>     
             <table class="table table-striped table-condensed table-hover" style="font-size:14px;">   
              <thead>
                <tr>
                  <th style='width: 7%;' align="center">&nbsp;</th>
                  <th style='width: 93%;' align="center">Name</th>    
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let obj of _array">
                  <td><label><input type="checkbox" [(ngModel)]="obj.flag" [ngModelOptions]="{standalone: true}"></label></td>
                  <td>{{obj.t2}}</td>   
                </tr> 
              </tbody>
            </table>
            </div>
            </fieldset> 
           </form>  
      
     </div>
    </div> 
  </div>
   ` ,
})

export class FrmMenuComponent implements OnInit, OnDestroy {
  // RP Framework 
  subscription: Subscription;

 /*flagnew = true;*/
  flagsave = false;
  flagdelete = true;
  // Application Specific
  _util: ClientUtil = new ClientUtil();
  _comboobj = { "value": "", "caption": "" };
  _syskey = "TBA";
  
  _menusyskeyrecord: number;
  _obj = { "syskey": 0, "t1": "/angular2", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n2": 0, "n5": 0 };
  _result = { "longResult": "", "msgDesc": "", "key": [], "keyResult": 0, "state": false, "stringResult": "" };
  _key = "";
  _before = this._obj;

  parentcheck: boolean;
  childcheck: boolean;
  messagehide: boolean;
  rd: boolean;
  rd1: boolean;
  menusys: number;
  sub: any;

  _array = [];
  btndata = { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "flag": false };

  checkparam: boolean;
  _output1 = "";
  constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private title: Title, private ref: RpReferences) {
    if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
    this.flagdelete = true;
    this.setBtns();

    //Combo BUtton Control
    this.rd = true;

    //Radio Box Control
    this.parentcheck = true;
    this.childcheck = false;

    //Alert Message Control
    this.messagehide = true;

    this.getbuttonlist();

    this.ics.confirmUpload(false);
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let cmd = params['cmd'];
      this.checkparam = cmd == "read";
      if (cmd != null && cmd != "" && cmd == "new") {
        this.menusys = null;
        this.flagdelete = true;
        this.parentcheck = true;
        this.childcheck = false;
      } else if (cmd != null && cmd != "" && cmd == "read") {
        let id = params['id'];
        let url: string = this.ics._apiurl + 'service001/getMenuData';
        this._key = id;
        let json: any = this._key;

        //change with get method...
        this.http.doPost(url, json).subscribe(
          data => {
            this.flagdelete = false;

            this._output1 = JSON.stringify(data);
            this._obj = data;
            this.menusys = this._obj.n2;
            this._syskey = "" + this._obj.syskey;
            this.setButtonData(this._obj.t3);
            if (this._obj.n2 == 0) {
              this.parentcheck = true;
              this.childcheck = false;
            }
            else {
              this.parentcheck = false;
              this.childcheck = true;
              this.getmainlist();
              this.rd = false;
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
  checkChild() {
    this.rd = false;
    this.menusys = 0;
    this._obj.n2 = 0;
    this._obj.syskey = 0;
    this._obj.t1 = "";
    this._syskey = "TBA";
  }

  checkParents() {
    this.rd = true;
    this._obj.n2 = 0;
    this.menusys = 0;
    this._obj.syskey = 0;
    this._obj.t1 = "/angular2";
    this._syskey = "TBA";
  }
  goDelete() {
    let url: string = this.ics._apiurl + 'service001/deleteMenu';
    let json: any = this._obj;

    this.http.doPost(url, json).subscribe(
      data => {
        this._output1 = JSON.stringify(data);
        this._result = data;
        this.showMessage(this._result.msgDesc, this._result.state);

        if (this._result.state) {
          this.getmainlist();

          if (this.checkparam) {
            this.goNew();
          }
        }
        else {
          this.flagdelete = false;
        }
      },
      error => //alert(error),
        () => { }
    );
  }
  goPost() {

    if ((!this.rd && this.menusys == 0) || (!this.rd && this.menusys == undefined)) {
      this._result.msgDesc = "Please Select Main Menu";
      this._result.state = false;
      this.showMessage(this._result.msgDesc, this._result.state);
    }
    else {
      this.flagsave = true;
      this._obj.n2 = this.menusys;
      this._obj.n5 = 1;
      this._obj.t4 = "51";
      this._obj.t5 = "100%";
      this._obj.t6 = "800";
      let keys = "";
      keys = this.getButtonData();
      console.log("button syskeys: " + keys);
      this._obj.t3 = keys;
      let url: string = this.ics._apiurl + 'service001/saveMenu';
      let json: any = this._obj;
      this.http.doPost(url, json).subscribe(
        data => {
          this._output1 = JSON.stringify(data);
          this._result = data;
          this.messagehide = true;

          this.showMessage(this._result.msgDesc, this._result.state);
          this._syskey = this._result.key[1];

          if (this._result.state) {

            if (this.rd) {
              this.getmainlist();
              this._obj.syskey = this._result.key[1];
              if (this.checkparam) {
                this.checkparam = false;
              }
              else { this.flagdelete = true; }
            }

          }
          else {
            this.showMessage(this._result.msgDesc, this._result.state);
          }
          this.flagsave = false;
        },
        error => { },
        () => { }
      );
    }
  }
  goList() {
    this._router.navigate(['/menuList']);
  }
  goNew() {
    this._syskey = "TBA";
    this.clearButtonData();
    this._obj = { "syskey": 0, "t1": "/angular2", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n2": 0, "n5": 0 };
    jQuery('#parentradio').prop('checked', 'checked');
    jQuery('#childradio').prop('checked', false);
    this.flagdelete = true;
    this.rd = true;
  }
  getmainlist() {
    this.http.doGet(this.ics._apiurl + 'service001/getMainList').subscribe(
      response => {
        if (response != null || response != undefined) {
          this.ref._lov3.mainmenu = response.data;
        }
      },
      error => { },
      () => { }
    );
  }
  getbuttonlist() {
    this.http.doGet(this.ics._apiurl + 'service001/getButtonList').subscribe(
      response => {
        if (response.state) {
          this._array = response.data;
        }
      },
      error => { },
      () => { }
    );
  }
  clearButtonData() {
    for (let i = 0; i < this._array.length; i++) {
      this._array[i].flag = false;
    }
  }
  getButtonData() {
    let k = "";
    for (let i = 0; i < this._array.length; i++) {
      if (this._array[i].flag) {
        if (k != "") {
          k += ",";
        }
        k += this._array[i].syskey;
      }
    }
    return k;
  }
  setButtonData(t3) {
    let btns = t3.split(',');
    console.log("btns: " + JSON.stringify(btns));
    for (let i = 0; i < this._array.length; i++) {
      for (let j = 0; j < btns.length; j++) {
        if (this._array[i].syskey == btns[j]) {
          this._array[i].flag = true;
        }
      }
    }
  }
  showMessage(msg, bool) {
    if (bool) { this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg }); }
    if (!bool) { this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg }); }
    if (bool == undefined) { this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg }); }
  }
  setBtns() {
    let k = this.ics.getBtns("/menu");
    if (k != "" && k != undefined) {
      let strs = k.split(",");
      for (let i = 0; i < strs.length; i++) {
        if (strs[i] == "1") {
          //this.flagnew = false;
        }
        if (strs[i] == "2") {
         // this.flagsave = false;
        }
      }
    }
  }
}
