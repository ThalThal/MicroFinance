import { Component, Input ,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {RpReferences} from './rp-references';
import { RpIntercomService } from './rp-intercom.service'; 
import { Subscription }   from 'rxjs/Subscription';
import { enableProdMode } from '@angular/core';
enableProdMode(); 
@Component({
  selector: 'rp-input',
  template: `
  <div>
    <label *ngIf="rpLabelRequired!='true'" class="{{rpLabelClass}} control-label" for="rpId" style="text-align: left;">{{rpLabel}}</label>
    <label *ngIf="rpLabelRequired=='true'" class="{{rpLabelClass}} control-label" for="rpId" style="text-align: left;">{{rpLabel}} <span style="color:red">*</span></label>
    
    <div class="{{rpClass}}">
        <input id="{{rpId}}"  *ngIf="rpReadonly!='true'&&rpRequired=='true'&&(rpType=='text'||rpType=='number'||rpType=='email'||rpType=='tel'||rpType=='url' ||rpType=='password')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)" required autocomplete="{{rpAutoComplete}}" placeholder="{{rpPlaceHolder}}"  [ngModelOptions]="{standalone: true}">
        <input id="{{rpId}}"  *ngIf="rpReadonly!='true'&&rpRequired!='true'&&(rpType=='text'||rpType=='number'||rpType=='email'||rpType=='tel'||rpType=='url' ||rpType=='password')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)"   autocomplete="{{rpAutoComplete}}" placeholder="{{rpPlaceHolder}}" [ngModelOptions]="{standalone: true}">
        <input id="{{rpId}}"  *ngIf="rpReadonly=='true'&&(rpType=='text'||rpType=='number'||rpType=='email'||rpType=='tel'||rpType=='url' ||rpType=='password')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)" readonly  autocomplete="{{rpAutoComplete}}" placeholder="{{rpPlaceHolder}}" [ngModelOptions]="{standalone: true}">

        <input id="{{rpId}}"  *ngIf="rpReadonly!='true'&&rpRequired=='true'&&(rpType=='date')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)" required autocomplete="{{rpAutoComplete}}" pattern="dd/MM/YYYY" [ngModelOptions]="{standalone: true}">
        <input id="{{rpId}}"  *ngIf="rpReadonly!='true'&&rpRequired!='true'&&(rpType=='date')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)"   autocomplete="{{rpAutoComplete}}" pattern="dd/MM/YYYY"  [ngModelOptions]="{standalone: true}">
        <input id="{{rpId}}"  *ngIf="rpReadonly=='true'&&(rpType=='date')" class="form-control" type="{{rpType}}" [ngModel]="rpModel" (ngModelChange)="updateData($event)" readonly  autocomplete="{{rpAutoComplete}}" pattern="dd/MM/YYYY"  [ngModelOptions]="{standalone: true}">

        <input id="{{rpId}}" *ngIf="(rpType=='boolean'||rpType=='checkbox')&& rpReadonly!='true'" class="{{rpClass}}" type="checkbox" [ngModel]="rpModel" (ngModelChange)="updateData($event)" [ngModelOptions]="{standalone: true}" >
        <input id="{{rpId}}" *ngIf="(rpType=='boolean'||rpType=='checkbox')&& rpReadonly=='true'" class="{{rpClass}}" type="checkbox" [ngModel]="rpModel" (ngModelChange)="updateData($event)" [ngModelOptions]="{standalone: true}" >

        <select id="{{rpId}}"  *ngIf="rpType=='gender'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov1.gender" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='gender'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov1.gender" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        
        <select id="{{rpId}}"  *ngIf="rpType=='mainmenu' && rpReadonly!='true'"  [(ngModel)]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.mainmenu" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='mainmenu'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov3.mainmenu" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
      
        <select id="{{rpId}}"  *ngIf="rpType=='status'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov1.status" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='status'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov3.status" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='type'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov1.type" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='type'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov1.type" value="{{item.value}}" >{{item.caption}}</option>
        </select>  

        <select id="{{rpId}}"  *ngIf="rpType=='atricleType'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov1.atricleType" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='atricleType'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov1.atricleType" value="{{item.value}}" >{{item.caption}}</option>
        </select>
         <select id="{{rpId}}"  *ngIf="rpType=='messageType'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov1.messageType" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='messageType'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov1.messageType" value="{{item.value}}" >{{item.caption}}</option>
        </select>
         
        <select id="{{rpId}}"  *ngIf="rpType=='ref002'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref002.data" value="{{item.t1}}" >{{item.t2}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='ref002'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref002.data" value="{{item.t1}}" >{{item.t2}}</option>
        </select>          
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref003'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref003" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref003'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control"  disabled="true">
            <option *ngFor="let item of ref._lov3.ref003" value="{{item.value}}" >{{item.caption}}</option>
        </select>        
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref004'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref004" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref004'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref004" value="{{item.value}}" >{{item.caption}}</option>
        </select>
          
        <select id="{{rpId}}"  *ngIf="rpType=='ref005'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref005.data" value="{{item.syskey}}" >{{item.t2}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref005'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref005.data" value="{{item.syskey}}" >{{item.syskey}}</option>
        </select>
                  
        <select id="{{rpId}}"  *ngIf="rpType=='ref006'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref006" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref006'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref006" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
        <select id="{{rpId}}"  *ngIf="rpType=='ref007'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref007" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
        <select id="{{rpId}}"  *ngIf="rpType=='ref007'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref007" value="{{item.value}}" >{{item.caption}}</option>
        </select>  
                
        <select id="{{rpId}}"  *ngIf="rpType=='ref008'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref008" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref008'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref008" value="{{item.value}}" >{{item.caption}}</option>
        </select>
          
        <select id="{{rpId}}"  *ngIf="rpType=='ref009'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref009" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref009'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref009" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref010'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref010" value="{{item.syskey}}" >{{item.t2}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref010'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref010" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        
         <select id="{{rpId}}"  *ngIf="rpType=='ref011'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref011" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref011'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref011" value="{{item.value}}" >{{item.caption}}</option>
        </select>

        <select id="{{rpId}}"  *ngIf="rpType=='ref012'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref012" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref012'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref012" value="{{item.value}}" >{{item.caption}}</option>
        </select>

        <select id="{{rpId}}"  *ngIf="rpType=='ref013'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref013" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref013'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref013" value="{{item.value}}" >{{item.caption}}</option>
        </select>

        <select id="{{rpId}}"  *ngIf="rpType=='ref014'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref014" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref014'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref014" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}"  *ngIf="rpType=='ref015'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref015" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='ref015'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.ref015" value="{{item.value}}" >{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='brand'&& rpReadonly!='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.brand" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='brand'&& rpReadonly=='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.brand" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='skuInfo'&& rpReadonly!='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.skuInfo" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='skuInfo'&& rpReadonly=='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.skuInfo" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='time'&& rpReadonly!='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.time" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='time'&& rpReadonly=='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.time" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='board'&& rpReadonly!='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref016" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='grandPrize'&& rpReadonly!='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.grandPrize" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='grandPrize'&& rpReadonly=='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.grandPrize" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='prize'&& rpReadonly!='true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ref017" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='couponPrizeType' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.couponPrizeType" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='currency' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" style="width :30px;">
            <option *ngFor="let item of ref._lov3.currency" value="{{item.caption}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='msgType' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.msgType" value="{{item.value}}">{{item.caption}}</option>
        </select>
          <select id="{{rpId}}" *ngIf="rpType=='msgType1' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.msgType1" value="{{item.value}}">{{item.caption}}</option>
        </select>
         <select id="{{rpId}}" *ngIf="rpType=='ePinSetup' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.ePinSetup" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='batchNo' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.batchNo" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='shortestcombo' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.shortestcombo" value="{{item.value}}">{{item.caption}}</option>
        </select>

        <select id="{{rpId}}" *ngIf="rpType=='winnercombo' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.winnercombo" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='toType' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.toType" value="{{item.value}}">{{item.caption}}</option>
        </select>
         <select id="{{rpId}}" *ngIf="rpType=='campaign' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.campaign" value="{{item.value}}">{{item.caption}}</option>
        </select>
        <select id="{{rpId}}" *ngIf="rpType=='luckyDraw' && rpReadonly != 'true'" [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.luckyDraw" value="{{item.value}}">{{item.caption}}</option>
        </select>

        
        <select id="{{rpId}}"  *ngIf="rpType=='printer'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.printer" value="{{item.value}}" >{{item.caption}}</option>
        </select>             
        <select id="{{rpId}}"  *ngIf="rpType=='printer'&& rpReadonly=='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control" disabled="true">
            <option *ngFor="let item of ref._lov3.printer" value="{{item.value}}" >{{item.caption}}</option>
        </select>

        <select id="{{rpId}}"  *ngIf="rpType=='apptypecombo'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.apptypecombo" value="{{item.value}}" >{{item.caption}}</option>
        </select> 
         <select id="{{rpId}}"  *ngIf="rpType=='membertype'&& rpReadonly!='true'"  [ngModel]="rpModel" (ngModelChange)="updateData($event)" class="form-control">
            <option *ngFor="let item of ref._lov3.membertype" value="{{item.value}}" >{{item.caption}}</option>
        </select> 

    </div>
  </div>
  
    <style>
        .customWidth {
            width:22%;
        }
    </style>
  
   `
})
export class RpInputComponent {
  subscription: Subscription;
  @Input() public rpId: string;
  @Input() public rpLabel: string;
  @Input() public rpClass: string;
  @Input() public rpLabelClass: string;
  @Input() public rpLabelStyle: string;
  @Input() public rpType: string;
  @Input() public rpRequired: string;
  @Input() public rpReadonly: string;
  @Input() public rpAutoComplete: string;
  @Input() public rpModel: any;
  @Input() public rpLabelRequired: string;
  @Input() public rpPlaceHolder: string;
 @Input() public imgPath:string = "WEB-INF/";
    
  @Output() public rpModelChange: any = new EventEmitter();
  @Output() public rpTest: any = new EventEmitter();
  public ref001: any;
  constructor(private ref: RpReferences, private ics: RpIntercomService, private _router: Router) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    if (this.rpId == null || this.rpId == "") this.rpId = "myid";
    if (this.rpLabelClass == null || this.rpLabelClass == "") this.rpLabelClass = "col-md-2";
    if (this.rpClass == null || this.rpClass == "") this.rpClass = "col-md-4";
    if (this.rpAutoComplete == null || this.rpAutoComplete == "") this.rpAutoComplete = "off";
  }
  updateData(event) {
        this.rpModel = event;
        this.rpModelChange.emit(event);
        if (this.rpModel == "123") this.rpTest.emit();
    }
    public hello() {
        return "?";
    }
}