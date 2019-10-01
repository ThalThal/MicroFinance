import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RpSIDComponent } from './rp-sid.component';
import { DataListComponent } from './data-list.component';
import { RpFinanceLoginComponent } from './rp-financelogin.component';
import { RpSIDUpdateComponent } from './rp-sidupdate.component';
import { RpRegistrationComponent } from './rp-registration.component';
import { RpRegistrationListComponent } from './rp-registrationlist.component';
import { RpUpdateListComponent } from './rp-updatelist.component';
import { RpImportExcelComponent } from './rp-importexcel.component';
import { RpFinanceDataUpdateComponent } from './rp-financedataupdate.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/Register',
    pathMatch: 'full'
  } , {
    path: 'datalist/:sdate/:edate', 
    component: DataListComponent
  },
  {
    path: 'SIDUpdate/:cdcno', 
    component: RpSIDUpdateComponent
  },
  {
    path: 'Register', 
    component: RpRegistrationComponent
  },
  {
    path: 'UpdateData/:id', 
    component: RpFinanceDataUpdateComponent
  },
  {
    path: 'RegistrationList', 
    component: RpRegistrationListComponent
  },
  {
    path: 'UpdateClientList', 
    component: RpUpdateListComponent
  },
  {
    path: 'ImportExcel', 
    component: RpImportExcelComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
