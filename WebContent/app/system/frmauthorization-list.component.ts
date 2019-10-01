import {Component} from '@angular/core';
import {Router} from '@angular/router';

// RP framework
import{RpIntercomService} from '../framework/rp-intercom.service';
import{RpHttpService} from '../framework/rp-http.service';
import {ClientUtil} from '../util/rp-client.util'


@Component ({
    selector: 'frmauthorization-list',
    template: `
        <div class="container col-md-12">
            <form class="form-inline">
                <legend>Authorization List</legend>
                <div class="row col-md-12">&nbsp;</div>
                <div class="input-group">
                    <span class="input-group-btn input-md">
                        <button class="btn btn-primary" type="button" (click)="goNew()">Authorization</button>
                    </span>
                    <input id="textinput" name="textinput" type="text" placeholder="Search" [(ngModel)]="_searchVal" 
                        [ngModelOptions] = "{standalone : true}" (keyup.enter)="searchVal()" class="form-control input-md">
                    <span class="input-group-btn input-md">
                        <button class="btn btn-primary input-md" type="button" (click)="searchVal()">
                            <span class="glyphicon glyphicon-search"></span>Search
                        </button>
                    </span>
                    <span class="input-group-btn input-md" style="width:70px">
                        <button class="btn btn-primary input-md" type="button" (click)="getRegister()">Show All</button>
                    </span>
                </div>
            </form>

            <pager id="pgclaim" rpPageSizeMax="100" [(rpCurrent)]="_srchobj.pager.current" [(rpModel)]="_totalcount" (rpChanged)="changedPager($event)"></pager>
            <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                <thead>
                <tr>
                    <th>Customer Name  <img src="image/sortAsc.png" [hidden]="_flagSortName" alt="sortAsc.png" height="12" width="15" (click)="addSort(1)"/>
                                    <img src="image/sortDesc.png" [hidden]="!_flagSortName" alt="sortDesc.png" height="12" width="15" (click)="addSort(1)"/></th>
                    <th>Company Name  <img src="image/sortAsc.png" [hidden]="_flagSortCom" alt="sortAsc.png" height="12" width="15" (click)="addSort(2)"/>
                                    <img src="image/sortDesc.png" [hidden]="!_flagSortCom" alt="sortDesc.png" height="12" width="15" (click)="addSort(2)"/></th>
                    <th>Tier <img src="image/sortAsc.png" [hidden]="_flagSortClass" alt="sortAsc.png" height="12" width="15" (click)="addSort(5)"/>
                                    <img src="image/sortDesc.png" [hidden]="!_flagSortClassg" alt="sortDesc.png" height="12" width="15" (click)="addSort(5)"/></th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let obj of _array">
                    <td><a (click)="goto(obj.syskey)">{{obj.t3}}</a></td>
                    <td>{{obj.t10}}</td>
                    <td>{{obj.t11}}</td>
                </tr> 
                </tbody>
            </table>

        </div>
    `,

})

export class FrmAuthorizationListComponent {

    _util:ClientUtil = new ClientUtil();
    _totalcount = 1;
    _searchVal = "";
    _array = [];
    _sort = "asc";
    _type = "1";

    _flagSortName = false;
    _flagSortCom = false;
    _flagSortClass = false;

    _srchobj = {"pager":{ "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 },"search":[]};
   
    _obj={"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,"syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n11":0,"n12":0,"n13":0,"n14":0,"n15":0,"n16":0,"n17":0,"n18":0,"n19":0,"n20":0,"t25":"","t24":"","t1":"","t9":"","t2":"","t4":"","t14":"","t12":"","t18":"","t19":"","t5":"","t6":"","t8":"","t16":"","t20":"","t15":"","t7":"","t21":"","t11":"","t22":"","t3":"","t17":"","t10":"","t13":"","t23":""};

    constructor(private ics: RpIntercomService, private _router: Router, private http: RpHttpService) {
        if(!ics.getRole() || ics.getRole() == 0) _router.navigate(['/login']);
        this.search(this._srchobj);

    }

    changedPager(event){
    	let k = event.flag;
        this._srchobj.pager = event.obj;
        if (k) { this.search(this._srchobj);}

  	}

    search(p){
        if(p.pager.end == 0){p.pager.end = this.ics._profile.n1;}
        if(p.pager.size == 0){p.pager.size = this.ics._profile.n1;}
        let url: string = this.ics._apiurl + 'serviceRegister/browseAuthorization?viewType=2&searchVal='+this._searchVal+"&sort="+this._sort+"&type="+this._type;
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
                this.ics.sendBean({ "t1": "rp-alert", "t2": "danger", "t3": "Data not found!" });
            }         
        },
            error => { },
            () => { }
        );
    }

    goto(p) {
        this._router.navigate(['/authorization', 'READ', p]);
    }

    goNew() {
        this._router.navigate(['/authorization','NEW'])
    }

    searchVal() {
      this._srchobj.pager = { "current": 1, "prev": 1, "last": 1, "next": 2, "start": 1, "end": 0, "size": 0, "totalcount": 1 };
      this._srchobj.search = [];
      this.search(this._srchobj);
    }

    getRegister() {
        this._searchVal="";
        this.http.doGet(this.ics._apiurl + 'serviceRegister/getAuthList?viewType=2&searchVal=' + this._searchVal ).subscribe(
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

    changeDefault() {
        this._flagSortName = false;
        this._flagSortCom = false;
        this._flagSortClass = false;
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
    } else if (e == 2) {
        if (!this._flagSortCom) {
            this.changeDefault();
            this._flagSortCom = true;
            this._sort = "desc";
            this._type = "2";
            this.search(this._srchobj);
        }
        else if (this._flagSortCom) {
            this.changeDefault();
            this._sort = "asc";
            this._type = "2";
            this.search(this._srchobj);
        }
    } else if (e == 5) {
        if (!this._flagSortClass) {
            this.changeDefault();
            this._flagSortClass = true;
            this._sort = "desc";
            this._type = "5";
            this.search(this._srchobj);
        }
        else if (this._flagSortClass) {
            this.changeDefault();
            this._sort = "asc";
            this._type = "5";
            this.search(this._srchobj);
        }
    } 
} 

}