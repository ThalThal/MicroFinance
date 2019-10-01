import { Component, Input ,Output, EventEmitter, HostListener, HostBinding,  } from '@angular/core';
import { Router } from '@angular/router';
import { RpIntercomService } from './rp-intercom.service'; 
import { Subscription }   from 'rxjs/Subscription';
import { enableProdMode } from '@angular/core';
enableProdMode(); 
@Component({
  selector: 'rp-menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" style="background-color: #17A2B8;">
  <div class="menucontainer col-md-12">
    <!--<a class="navbar-brand" [routerLink]="[_profile.logoLink]">
     <img alt="Home" title="Home" src="image/MKL.jpg">
    </a>-->
     <a class="navbar-brand" style="color:#ffffff; padding-top:10px;" [routerLink]="[_profile.logoLink]">{{_profile.logoText}}</a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNavDropdown"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

     <div id="navbar" class="navbar-collapse collapse">
          <ul *ngIf="_profile.menus!=null" class="nav navbar-nav">
            <li *ngFor="let item of _profile.menus;" [class]="item!=null&&item.menuItem==''?'dropdown':''">
                    <a (click)="clk()"  *ngIf="item!=null && item.menuItem!='' && item.menuItem!=null"  [routerLink]="[item.menuItem]">{{item.caption}}</a> 
                    <a  *ngIf="item!=null && item.menuItem=='' && item.menuItem!=null"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">{{item.caption}}<span class="caret"></span></a> 
                      <ul *ngIf="item!=null && item.menuItems!=null" class="dropdown-menu">
                        <li *ngFor="let subitem of item.menuItems;"><a (click)="clk()" *ngIf="subitem!=null && subitem.menuItem!='' && subitem.menuItem!=undefined && subitem.menuItem!=null" [routerLink]="[subitem.menuItem]" class ="ex1">{{subitem.caption}}</a></li> 
                      </ul>
            </li>  
          </ul>
          <div  *ngIf="_right" class=" navbar-right">
            <!--<input (keyup.enter)="cmd();clk();" [(ngModel)]="_cmd" *ngIf="_profile.commandCenter!='false'" placeholder=" Search"  type="text" class="nav navbar-nav " style="margin-top: 15px;margin-left: 0px;margin-right: 5px; width:180px;">-->
            <span class="navbar-brand" style="font-size:14px" > {{_profile.userName}} </span>
            <ul *ngIf="_profile.rightMenus!=null" class="nav navbar-nav">
            <li *ngFor="let item of _profile.rightMenus;" [class]="item!=null&&item.menuItem==''?'dropdown':''">
                    <a (click)="clk()"  *ngIf="item!=null && item.menuItem!='' && item.menuItem!=null"  [routerLink]="[item.menuItem]">{{item.caption}}</a> 
                    <a   *ngIf="item!=null && item.menuItem=='' && item.menuItem==null && item.caption!='System'"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">{{item.caption}} <span class="caret"></span></a>                     
                    <a   *ngIf="item!=null && item.menuItem=='' && item.menuItem!=null && item.caption=='System'"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><i class="fa fa-cog" aria-hidden="true"></i><span class="caret"></span></a>
                      <ul *ngIf="item!=null && item.menuItems!=null" class="dropdown-menu">
                        <li *ngFor="let subitem of item.menuItems;" ><a (click)="clk()" *ngIf="subitem!=null && subitem.menuItem!='' && subitem.menuItem!=undefined && subitem.menuItem!=null" [routerLink]="[subitem.menuItem]">{{subitem.caption}}</a></li> 
                      </ul>
            </li>  
            </ul>
            </div>
        </div>
  </div>
</nav>
  `,
  styleUrls: ['css/menu.css']
})
export class RpMenuComponent {
  subscription: Subscription;
  _brandname = '';
  _right = true;
  _cmd = "";
  _profile = {
    "userName": "?",
    "logoText": "AG2",
    "logoLink": "/Menu00",
    "role": 100,
    "t4" : "",
    "commandCenter": "false",
    "menus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
      { "menuItem": "Menu02", "caption": "Menu 02" },
      { "menuItem": "Menu03", "caption": "Menu 03" },
      {
        "menuItem": "", "caption": "Menu Group",
        "menuItems":
        [
          { "menuItem": "Menu01", "caption": "Menu 001" },
          { "menuItem": "Menu02", "caption": "Menu 002" },
          { "menuItem": "Menu03", "caption": "Menu 003" },
          { "menuItem": "Menu04", "caption": "Menu 004" },
          { "menuItem": "Menu05", "caption": "Menu 005" },
          { "menuItem": "Menu06", "caption": "Menu 006" },
          { "menuItem": "Menu07", "caption": "Menu 007" }
        ]
      }
    ],
    "rightMenus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
      { "menuItem": "Menu02", "caption": "Menu 02" },
      { "menuItem": "Menu03", "caption": "Menu 03" },
      {
        "menuItem": "", "caption": "Menu Group",
        "menuItems":
        [{ "menuItem": "Menu01", "caption": "Menu 001" },
          { "menuItem": "Menu02", "caption": "Menu 002" },
          { "menuItem": "Menu03", "caption": "Menu 003" }]
      }
    ]
  };
  constructor(private ics: RpIntercomService, private _router: Router) {
    this._profile = ics._profile;
    console.log(JSON.stringify(this._profile) + " menu obj");
    this.subscription = ics.rpbean$.subscribe(x => { this._profile = ics._profile; });
  }
  
  cmd() {
    this._router.navigate(['/command', this._cmd]);
  }
 /* clk() {
    document.getElementById("navbar").className = "navbar-collapse collapse";
  }*/
  clk() {
    document.getElementById("navbar").className = "navbar-collapse collapse";
  }
}