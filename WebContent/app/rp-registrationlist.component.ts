import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpBean } from './framework/rp-bean';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { RpReferences } from './framework/rp-references';
import { ClientUtil } from './util/rp-client.util';
import { RpSIDUpdateComponent } from './rp-sidupdate.component';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
enableProdMode(); 
@Component({
  selector: 'rp-registrationlist',
  template: ` 
 
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
 

   <div class="list-container">
           <img id="profile-img" class="profile-img-card" src="image/DPlogo.png" />
           <div class="text-center">
             <h3 style="color:green"><strong> Diamond Palace Microfinance </strong></h3>
           </div>
           
           
           
<form class="form-update">     
          
            <div class="row"> <!-- First Main row Start   -->
                   <div class="col-md-12"> <!-- First Main md12 Start   -->    
                          <div class="card border-success rounded">
                                      <div class="card-header p-0">
                                          <div class="bg-success text-white text-center py-2">
                                              <h3><i class="fa fa-users"></i>  Client Information List <i class="fa fa-users"></i> </h3>
                                          </div>
                                      </div>
                                     
                                     
                                                
                <!-- ----------------------Search--------------------------- -->
                   <div class="row col-md-12  mt-5">                   
                    <div class="input-group">                                           
                         <label class="col-md-2 control-label" style="text-align: right;width: 14%;"><strong>Choose Date:</strong></label>
                                    <div class="col-md-3">
                                         <datetime [(ngModel)]="_dates.sdate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchByCustomDate()"></datetime>
                                    </div>
                                    <div class="col-md-3">
                                        <datetime [(ngModel)]="_dates.edate" [datepicker]="datepickerOpts" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchByCustomDate()"></datetime>
                                    </div>
                                    
                                     
                                      <div style="float:right;">
                                            <div class="input-group md-form form-sm ">
                                                <div class="input-group-append"> 
                                                    <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" [(ngModel)]="_searchVal" [ngModelOptions]="{standalone: true}" (keyup.enter)= "searchVal()" aria-label="Search">
                                                    <span class="input-group-text red lighten-3"  (click)="searchVal()" id="basic-text1"><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
                                              </div>
                                             </div>
                                      </div>
                                      &nbsp;
                                       <div class="text-center">
                                            <input type="submit" value="Download Excel" class="btn btn-info bth-sm" (click)="downloadExcel()" [disabled]=flagExport>
                                       </div>
                                 
                            </div>
                         </div>      
                              <br> 
                   <!-- -------------------EndSearch-------------------------- --> 
                                     
                                     
                         <div class="box-body table-responsive no-padding mt-3">
                            <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                                <tr>
                                    <th style="background-color:#D4BD00;"> ID </th>
                                    <th style="background-color:#D4BD00;"> Center No </th>
                                    <th style="background-color:#D4BD00;"> Group No </th>
                                    <th style="background-color:#D4BD00;"> Loan No </th>
                                    <th style="background-color:#D4BD00;"> Collection Day </th>
                                    <th style="background-color:#D4BD00;"> Loan Officer Name </th>
                                    <th style="background-color:#D4BD00;"> Client Name </th>
                                    <th style="background-color:#D4BD00;"> Gender </th>
                                    <th style="background-color:#D4BD00;"> Age </th>
                                    <th style="background-color:#D4BD00;"> Current Age </th>
                                    <th style="background-color:#D4BD00;"> Husband/Father Name </th>
                                    <th style="background-color:#D4BD00;"> Joining Date </th>  
                                    <th style="background-color:#D4BD00;"> NRC Number </th>         
                                    <th style="background-color:#D4BD00;"> Township Name </th>
                                    <th style="background-color:#D4BD00;"> Ward/Village Tract Name </th>
                                    <th style="background-color:#D4BD00;"> Village Name/ Center Name</th>
                                    <th style="background-color:#D4BD00;"> Address</th>
                                    <th style="background-color:#D4BD00;"> Remarks</th>
                                    <th style="background-color:#D4BD00;"> Group Committes </th>
                                    <th style="background-color:#D4BD00;"> Replace/Subsittute</th>
                                    <th style="background-color:#D4BD00;"> Group Dissolve Date</th>
                                    <th style="background-color:#D4BD00;"> Old Group</th>
                                    <th style="background-color:#D4BD00;"> Date Of Birth</th>
                                    <th style="background-color:#D4BD00;"> Phone Number </th>
                                    <th style="background-color:#D4BD00;" colspan="3"> Action Status </th>
                                </tr>
                                
                                
                               <tr *ngFor="let obj of _array">
                                <td>{{obj.id}} </td>
                                <td>{{obj.centerNo}} </td>
                                <td>{{obj.groupNo}} </td>
                                <td>{{obj.loaneeNo}} </td>
                                <td>{{obj.collectionDay}} </td>  
                                <td>{{obj.loanOfficerName}}</td>
                                <td>{{obj.clientName}} </td>
                                <td>{{obj.gender}} </td>
                                <td>{{obj.age}} </td>
                                <td>{{obj.currentAge}} </td>  
                                <td>{{obj.husbandORfatherName}} </td>
                                <td>{{obj.joiningDate}} </td>
                                <td>{{obj.nrcNumber}} </td>
                                <td>{{obj.townshipName}} </td>
                                <td>{{obj.wardORvillageTractName}} </td>  
                                <td>{{obj.villageNameORcenterName}} </td>
                                <td>{{obj.address}} </td>
                                <td>{{obj.remarks}} </td>
                                <td>{{obj.groupCommittees}} </td>
                                <td>{{obj.replaceORsubstitute}} </td>  
                                <td>{{obj.groupDissolveDate}} </td>
                                <td>{{obj.oldGroup}} </td>
                                <td>{{obj.dob}} </td>                             
                                <td>{{obj.phNumber}} </td>                                
                                <td><button class="btn btn-info btn-flat btn-xs" title="Edit" type="button" (click)="goDownload(obj.filePath)"><i class="fa fa-download"></i></button></td>
                                 <td><button class="btn btn-success btn-flat btn-xs" title="Edit" type="button" (click)="goUpdate(obj.id)"><i class="fa fa-edit"></i></button></td>
                                 <td> <button class="btn btn-danger btn-flat btn-xs" title="Delete" type="button" (click)="goDelete(obj.id,obj.filePath)"><i class="fa fa-trash"></i></button></td>
                                
                                
                                </tr>

                                </table>
                                
                                <pager id="pgclaim" rpPageSizeMax="100" [(rpCurrent)]="_srchobj.pager.current" [(rpModel)]="_totalcount" (rpChanged)="changedPager($event)"></pager>


                           </div> <!-- End box body tabel -->
                         
              
                               <div class="text-center">                                
                                   <input type="submit" value="Go Back" class="btn btn-success bth-sm mt-5"  (click)="goView()">
                               </div>        
                                     
                                     
                                     
                                     
                          </div> <!-- Card Border End  -->         
                       </div> <!-- Main Md12 End  -->
                </div> <!-- First Main Row End  -->       
            
             
             
        
             
 </form>
         
  </div> <!-- List Container End  -->
   
  
  `
})
export class RpRegistrationListComponent {
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
    _obj = {"data": [{"centerNo":null,"groupNo":null,"loaneeNo":null,"collectionDay":null,"loanOfficerName":null,"clientName":null,"gender":null,"age":0,"currentAge":0,"husbandORfatherName":null,"joiningDate":null,"nrcNumber":null,"townshipName":null,"wardORvillageTractName":null,"villageNameORcenterName":null,"address":null,"remarks":null,"groupCommittees":null,"replaceORsubstitute":null,"groupDissolveDate":null,"oldGroup":null,"result":null,"dob":null,"phNumber":null,"filePath":null}]}
    datepickerOpts: any;
    _dates = { "sdate": null, "edate": null };
    startDate = null;
    endDate = null;
    _util: ClientUtil = new ClientUtil();
     flagExport = true;
     
    
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
        this._router.navigate(['Register']);
    }
  
   goDelete(id,filePath) {
          let url: string = this.ics._apiurl + 'control/DeleteData';
        let profile: any={"id" : id,"filePath" : filePath};
        this.http.doPost(url, profile).subscribe(
            data => {
              // console.log(JSON.stringify(response) + " get data");
                if (data != null && data != undefined && data.state) {
                    if(data.state){
                        this.ics.sendBean({ "t1": "rp-alert", "t2": "success", "t3": "Delete Successful" });
                        this.search(this._srchobj);
                    }else{
                        this.ics.sendBean({ "t1": "rp-alert", "t2": "Error", "t3": "Delete Unsuccessful" });
                    }
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
  
  

    
    search(p) {
        if (p.pager.end == 0) { p.pager.end = this.ics._profile.n1; }
        if (p.pager.size == 0) { p.pager.size = this.ics._profile.n1; }
        let url: string = this.ics._apiurl + 'control/searchData?searchVal=' + this._searchVal + "&sort=" + this._sort + "&type=" + this._type+ "&sdate=" + this.startDate + "&edate=" + this.endDate;;
        let json: any = p;
        this.http.doPost(url, json).subscribe(
            data => {
              // console.log(JSON.stringify(response) + " get data");
                if (data != null && data != undefined && data.state) {
                    this._totalcount = data.totalCount;
                    this._array  = data.data;
                    if(this._array != null){
                        this.flagExport=false;
                    }
                  
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
    
    
    downloadExcel() {
        
        var filename = "DataList_";
      
       let url = this.ics._apiurl + 'control/FinanceDataExcelExport?searchVal='+ this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate;
       this._excelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ics._apiurl + 'service001/S-ExcelExport?searchVal='+ this._searchVal + "&filename=" + filename + "&sort=" + this._sort + "&type=" + this._type + "&sdate=" + this.startDate + "&edate=" + this.endDate);
       var redirectWindow = window.open(url,' _blank').focus();
    }
    // goDownload(){
        
    //      let url = this.ics._apiurl + 'control/DownloadAttachment?filename=USER20190919162959.pdf';
      
    //    var redirectWindow = window.open(url,' _blank').focus();
    // }
    goDownload(filePath){
         let url = this.ics._apiurl + 'control/DownloadAttachment?filePath='+filePath;      
       var redirectWindow = window.open(url,' _blank').focus();
    }
    goUpdate(id){
        this._router.navigate(['UpdateData',id]);
    }
  
}