import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpReferences } from './framework/rp-references'; 
import { ClientUtil } from './util/rp-client.util';  
declare var jQuery: any; 
enableProdMode();
@Component({
  selector: 'rp-root',
  styleUrls: ['css/snackbar.css'],
  template: `
    <div id="snackbar">{{_alertmsg}}</div>
    <rp-menu *ngIf="showmenu"></rp-menu>

    <!---  <div class="container col-md-12">
      <div id="alert" class={{_alerttype}} [hidden]="_alertflag">
        {{_alertmsg}}
      </div>
    </div>    --->

    <router-outlet></router-outlet>
    <div id="rootpopup" class="modal fade" role="dialog">
      <div id="rootpopupsize" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="rootpopuptitle" class="modal-title">RP Report ***</h4>
          </div>
          <div id="rootpopupbody" class="modal-body">
          </div>
           <div class="modal-footer">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
          </div> 
        </div>
      </div>
    </div>

    <!---- added by anh (2017-07-03) to test ---->

    <div id="rootpopup1" class="modal fade" role="dialog">
        <div id="rootpopupsize1" class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 id="rootpopuptitle1" class="modal-title">RP Report ***</h4>
                </div>
                <div id="rootpopupbody1" class="modal-body">
                    Signing in
                    <div id="wy">
                        <div id="wy_1" class="wy"></div>
                        <div id="wy_2" class="wy"></div>
                        <div id="wy_3" class="wy"></div>
                        <div id="wy_4" class="wy"></div>
                        <div id="wy_5" class="wy"></div>
                        <div id="wy_6" class="wy"></div>
                        <div id="wy_7" class="wy"></div>
                        <div id="wy_8" class="wy"></div>
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
export class RpRootComponent {
  showmenu: boolean;
  _alertflag = true;
  _alertmsg = "";
  _alerttype = "";
  _util: ClientUtil = new ClientUtil();
  _comboobj = { "value": "", "caption": "" };
  array = [{ "value": "", "caption": "" }];
  constructor(private ics: RpIntercomService, private http: RpHttpService, private ref: RpReferences, private title: Title) {
    this.showmenu = false;
    ics.rpbean$.subscribe(x => {
      this.showmenu = ics.isMenuBar();
      if (x.t1!==null && x.t1=="rp-popup") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-lg');
          jQuery("#rootpopuptitle").text(x.t2);
          jQuery("#rootpopupbody").load(x.t3);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-wait") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
          jQuery("#rootpopuptitle").text("Please Wait");
          jQuery("#rootpopupbody").text(x.t2);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-error") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
          jQuery("#rootpopuptitle").text("System Exception");
          jQuery("#rootpopupbody").text(x.t2);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-msg") {
          jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
          jQuery("#rootpopuptitle").text(x.t2);
          jQuery("#rootpopupbody").text(x.t3);
          jQuery("#rootpopup").modal();
      } else if (x.t1!==null && x.t1=="rp-msg-off") { 
          jQuery("#rootpopuptitle").text("");
          jQuery("#rootpopupbody").text(""); 
          jQuery("#rootpopup").modal('hide');
      } else if (x.t1!==null && x.t1=="rp-alert") {

        this._alertmsg = x.t3;
        let _snack_style = 'msg-info';
        if(x.t2 == "success") _snack_style = 'msg-success';
        else if(x.t2 == "warning") _snack_style = 'msg-warning';
        else if(x.t2 == "danger") _snack_style = 'msg-danger';
        else if(x.t2 == "information") _snack_style = 'msg-info';
        let snackbar = document.getElementById("snackbar");
        snackbar.className = "show "+_snack_style;
        setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
          
//          this._alerttype = "alert alert-"+x.t2+" fade in";
//          console.log(x.t2+", "+this._alerttype);
//          this._alertmsg = x.t3; 
//          this._alertflag = false;
//          setTimeout(() => this._alertflag = true, 3000);          
      } 
    });
    this.init();
  }
  init() {
    this.http.doGet('json/config.json?random=' + Math.random()).subscribe(
      data => {
        this.ics._title = data.title;
        this.ics._app = data.app;
        this.ics._appname = data.appname;
        this.title.setTitle(this.ics._title);
        this.ics._apiurl = data.apiurl;
        this.ics._rpturl = data.rpturl;
        this.ics._wsurl = data.wsurl;
        this.ics._uploadurl= data.uploadurl;
        this.ics._regurl = data.regurl;
      },

      () => { }
    );
    this.http.doGet('json/lov3.json?random=' + Math.random()).subscribe(
      data => {
        this.ref._lov3 = data;
        
       
        //this.getItemTypeList();
      },

      () => { }
    );
  }
  
}
