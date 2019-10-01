import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { enableProdMode } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
// RP Framework
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service';

declare var jQuery: any;
// Application Specific
@Component({
  selector: 'frmrole',
  template: `
  <div class="container">
    <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal" (ngSubmit)="goPost()" >
      <fieldset>  
      <legend>Role</legend>

        <div class="form-group">
            <div class="row  col-md-12">              
              <button class="btn btn-primary" [disabled]="flagnew" id="new" type="button" (click)="goNew()">New</button>      
              <div> &nbsp; </div>
              <button class="btn btn-primary" [disabled]="flagsave" id="save" type="submit" >Save</button> 
              <div> &nbsp; </div>
              <button class="btn btn-primary" [disabled]="flagdelete" id="delete" type="button" (click)="goDelete();" >Delete</button> 
              <div> &nbsp; </div>
              <button class="btn btn-primary" type="button" (click)="goList()">List</button> 
            </div>           
        </div>

        <div class="form-group">
            <rp-input rpType="text" rpLabel="Code" [(rpModel)]="_obj.t1" rpReadonly="{{_tmpT1}}" rpRequired="true" rpClass="col-md-2"></rp-input>
        </div>      
        <div class="form-group">
            <rp-input rpType="text" rpLabel="Description" [(rpModel)]="_obj.t2" rpRequired="true"></rp-input>  
        </div>

        <!-- nav bar -->
      <!--  <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#tab1"><b>Menu</b></a></li>      
        </ul> --> 
        
<div class="nav-tabs-wrapper">
    <ul class="nav nav-tabs dragscroll horizontal">
        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab1"><b>Menu</b></a></li>
       
    </ul>
</div>

<div class="tab-content">
    <div class="tab-pane fade show active" id="tab1">
        <div class="row col-md-12">&nbsp;</div>       
           
          <ul  style="list-style:none;">
          <li *ngFor="let parentmenu of _obj.menu, let i=index">

          <div class="form-group">
          <div *ngIf="parentmenu.syskey!=0">
           <span (click)="showRoleMenus(parentmenu)" [hidden]="parentmenu.show"><img src="image/plus-sign.png" alt="plus-sign.png" height="15" width="15" /></span>
           <span (click)="showRoleMenus(parentmenu)" [hidden]="!parentmenu.show"><img src="image/minus-sign.png" alt="minus-sign.png" height="15" width="15"/></span>   
           <label><input type="checkbox" [(ngModel)]="parentmenu.result" (change)="getParentValue(i,parentmenu.syskey,$event)" [ngModelOptions]="{standalone: true}">{{parentmenu.t2}}</label>   
          </div>
          </div>
          
          <div *ngIf="parentmenu.show">
                    <ul style="list-style:none;">         
                        <li *ngFor="let childmenu of parentmenu.childmenus, let j=index">
                            <div class="form-group"> 
                                <input type="checkbox"  [(ngModel)]="childmenu.result" (change)="getChildValue(i,j,$event)" [ngModelOptions]="{standalone: true}">{{childmenu.t2}}                   
                            </div>
                            <div class="form-group"> 
                                &emsp;Button->
                                <span *ngFor="let btnmenu of childmenu.btns">
                                <input type="checkbox"  [(ngModel)]="btnmenu.flag" (change)="getBtnValue(i,j,$event)" [ngModelOptions]="{standalone: true}">{{btnmenu.t2}}
                                </span> 
                            </div>               
                        </li> 
                    </ul>
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
export class FrmRoleComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    sub: any;
    _tmpT1 = false;
    _obj = { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "t1": "", "t2": "", "t3": "", "n1": 0, "n2": 0, "n3": 0, "btnarr": [], "menu": [] };
    _returnResult = { "keyResult": 0, "state": false, "msgCode": "", "msgDesc": "" };

    frmlink = "/role";
    flagnew = true;
    flagsave = true;
    flagdelete = true;

    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService) {
        if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
        this.getRoleMenus();
        this.flagdelete = true;
        this.setBtns();
    }
    getRoleMenus(){
        this.http.doGet(this.ics._apiurl + 'service001/getRoleMenus').subscribe(
            data => {
                this._obj = data;
                },
            error => { }, 
            () => { }
        );
    }
    goList() {
        this._router.navigate(['/roleList']);
    }
    goNew() {
        this.clearData();
    }
    goDelete() {
        let id = this._obj.syskey;
        this.http.doGet(this.ics._apiurl + 'service001/deleteRole?syskey=' + id).subscribe(
            data => {
                if (data.state) {
                    this.clearData();
                }
                this.showMessage(data.msgDesc, data.state);
            },
            error => { },
            () => { }
        );
    }
    goPost() {
        let url: string = this.ics._apiurl + 'service001/saveRole';
        let btns = [];
        for (let i = 0; i < this._obj.menu.length; i++) {
            for (let j = 0; j < this._obj.menu[i].childmenus.length; j++) {
                let str = this.getButtonData(this._obj.menu[i].childmenus[j].btns);
                let bdata = { "syskey": 0, "desc": "", "link": "", "flag": false };
                bdata.desc = str;
                bdata.syskey = this._obj.menu[i].childmenus[j].syskey;
                btns.push(bdata);
            }
        }
        this._obj.btnarr = btns;
        let json: any = this._obj;

        this.http.doPost(url, json).subscribe(
            data => {
                this._returnResult = data;

                if (this._returnResult.state) {

                    this._obj.syskey = this._returnResult.keyResult;
                    this.flagdelete = false;

                }
                this.showMessage(this._returnResult.msgDesc, this._returnResult.state);
            },
            error => { },
            () => { }
        );
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let cmd = params['cmd'];
            console.log("cmd: " + cmd);
            if (cmd != null && cmd != "" && cmd == "new") {
                this.clearData();
            } else if (cmd != null && cmd != "" && cmd == "read") {
                let id = params['id'];
                console.log(id);
                this.http.doGet(this.ics._apiurl + 'service001/readRoleBySyskey?syskey=' + id).subscribe(
                    data => {
                        this._obj = data;
                        this.flagdelete = false;
                        this._tmpT1 = true;
                        },
                    error => { }, 
                    () => { }
                );
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    showRoleMenus(obj) {
        let indexx = this._obj.menu.indexOf(obj);
        console.log(indexx);
        if (this._obj.menu[indexx].show) { this._obj.menu[indexx].show = false; }
        else { this._obj.menu[indexx].show = true; }
    }
    getButtonData(array) {
        let k = "";
        for (let i = 0; i < array.length; i++) {
            if (array[i].flag) {
                if (k != "") {
                    k += ",";
                }
                k += array[i].syskey;
            }
        }
        return k;
    }
    getParentValue(indexno, value, event) {
        if (event.target.checked) {
            //if parentmenu is checked,check all childmenu
            if (this._obj.menu[indexno].childmenus != undefined) {
                for (let i = 0; i < this._obj.menu[indexno].childmenus.length; i++) {
                    this._obj.menu[indexno].childmenus[i].result = true;
                    for(let j = 0; j < this._obj.menu[indexno].childmenus[i].btns.length; j++) {
                        this._obj.menu[indexno].childmenus[i].btns[j].flag = true;  
                    }
                }
            }
        }
        else {
            //if parentmenu is not check, uncheck all childmenu
            if (this._obj.menu[indexno].childmenus != undefined) {
                for (let i = 0; i < this._obj.menu[indexno].childmenus.length; i++) {
                    this._obj.menu[indexno].childmenus[i].result = false;
                    for(let j = 0; j < this._obj.menu[indexno].childmenus[i].btns.length; j++) {
                        this._obj.menu[indexno].childmenus[i].btns[j].flag = false;  
                    }
                }
            }
        }
    }
    getChildValue(indexno, childindex, event) {
        if (event.target.checked) {
            //if one childmenu is checked, check its parentmenu
            this._obj.menu[indexno].result = true;
            //if one childmenu is checked, check all its btns...
            for(let i = 0; i < this._obj.menu[indexno].childmenus[childindex].btns.length; i++) {
                this._obj.menu[indexno].childmenus[childindex].btns[i].flag = true;  
            }
        }
        else {
            for(let i = 0; i < this._obj.menu[indexno].childmenus[childindex].btns.length; i++) {
                this._obj.menu[indexno].childmenus[childindex].btns[i].flag = false;  
            }
        }
    }
    getBtnValue(indexno, childindex, event) {
        if (event.target.checked) {
            //if one btn is checked, check its parent childmenu and main parentmenu
            this._obj.menu[indexno].result = true;
            this._obj.menu[indexno].childmenus[childindex].result = true;
        }
    }
    clearData() {
        this._tmpT1 = false;
        this._obj = { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "t1": "", "t2": "", "t3": "", "n1": 0, "n2": 0, "n3": 0, "btnarr": [], "menu": [] };
        this.flagdelete = true;
        this.getRoleMenus();
    }
    showMessage(msg, bool) {
        if (bool == true) { this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": msg }); }
        if (bool == false) { this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": msg }); }
        if (bool == undefined) { this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": msg }); }
    }
    setBtns() {
        let k = this.ics.getBtns("/role");
        if (k != "" && k != undefined) {
            let strs = k.split(",");
            for (let i = 0; i < strs.length; i++) {
                if (strs[i] == "1") {
                    this.flagnew = false;
                }
                if (strs[i] == "2") {
                    this.flagsave = false;
                }
            }
        }
    }
}