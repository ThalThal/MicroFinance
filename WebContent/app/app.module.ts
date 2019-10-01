import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NKDatetimeModule } from 'ng2-datetime';
import {Pager} from './util/pager.component';
import { RpRootComponent } from './rp-root.component';
import { routing } from './app.routing';
import { SystemModule } from './system/rp-system.module';


import { RpInputModule } from './framework/rp-input.module';
import { PagerModule } from './util/pager.module';
import { AdvancedSearchModule } from './util/advancedsearch.module';

import { RpSIDComponent } from './rp-sid.component';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpMenuComponent } from './framework/rp-menu.component';
import { RpInputComponent } from './framework/rp-input.component';
import { RpReferences } from './framework/rp-references';
import {ClientUtil} from './util/rp-client.util';
import { DataListComponent } from './data-list.component';
import { RpFinanceLoginComponent } from './rp-financelogin.component';
import { RpSIDUpdateComponent } from './rp-sidupdate.component';
import { RpRegistrationComponent } from './rp-registration.component';
import { RpRegistrationListComponent } from './rp-registrationlist.component';
import { RpUpdateListComponent } from './rp-updatelist.component';
import { RpImportExcelComponent } from './rp-importexcel.component';
import { RpFinanceDataUpdateComponent } from './rp-financedataupdate.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RpInputModule,
    SystemModule,    
    AdvancedSearchModule, 
    PagerModule,   
    NKDatetimeModule
   
    
  ],
  declarations: [
    RpRootComponent,
    RpSIDComponent,
    RpMenuComponent,
    DataListComponent,
    RpFinanceLoginComponent,
    RpSIDUpdateComponent,
    RpRegistrationComponent,
    RpRegistrationListComponent,
    RpUpdateListComponent,
    RpImportExcelComponent,
    RpFinanceDataUpdateComponent
    
  ],
  providers: [
    RpHttpService,
    RpIntercomService,
    RpReferences,
    ClientUtil,
    { provide: APP_BASE_HREF, useValue : '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [RpRootComponent]
})
export class AppModule {
}
