import {Component, Input,Output,EventEmitter} from '@angular/core'; 
import {RpIntercomService} from '../framework/rp-intercom.service';  
import {RpHttpService} from '../framework/rp-http.service';
import { Subscription }   from 'rxjs/Subscription';
declare var jQuery: any;  
import {RpReferences} from '../framework/rp-references'; 

@Component({
    selector: 'ad-search-item',
    template:`  
    <div *ngIf="!_flag">
    <button class="btn  btn-sm btn-primary" type="button" (click)="showSearch()" >
      Advanced <span class="glyphicon glyphicon-search"></span>
    </button>
    </div>
    <div *ngIf="_flag">
    <div class="row  col-md-12"> 
      <button class="btn  btn-sm btn-primary" type="button" (click)="addSearch()" >Add Filter</button>  
      <button class="btn  btn-sm btn-primary" type="button" (click)="goSearch()" >Search</button>       
      <button class="btn  btn-sm btn-primary" type="button" (click)="clearSearch()">Clear</button>
      <button class="btn  btn-sm btn-primary" type="button" (click)="hideSearch()" >Hide</button>    
    </div>
    <div class="row col-sm-12">&nbsp;</div>
    <table style="font-size:14px;width:70%;">
    <tr *ngFor="let obj of _ads">        
    <td style="width: 2%">
    <img src="image/remove.png" alt="remove.png" height="20" width="20" (click)="removeSearch(obj)"/>
    </td> 
    <td style="width: 32%">
    <select [(ngModel)]="obj.dbname" (click)="getIndex(obj)" (change)="changeField($event.target.value)" class="form-control input-sm">
    <option *ngFor="let item of obj.fields" value="{{item.dbname}}">{{item.caption}}</option>
    </select>
    </td> 
    <td style="width: 32%">
      <select *ngIf="obj.type=='string'" [(ngModel)]="obj.condition" class="form-control input-sm">
        <option *ngFor="let item of ref._lov1.string" value="{{item.value}}" >{{item.caption}}</option>
      </select>
      <select *ngIf="obj.type=='numeric'" (click)="getIndex(obj)" (change)="enableBet($event.target.value)" [(ngModel)]="obj.condition" class="form-control input-sm">
          <option *ngFor="let item of ref._lov1.numeric" value="{{item.value}}" >{{item.caption}}</option>
      </select>
      <select *ngIf="obj.type=='date'" (click)="getIndex(obj)" (change)="enableBet($event.target.value)" [(ngModel)]="obj.condition" class="form-control input-sm">
          <option *ngFor="let item of ref._lov1.date" value="{{item.value}}" >{{item.caption}}</option>
      </select>
      <select *ngIf="obj.type=='combo001'" [(ngModel)]="obj.t1" class="form-control input-sm">
          <option *ngFor="let item of ref._lov3.ref003" value="{{item.value}}" >{{item.caption}}</option>
      </select>  
    </td>
    <td style="width: 32%">
      <input id="textinput" *ngIf="obj.type=='string' && obj.t3!='true'" type="text" [(ngModel)]="obj.t1" class="form-control input-sm">
      <input id="textinput" *ngIf="obj.type=='numeric' && obj.t3!='true'" type="number" [(ngModel)]="obj.t1" class="form-control input-sm">
      <div *ngIf="obj.type=='numeric' && obj.t3=='true'" class="input-group">
      <input id="textinput" *ngIf="obj.type=='numeric' && obj.t3=='true'" type="number" [(ngModel)]="obj.t1" class="form-control input-sm" style="width: 50%"> 
      <input id="textinput" *ngIf="obj.type=='numeric' && obj.t3=='true'" type="number" [(ngModel)]="obj.t2" class="form-control input-sm" style="width: 50%"> 
      </div>      
      <input id="textinput" *ngIf="obj.type=='date' && obj.t3!='true'" type="date" [(ngModel)]="obj.t1" class="form-control input-sm"> 
      <div *ngIf="obj.type=='date' && obj.t3=='true'" class="input-group">
      <input id="textinput" *ngIf="obj.type=='date' && obj.t3=='true'" type="date" [(ngModel)]="obj.t1" class="form-control input-sm" style="width: 50%"> 
      <input id="textinput" *ngIf="obj.type=='date' && obj.t3=='true'" type="date" [(ngModel)]="obj.t2" class="form-control input-sm" style="width: 50%"> 
      </div>           
    </td> 
         
    </tr> 
    </table>
    </div>
    `,
})
export class AdvancedSearchItem {
  subscription: Subscription;
  @Input() rpId: string;
  @Input() rpModel: any;
  @Output() rpModelChange: any = new EventEmitter();
  @Output() rpChanged: any = new EventEmitter();
  @Output() rpHidden: any = new EventEmitter();

  _count = 0;

  _ads = [];
  _tmps = [];
  _tmp = {"uf":""};
  _fieldnames = [];
  _index : any;
  fields = [];

  _flag = false;

  constructor(private ics: RpIntercomService, private http: RpHttpService, private ref: RpReferences) {
    if (this.rpId == null || this.rpId == "") this.rpId = "myid";
    this.http.doGet('json/adsearch.json?random=' + Math.random()).subscribe(
      data => {
        this.fields = data.item;
        this._count =this.fields.length;
        this.initializeAS();
      },
      error => //alert(error),
      () => { }
    );
  }
  ngAfterContentInit() {
     
  }
  ngOnChanges(rpModel) {
    
  } 
  initializeAS(){
    let k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "", "t3": "", "fields": [] };
    k.dbname = this.fields[0].dbname;
    k.caption = this.fields[0].caption;
    k.type = this.fields[0].type;
    k.condition = this.fields[0].condition;
    k.t1 = this.fields[0].t1;
    k.t2 = this.fields[0].t2;
    k.t3 = this.fields[0].t3;
    k.fields = this.fields;
    this._ads[0] = k;
  } 
  showSearch(){
    this._flag = true;
    this.rpHidden.emit(false);
  }
  hideSearch(){
    let as = []; 
    this.clearSearch();
    this._flag = false;
    this.rpHidden.emit(true);
    this.rpChanged.emit(as);
  }
  addSearch() {
    let t = [];
    let flag = true;
    this._tmps = this._ads[(this._ads.length - 1)].fields;

    this._tmp.uf = this._ads[(this._ads.length - 1)].dbname;

    for (let j = 0; j < this._fieldnames.length; j++) {
      if (this._tmp.uf == this._fieldnames[j].uf) {
        flag = false;
      }
    }
    if(flag){
      this._fieldnames.push(this._tmp);
    }
    for (let i = 0; i < this._tmps.length; i++) {
      for (let j = 0; j < this._fieldnames.length; j++) {
        if (this._tmps[i].dbname != this._fieldnames[j].uf) {
          t.push(this._tmps[i]);
        }
      }
    }    
    if (this._count > 1 && t != undefined) {
      let k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "", "t3": "", "fields": [] };
      k.dbname = t[0].dbname;
      k.caption = t[0].caption;
      k.type = t[0].type;
      k.condition = t[0].condition;
      k.t1 = t[0].t1;
      k.t2 = t[0].t2;
      k.t3 = t[0].t3;
      k.fields = t;
      this._ads[this._ads.length] = k;
      this._count = this._count - 1;
    }  
  }
  removeSearch(p) {
    if (this._count < this.fields.length) {
      let index = this._ads.indexOf(p);
      let field = p.dbname;
      for (let j = 0; j < this._fieldnames.length; j++) {
        if (field == this._fieldnames[j].uf) {
          this._fieldnames.splice(j,1);
        }
      }
      let flag = true;
      for (let i = 0; i < this._ads[(this._ads.length - 1)].fields.length; i++) {
        if (field == this._ads[(this._ads.length - 1)].fields[i].dbname) {
          flag = false;
        }
      }
      if(flag){
        let k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "", "t3": ""};
        k.dbname = p.dbname;
        k.caption = p.caption;
        k.type = p.type;
        k.condition = p.condition;
        k.t1 = p.t1;
        k.t2 = p.t2;
        k.t3 = p.t3;
        this._ads[(this._ads.length - 1)].fields.push(k);
      }      
      this._ads.splice(index, 1);
      if(this._ads.length == 1){
        this._ads[0].fields = this.fields;
      }
      this._count = this._count+1;
    }
  }
  clearSearch() {
    this._count =this.fields.length;
    this._ads = [];
    this._tmps = [];
    this._tmp = { "uf": "" };
    this._fieldnames = [];
    this.initializeAS();
  }
  goSearch(){
    let as = [];    
    for (let i = 0; i < this._ads.length; i++) {
      let k = { "dbname": "", "caption": "", "type": "", "condition": "", "t1": "", "t2": "" };
      k.dbname = this._ads[i].dbname;
      k.caption = this._ads[i].caption;
      k.type = this._ads[i].type;
      k.condition = this._ads[i].condition;
      k.t1 = this._ads[i].t1;
      k.t2 = this._ads[i].t2;
      as.push(k);
    }
    this.rpChanged.emit(as);
  }
  getIndex(p){
    this._index = this._ads.indexOf(p);
  }
  enableBet(p){
    let index = this._index;
    if(p=="bt"){
      this._ads[index].t3 = "true";
    }else{
      this._ads[index].t3 = "";
    }
  }
  changeField(p){
    let field = p;
    let index = this._index;    
    for(let i = 0; i < this.fields.length; i++){
      if(this.fields[i].dbname == field){
        this._ads[index].dbname = this.fields[i].dbname;
        this._ads[index].caption = this.fields[i].caption;
        this._ads[index].type = this.fields[i].type;
        this._ads[index].condition = this.fields[i].condition;
        this._ads[index].t1 = this.fields[i].t1;
        this._ads[index].t2 = this.fields[i].t2;
        this._ads[index].t3 = this.fields[i].t3;        
      }
    }    
  }
}
