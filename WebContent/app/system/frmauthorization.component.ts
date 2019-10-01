// RP Framework
import { Component, Input, OnInit, OnDestroy,ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription}   from 'rxjs/Subscription';
import { enableProdMode } from '@angular/core'; 
// RP Framework
import {RpIntercomService} from '../framework/rp-intercom.service'; 
import {RpInputComponent} from '../framework/rp-input.component';
import {RpHttpService} from '../framework/rp-http.service'; 
import {RpBean} from '../framework/rp-bean'; 
import {RpReferences} from '../framework/rp-references';
import {ClientUtil} from '../util/rp-client.util'; 

declare var jQuery: any; 
enableProdMode(); 
// Application Specific

@Component ({
    selector: 'frmauthorization',
    template: `
        <div class="container">
            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 column col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
                    <form class="form-horizontal" (ngSubmit)="goPost()">
                        <fieldset>
                            <legend>Authorization</legend>

                            <div class="form-group">
                                <div class="col-md-12">
                                    <button class="btn btn-primary" type="button" (click)="goNew()" >New</button>
                                    <button class="btn btn-success" id = "btnsave" type="button" (click)="goSave()">Save</button> 
                                    <button class="btn btn-primary" type="button" (click)="goList();" >List</button>                              
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-md-2">Customer Name</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <input type="text" id="textinput" name="textinput" [(ngModel)]="_obj.t3" required class="form-control input-md" >
                                        <span class="input-group-btn input-md">
                                            <button class="btn btn-primary input-md" type="button" (click)="search()">
                                                <span class="glyphicon glyphicon-list"></span>&nbsp;
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <rp-input id="company" rpType="ref005" rpClass="col-md-4" [(rpModel)]="_obj.n1" rpLabelClass="col-md-2" rpLabel="Company Name"></rp-input>
                            </div>

                            <!--<div class="form-group">
                                <rp-input id="class" rpType="ref012" rpClass="col-md-4" [(rpModel)]="_obj.n3" rpLabelClass="col-md-2" rpLabel="Tier"></rp-input>
                            </div> -->

                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Zarla</a></li>
                                <li><a data-toggle="tab" href="#tab2">Brand</a></li> 
                            </ul>

                            <div class="tab-content">
                                <div id="tab1" class="tab-pane fade in active"> 
                                    <div class="row col-md-12">&nbsp;</div>
                                    <rp-input id="class" rpType="ref012" rpClass="col-md-4" [(rpModel)]="_obj.n3" rpLabelClass="col-md-2" rpLabel="Tier"></rp-input>
                                </div>
                                <div id="tab2" class="tab-pane fade"> 
                                    <div class="row col-md-12">&nbsp;</div>
                                    <div class="col-md-4"><button class="btn btn-primary" type="button" (click)="goADD()" >ADD</button></div>
                                    <div class="row col-md-12">&nbsp;</div>
                                    <table id="brandTable" class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                                        <thead>
                                            <tr>
                                                <th>Tier  </th>
                                                <th>Brand   </th> 
                                                <th> </th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr *ngFor="let obj of _array; let k=index">
                                                <td><rp-input id="class" rpType="ref012" rpClass="col-md-4" [(rpModel)]="obj.tier" rpLabelClass="col-md-2" rpLabel="Tier"></rp-input></td> 
                                                <td><rp-input id="class" rpType="ref002" rpClass="col-md-4" [(rpModel)]="obj.brand"rpLabelClass="col-md-2" rpLabel="Brand"></rp-input></td>
                                                <td align="center" ><img src="image/delete.png" id="btnRemove" style="width: 20px;height: 20px;" (click)="goRemove(k)"/></td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                </div> 
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div id="Modal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Choose Customer</h4>
                    </div>
                    <div class="modal-body">
                        <div style="overflow : hidden; position: relative;">
                             <frmcustomer-list [(rpModel)]="_frmCusRpModel" (rpChanged)="changeItem($event)" style="height:100%" ></frmcustomer-list> 
                        </div>
                     </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class FrmAuthorizationComponent implements OnInit, OnDestroy {
    // Rp framework
    subscription:Subscription;

    // Application Specific
    sub;
    _frmCusRpModel= false;

    _result = {"state": false, "msgCode":"", "msgDesc":""};

    _array = [{"tier":"","brand":""}];
    _msgDesc = "";
    _refreshing = true;
    _obj={"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,"syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n11":0,"n12":0,"n13":0,"n14":0,"n15":0,"n16":0,"n17":0,"n18":0,"n19":0,"n20":0,"t25":"","t24":"","t1":"","t9":"","t2":"","t4":"","t14":"","t12":"","t18":"","t19":"","t5":"","t6":"","t8":"","t16":"","t20":"","t15":"","t7":"","t21":"","t11":"","t22":"","t3":"","t17":"","t10":"","t13":"","t23":"","tb":[]};

    constructor(private ics: RpIntercomService, private _router: Router, private http: RpHttpService, private ref: RpReferences, private route: ActivatedRoute) {
       
        this.subscription = ics.rpbean$.subscribe( x => { })

        if ( !ics.getRole() || ics.getRole() == 0) {
            this._router.navigate(['/login']);
            this._refreshing = false;
        }

        this.getCompany();
        this.getClass();
        this.getBrandList();
    }

    ngOnInit() {
        jQuery("#btndelete").prop("disabled", true);
        this.sub = this.route.params.subscribe(params => {
        let cmd = params['cmd'];
      
          if (cmd != null && cmd != "" && cmd == "NEW") {
             this.goNew();
             this._frmCusRpModel = false;
          } else if (cmd != null && cmd != "" && cmd == "READ") {
            this._frmCusRpModel = false;
            let syskey = params['id'];
            this.goGet(syskey);    
         }
        });
    }

    goADD(){
        var obj = {"tier":"","brand":""};
        this._array.push(obj);
    }

    goRemove(index){
        var temp = [];
        for(var i=0; i<this._array.length; i++){
            if(index != i){
                temp.push(this._array[i]);
            }
        }
        this._array = [];
        this._array = temp;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getCompany() {
        if(this._refreshing == true){
            this.http.doGet(this.ics._apiurl + "service001/getCompanylist").subscribe(

            response => {
                if( (response != null || response != undefined) && response.data.length > 1 )
                this.ref._lov3.ref005 = response;
            },
            error => {
                alert(error);
            },
            () => { }
        )
        }
    }

    getClass() {
        if(this._refreshing == true){
            this.http.doGet(this.ics._apiurl + "serviceRule/getClass").subscribe(
            response => {
                if( (response != null || response != undefined) && response.data.length > 1 )
                this.ref._lov3.ref012 = response.data;
            },
            error => {
                alert(error);
            },
            () => { }
        )
        }
    }

    getBrandList(){
      if(this._refreshing == true){
          this.http.doGet(this.ics._apiurl + 'serviceBrand/getAllBrandList').subscribe(
        response => {
              console.log(" this._spobj"+ JSON.stringify(response));
          if ((response != null || response != undefined ) && response.data.length >1) {
              this.ref._lov3.ref002 = response;
          }
        },
        error =>{
          alert(error);
        },
        () => { }
      );
      }
    }

    goNew() {
        jQuery("#btndelete").prop("disabled", true);
        this._obj={"syskey":0,"autokey":0,"createddate":"","modifieddate":"","userid":"","username":"","recordStatus":0,"syncStatus":0,"syncBatch":0,"usersyskey":0,"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0,"n8":0,"n9":0,"n10":0,"n11":0,"n12":0,"n13":0,"n14":0,"n15":0,"n16":0,"n17":0,"n18":0,"n19":0,"n20":0,"t25":"","t24":"","t1":"","t9":"","t2":"","t4":"","t14":"","t12":"","t18":"","t19":"","t5":"","t6":"","t8":"","t16":"","t20":"","t15":"","t7":"","t21":"","t11":"","t22":"","t3":"","t17":"","t10":"","t13":"","t23":"","tb":[]};
        this._array = [{"tier":"","brand":""}];

    }

    goSave() {
        this._obj.tb = this._array;
        if(this.isValid()) {
            jQuery("#btnsave").prop("disabled", true);
            let url:string = this.ics._apiurl + "serviceRegister/saveAuthorization";
            let json:any = this._obj;
                this.http.doPost(url, json).subscribe(
                response => {
                    if(response != null || response != undefined) {
                        if(response.state) {
                            this._frmCusRpModel = false;
                            jQuery("#btndelete").prop("disabled", true);
                            this.ics.sendBean({"t1": "rp-alert", "t2": "success", "t3": response.msgDesc});  
                        }

                    } else{
                    this.ics.sendBean({"t1": "rp-alert", "t2": "danger", "t3": response.msgDesc}); 
                    }
                    jQuery("#btnsave").prop("disabled", false);

                },
                error => alert(error),
                () => { }
            );
        } else {
            this.ics.sendBean({"t1": "rp-alert", "t2": "warning", "t3": this._result.msgDesc});
        }
    }

    goList(){
        this._router.navigate(['authorization-list']);
    }

    search() {
        this._frmCusRpModel = true;
        jQuery("#Modal").modal();
    }

    changeItem(event) { 
        jQuery("#Modal").modal('hide');
    }

    goGet(p) {
        jQuery("#btndelete").prop("disabled", false);
        this.http.doGet(this.ics._apiurl + "serviceRegister/readByEMPSK?syskey=" + p).subscribe(
            response => {
                
                if(response != null || response != undefined)
                this._obj = response;
                this._array = this._obj.tb;

            },
            error => {
                alert(error)
            },
            () => { }
        );
    }

    isValid() {

        if(this._obj.t3 == "" || this._obj.t3 == null) {
            this._result.msgDesc = "Choose Customer!.";
            return false;
        }

        if (this._obj.n1 == 0 || this._obj.n1 == null) {
            this._result.msgDesc = "Select Company Name!.";
            return false;
        }

        if (this._obj.n3 == 0 || this._obj.n3 == null) {
            this._result.msgDesc = "Select Class For Zarla Board!.";
            return false;
        }

        if (this._obj.tb.length > 0) {
            for(var i=0; i<this._obj.tb.length; i++){
                if(this._obj.tb[i].tier == 0){
                    this._result.msgDesc = "Select Tier For Brand Board!.";
                    return false;
                }
                if(this._obj.tb[i].brand == "-"){
                    this._result.msgDesc = "Select Brand For Brand Board!.";
                    return false;
                }
            }
        }

        return true;
    }

}