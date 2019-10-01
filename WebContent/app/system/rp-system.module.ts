import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RpInputModule } from '../framework/rp-input.module';
import { PagerModule } from '../util/pager.module';

import { FrmUserComponent } from './frmuser.component';
import { FrmUserList } from './frmuserlist.component';
import { FrmRoleComponent } from './frmrole.component';
import { FrmRoleList } from './frmrolelist.component';
import { FrmMenuComponent } from './frmmenu.component';
import { FrmMenuList } from './frmmenulist.component';
import { FrmChangePasswordComponent }  from './frmchangePassword.component';
import { FrmPaginatorComponent }  from './frmpager.component';

import { FrmAuthorizationComponent } from './frmauthorization.component';
import { FrmCustomerListComponent } from './frmCustomerList.component';
import { FrmAuthorizationListComponent } from './frmauthorization-list.component'

import { systemRouting } from './rp-system.route';


import { RpHttpService } from '../framework/rp-http.service';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpInputComponent } from '../framework/rp-input.component';
import { RpReferences } from '../framework/rp-references';

import {Pager} from '../util/pager.component';
import {ClientUtil} from '../util/rp-client.util';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RpInputModule,
    PagerModule,
    systemRouting
  ],
  declarations: [    
    FrmUserComponent,
    FrmUserList,
    FrmRoleComponent,
    FrmRoleList,
    FrmMenuComponent,
    FrmMenuList,
    FrmChangePasswordComponent,
    FrmPaginatorComponent,
    FrmAuthorizationComponent,
    FrmCustomerListComponent,
    FrmAuthorizationListComponent 
  ],
  providers: [
    RpHttpService,
    RpIntercomService,
    RpReferences,
    ClientUtil
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SystemModule { }