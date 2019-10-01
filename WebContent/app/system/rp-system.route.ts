import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrmUserComponent }    from './frmuser.component';
import { FrmUserList }  from './frmuserlist.component';
import { FrmRoleComponent }    from './frmrole.component';
import { FrmRoleList }  from './frmrolelist.component';
import { FrmMenuComponent }    from './frmmenu.component';
import { FrmMenuList }  from './frmmenulist.component';
import { FrmChangePasswordComponent }  from './frmchangePassword.component';
import { FrmPaginatorComponent }  from './frmpager.component';
import { FrmAuthorizationComponent } from './frmauthorization.component'
import { FrmAuthorizationListComponent } from './frmauthorization-list.component'

const systemRoutes: Routes = [
  {
    path: 'user',
    component: FrmUserComponent
  }, {
    path: 'user/:cmd',
    component: FrmUserComponent
  }, {
    path: 'user/:cmd/:id',
    component: FrmUserComponent
  }, {
    path: 'userList',
    component: FrmUserList
  }, {
    path: 'role',
    component: FrmRoleComponent
  }, {
    path: 'role/:cmd',
    component: FrmRoleComponent
  }, {
    path: 'role/:cmd/:id',
    component: FrmRoleComponent
  }, {
    path: 'roleList',
    component: FrmRoleList
  }, {
    path: 'menu',
    component: FrmMenuComponent
  }, {
    path: 'menu/:cmd',
    component: FrmMenuComponent
  }, {
    path: 'menu/:cmd/:id',
    component: FrmMenuComponent
  }, {
    path: 'menuList',
    component: FrmMenuList
  }, {
    path: 'changepassword',
    component: FrmChangePasswordComponent
  }, {
    path: 'setpager',
    component: FrmPaginatorComponent
  }, {
    path: 'authorization',
    component: FrmAuthorizationComponent
  }, {
    path: 'authorization/:cmd',
    component: FrmAuthorizationComponent
  }, {
    path: 'authorization/:cmd/:id',
    component: FrmAuthorizationComponent
  }, {
    path: 'authorization-list',
    component: FrmAuthorizationListComponent
  }
  
];

export const systemRouting: ModuleWithProviders = RouterModule.forChild(systemRoutes);