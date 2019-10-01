import { Component, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { enableProdMode } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { RpReferences } from './framework/rp-references';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpSIDComponent } from './rp-sid.component';
import { RpBean } from './framework/rp-bean';
import { ClientUtil } from './util/rp-client.util';

enableProdMode(); 

@Component({
  selector: 'data-list',
  template: `
  
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
 
    <form class= "form-horizontal"  (ngSubmit)="goPost()" style="padding-top:15px;"> 
   
  


<div class="container"> 
    <br>

    <div class="row">
         

 <div class="col-md-12">
                    <!--Start Form with header-->
                    <form action="" method="post">
                        <div class="card border-primary rounded">
                            <div class="card-header p-0">
                                <div class="bg-info text-white text-center py-2">
                                    <h3><i class="fa fa-credit-card"></i> SID Data</h3>
                                    <p class="m-0">SID Data Lists</p>
                                </div>
                            </div>
                            <div class="card-body p-3">
                            
                            
                           
  <div class="row col-md-12">                   
                    <div class="input-group">
                            <label class="col-md-2 control-label" style="text-align: right;width: 14%;">Date:</label>
                            <div class="col-md-3">
                               <datetime [(ngModel)]="_dates.sdate" (ngModelChange)="searchByCustomDate()" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchByCustomDate()"></datetime>
                             </div>
                             <div class="col-md-3">
                                <datetime [(ngModel)]="_dates.edate" (ngModelChange)="searchByCustomDate()" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchByCustomDate()"></datetime>
                              </div>
                              <input [(ngModel)]="_searchVal" type="text" placeholder="Search" class="form-control my-0 py-1 red-border" [ngModelOptions]="{standalone: true}" (keyup.enter)="searchVal()">
                                <div class="input-group-append">
                                    <span class="input-group-text red lighten-3"  (click)="searchVal()" id="basic-text1"><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
                                </div>
                       </div>
                       </div>  
                                 <div class="col-md-12">&nbsp;</div> 
                           <div class="table-responsive">
                              <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                                <thead>
                          
                                <tr>

                                    <th > CDC NO</th>
                                    <th > QUEUE NO </th>
                                    <th > TRANSACTION CODE </th>
                                    <th > REASON</th>
                                    <th > NAME</th>
                                    <th > RANK</th>
                                    <th > NRC NO </th>                                    
                                    <th > PLACE OF BIRTH</th>
                                    <th > NATIONALITY</th>
                                    <th > MANNING AGENT</th>
                                    <th > GENDAR </th>
                                    <th > HEIGHT</th>
                                    <th > WEIGHT</th>
                                    <th>COMPLEXION</th>
                                    <th>MATERIAL STATUS</th>
                                    <th>EDUCATION</th>
                                    <th>IDENTIFYING CHARACTERISTICS</th>
                                    <th>RELEGION CODE</th>
                                    <th>TELEPHONE NUMBER</th>
                                    <th>SEASERVICE START DATE</th>
                                    <th>PASSPORT NUMBER</th>
                                    <th>PASSPORT ISSUE DATE</th>
                                    <th>PASSPORT EXPIRED DATE</th>
                                    <th>PASSPORT ISSUE BY</th>
                                    <th>PASSPORT ISSUE PLACE</th>
                                    <th>CODE INDEX</th>
                                    <th>CDC ISSUE DATE</th>
                                    <th>CDC EXPIRY DATE</th>
                                    <th>CDC ISSUE BY</th>
                                    <th>CDC ISSUE PLACE</th>
                                    <th>FATHER NAME</th>
                                    <th>FATHER NRC</th>
                                    <th>MOTHER NAME</th>
                                    <th>MOTHER NRC</th>
                                    <th>ADDRESS PERMANENT</th>
                                    <th>ADDRESS TEMPORARY</th>
                                    <th>NOK NAME</th>
                                    <th>NOK RELATION</th>
                                    <th>NOK ADDRESS</th>
                                    <th>SHIP NAME</th>
                                    <th>SIGNON DATE</th>
                                    <th>SIGNOFF DATE</th>
                                    <th>APPOINTMENT DATE</th>
                                    <th>ACCESS TIME</th>
                                    <th>ISDELETED</th>
                                    <th>SISSUED</th>
                                    <th>EMAIL</th>                             
                                </tr>
                                </thead>
                                <tr *ngFor="let obj of _array">
                                <td>{{obj.CDC_NO}}</td>
                                <td>{{obj.QUEUE_NO}}</td>
                                <td>{{obj.TRANSACTION_CODE}}</td>
                               <td>{{obj.REASON}}</td>
                               <td>{{obj.NAME}}</td>
                               <td>{{obj.OTHER_NAME}}</td>
                               <td>{{obj.RANK}}</td>
                               <td>{{obj.DOB}}</td>
                               <td>{{obj.NRC_NO}}</td>
                               <td>{{obj.POB}}</td>
                               <td>{{obj.NATIONALITY}}</td>
                               <td>{{obj.MANNING_AGENT}}</td>
                               <td>{{obj.GENDER}}</td>
                               <td>{{obj.HEIGHT}}</td>
                               <td>{{obj.WEIGHT}}</td>
                               <td>{{obj.COMPLEXION}}</td>
                               <td>{{obj.MARITAL_STATUS_CODE}}</td>
                               <td>{{obj.EDUCATION}}</td>
                               <td>{{obj.IDENTIFYING_CHARACTERISTICS}}</td>
                               <td>{{obj.RELIGION_CODE}}</td>
                               <td>{{obj.TELEPHONE_NUMBER}}</td>
                               <td>{{obj.SEASERVICE_DATE_START}}</td>
                               <td>{{obj.PASSPORT_NUMBER}}</td>
                               <td>{{obj.PASSPORT_ISSUE_DATE}}</td>
                               <td>{{obj.PASSPORT_EXPIRY_DATE}}</td>
                               <td>{{obj.PASSPORT_ISSUE_BY}}</td>
                               <td>{{obj.PASSPORT_ISSUE_PLACE}}</td>
                               <td>{{obj.CODEINDEX}}</td>
                               <td>{{obj.CDC_ISSUE_DATE}}</td>
                               <td>{{obj.CDC_EXPIRY_DATE}}</td>
                               <td>{{obj.CDC_ISSUE_BY}}</td>
                               <td>{{obj.CDC_ISSUE_PLACE}}</td>
                               <td>{{obj.FATHER_NAME}}</td>
                               <td>{{obj.FATHER_NRC}}</td>
                               <td>{{obj.MOTHER_NAME}}</td>
                               <td>{{obj.MOTHER_NRC}}</td>
                               <td>{{obj.ADDRESS_PERMANENT}}</td>
                               <td>{{obj.ADDRESS_TEMPORARY}}</td>
                               <td>{{obj.NOK_NAME}}</td>
                               <td>{{obj.NOK_RELATION}}</td>
                               <td>{{obj.NOK_ADDRESS}}</td>
                               <td>{{obj.SHIP_NAME}}</td>
                               <td>{{obj.SIGNON_DATE}}</td>
                               <td>{{obj.SIGNOFF_DATE}}</td>
                               <td>{{obj.APPOINTMENTDATE}}</td>
                               <td>{{obj.ISDELETED}}</td>
                               <td>{{obj.ISISSUED}}</td>
                               <td>{{obj.EMAIL}}</td>
                                </tr>

                                </table>
                                <pager id="pgclaim" rpPageSizeMax="100" [(rpCurrent)]="_srchobj.pager.current" [(rpModel)]="_totalcount" (rpChanged)="changedPager($event)"></pager>


                            </div>
                         
              
                               <div class="text-center">
                                
                                <button class="btn btn-info"  id="cancel" type="button" (click)="goView()">Go Back</button>
                                <button class="btn btn-info" type="button" [disabled]="flagExport" (click)="goExcel()">Export</button>
                                </div>

     </div>
                        </div>
                    </form>
                    <!--Form with header-->

                    </div>
                </div>
    
</div>

   
    
    </form>
    
  `
})
export class DataListComponent {
 
  subscription: Subscription;
  _excelUrl: SafeResourceUrl;
  _array = [];
  _totalcount = 1;
    _searchVal = "";
    _adsearch = [];
    _flagas = true;
    _sort = "desc";
    _type = "0";
    _flagSortCode = false;
    _flagSortDesc = false;
    _srchobj = { "pager": { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 }, "search": [] };
    _obj = {"data": [{"CDC_NO":"","QUEUE_NO":"","TRANSACTION_CODE":"","REASON":"","NAME":"","OTHER_NAME":"","RANK":"","DOB":null,"NRC_NO":"","POB":"","NATIONALITY":"","MANNING_AGENT":"","GENDER":"","HEIGHT":"","WEIGHT":"","COMPLEXION":"","MARITAL_STATUS_CODE":"","EDUCATION":"","DENTIFYING_CHARACTERISTICS":"","RELIGION_CODE":"","TELEPHONE_NUMBER":"","SEASERVICE_DATE_START":"","PASSPORT_NUMBER":"","PASSPORT_ISSUE_DATE":null,"PASSPORT_EXPIRY_DATE":null,"PASSPORT_ISSUE_BY":"","PASSPORT_ISSUE_PLACE":"","CODEINDEX":"","CDC_ISSUE_DATE":null,"CDC_EXPIRY_DATE":null,"CDC_ISSUE_BY":"","CDC_ISSUE_PLACE":"","FATHER_NAME":"","FATHER_NRC":"","MOTHER_NAME":"","MOTHER_NRC":"","ADDRESS_PERMANENT":"","ADDRESS_TEMPORARY":"","NOK_NAME":"","NOK_RELATION":"","NOK_ADDRESS":"","SHIP_NAME":"","SIGNON_DATE":null,"SIGNOFF_DATE":null,"APPOINTMENTDATE":null,"ISDELETED":"","ISISSUED":"","EMAIL":""}]}
    datepickerOpts: any;
    _dates = { "sdate": null, "edate": null };
    startDate = null;
    endDate = null;
    _util: ClientUtil = new ClientUtil();
     flagExport = false;
    
 constructor(private ics: RpIntercomService,private _router: Router,private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences, private sanitizer: DomSanitizer){
     this.subscription = ics.rpbean$.subscribe(x => { });
     this.datepickerOpts = this.ics._datepickerOpts;
     this._dates.sdate = new Date();//todaydate
     this._dates.edate = new Date();//todaydate
     this.startDate = this._util.getDatePickerDate(this._dates.sdate);
     this.endDate = this._util.getDatePickerDate(this._dates.sdate);
     this.search(this._srchobj);
     
   // this.searchVal();
  }
  
   goView( ) {
        this._router.navigate(['/login']);
    }
  
//    goNew() {
        
//       this._obj = {"data": [{"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,
//    "syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n13":0,"n14":0,
//    "n11":0,"n12":0,"state":false,"t9":"","t1":"","t2":"","t5":"","t6":"","t3":"","t7":"","t10":"","t4":"","t8":"","msg":""}]}
//         this._router.navigate(['slip']);
//     }
  
  

    
    search(p) {
        if (p.pager.end == 0) { p.pager.end = this.ics._profile.n1; }
        if (p.pager.size == 0) { p.pager.size = this.ics._profile.n1; }
        let url: string = this.ics._apiurl + 'service001/searchSlip?searchVal=' + this._searchVal + "&sort=" + this._sort + "&type=" + this._type+ "&sdate=" + this.startDate + "&edate=" + this.endDate;;
        let json: any = p;
        this.http.doPost(url, json).subscribe(
            response => {
              // console.log(JSON.stringify(response) + " get data");
                if (response != null && response != undefined && response.state) {
                    this._totalcount = response.totalCount;
                    this._array  = response.data;
                   // console.log(JSON.stringify(this._array) + "  list "  );
                    

                   
                }
                else {
                    //this._obj.data = [];
                    this._array = [];                        
                    this._totalcount = 1;
                    this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
                }
            },
            error => { },
            () => { }
        );
    }
    searchVal() {
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 1, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = [];
        this.search(this._srchobj);
    }
    changeAS(event) {
        this._adsearch = event;
        this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 1, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
        this._srchobj.search = this._adsearch;
        this.search(this._srchobj);
    }
    
    hideShowAS(event) {
        this._flagas = event;
    }
    changedPager(event) {
        let k = event.flag;
        this._srchobj.pager = event.obj;
        this._srchobj.search = this._adsearch;
        if (k) { this.search(this._srchobj); }
    }
    changeDefault() {
        this._flagSortCode = false;
        this._flagSortDesc = false;
    }
   
    addSort(e) {
        if (e == 1) {
            if (!this._flagSortCode) {
                this.changeDefault();
                this._flagSortCode = true;
                this._sort = "desc";
                this._type = "1";
                this.search(this._srchobj);
            }
            else if (this._flagSortCode) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "1";
                this.search(this._srchobj);
            }
        } else if (e == 2) {
            if (!this._flagSortDesc) {
                this.changeDefault();
                this._flagSortDesc = true;
                this._sort = "desc";
                this._type = "2";
                this.search(this._srchobj);
            }
            else if (this._flagSortDesc) {
                this.changeDefault();
                this._sort = "asc";
                this._type = "2";
                this.search(this._srchobj);
            }
        }
    }
    
      searchByCustomDate() {
        this._srchobj = { "pager": { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 }, "search": [] };
        this.startDate = this._util.getDatePickerDate(this._dates.sdate);
        this.endDate = this._util.getDatePickerDate(this._dates.edate);
        if (this.startDate != "" || this.endDate != "") {
            if (this.startDate <= this.endDate) {
                this.search(this._srchobj);
            } else {
                this.ics.sendBean({ "t1": "rp-alert", "t2": "warning", "t3": "Start date should not be greater than to date." });
            }
        }

    }
    
    
    goExcel() {
        
        var filename = "SlipList_";
      
       let url = this.ics._apiurl + 'service001/SlipExcelExport?searchVal='+ this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
       this._excelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ics._apiurl + 'service001/SlipExcelExport?searchVal='+ this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate);
       var redirectWindow = window.open(url,' _blank').focus();
      // this.flagExport = false;

  

    }
  
}