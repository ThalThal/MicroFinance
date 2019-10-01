import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core'; 
import {RpIntercomService} from '../framework/rp-intercom.service';  
import {RpHttpService} from '../framework/rp-http.service';
import { Subscription }   from 'rxjs/Subscription';
import { enableProdMode } from '@angular/core';
enableProdMode(); 
@Component({
    selector: 'pager',
    template:`  
    <div>
    <table><tr><td>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link"  style="color:#4285F4" (click)="goFirst()">First</a>
        </li>
        <li class="page-item">
          <a class="page-link"  style="color:#4285F4" (click)="goPrev()">Prev</a>
        </li>
        <li class="page-item">
          <span class="page-link">
            <select [(ngModel)]="currentPage" class="page-item" (ngModelChange)="changPage()" >
              <option *ngFor="let item of _pages" value="{{item.value}}" >{{item.caption}}</option>
            </select>
          </span>
        </li>
        <li class="page-item">
          <a class="page-link"  style="color:#4285F4" (click)="goNext()">Next</a>
        </li>
        <li class="page-item">
          <a class="page-link" style="color:#4285F4" (click)="goLast()">Last</a>
        </li>        
      </ul>      
    </nav>
    </td><td>    
        &nbsp;<span>{{start}} - {{end}} of {{totalCount}}</span>
    </td></tr></table>
    </div>
    `,
})
export class Pager implements OnInit {
  subscription: Subscription;
  @Input() rpId: string;
  @Input() rpClass: string;
  @Input() rpModel: number;
  @Input() rpCurrent: number;
  @Output() rpModelChange: any = new EventEmitter();
  @Output() rpChanged: any = new EventEmitter();

  _pages = [];

  currentPage = 1;
  prev = 1;
  last = 1;
  next = 2;
  start = 1;
  end: number;
  pageSize: number;
  totalCount = 1;

  /* currentPage = 0;
  prev = 0;
  last = 0;
  next = 0;
  start = 0;
  end: number;
  pageSize: number;
  totalCount = 0;*/

  _flag = false;

  _obj = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };

  constructor(private ics: RpIntercomService, private http: RpHttpService) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    if (this.rpId == null || this.rpId == "") this.rpId = "myid";
    if (this.rpClass == null || this.rpClass == "") this.rpClass = "col-md-3"; 
    if (this.rpModel == null || this.rpModel < 0) this.rpModel = 1;
    if (this.rpCurrent == null || this.rpCurrent < 0) this.rpCurrent = 1;
  }
  ngOnInit() {
    this.pageSize = this.ics._profile.n1;
    this.totalCount = +this.rpModel;
    this.updatePager(this.currentPage);
  }
  ngOnChanges(rpModel,rpCurrent) {
    this.currentPage = this.rpCurrent;
    this.updatePager(this.currentPage);
  }
  updatePager(k) {
    //custom pager by hms... 20160614 11:00pm... ymk...
    this.pageSize = this.ics._profile.n1;    
    this.totalCount = +this.rpModel;    
    this.last = Math.ceil(this.totalCount / this.pageSize);    
    this.fillPages();
    let num = +k;
    this.currentPage = num;
    this.prev = num > 1 ? num - 1 : 1;
    this.next = (num + 1) < this.last ? (num + 1) : this.last;
    this.start = this.totalCount < 1 ? this.totalCount : ((num - 1) * this.pageSize) + 1;
    this.end = (num * this.pageSize) > this.totalCount ? this.totalCount : (num * this.pageSize);
    
    this._obj = { 
      "current": this.currentPage, "prev": this.prev, "last": this.last, 
      "next": this.next, "start": this.start, "end": this.end, "size": this.pageSize, 
      "totalcount": this.totalCount
    };
    
    let data = { "obj" : this._obj, "flag" : this._flag };
    this.rpChanged.emit(data);
  }
  fillPages() {
    this._pages = [];
    let num = Math.ceil(this.totalCount / this.pageSize);
    for (let i = 1; i <= num; i++) {
      let k = { "value": 0, "caption": "" };
      k.value = i;
      k.caption = "" + i;
      this._pages.push(k);
    }
  }
  goFirst() {
    this._flag = true;
    this.currentPage = 1;
    this.updatePager(this.currentPage);
  }
  goLast() {
    this._flag = true;
    this.currentPage = Math.ceil(this.totalCount / this.pageSize);
    this.updatePager(this.currentPage);
  }
  goPrev() {
    this._flag = true;
    let k = this.prev;
    this.updatePager(k);
  }
  goNext() {
    this._flag = true;
    let k = this.next;
    this.updatePager(k);
  }
  changPage() {
    this._flag = true;
    this.updatePager(this.currentPage);
  }
}
