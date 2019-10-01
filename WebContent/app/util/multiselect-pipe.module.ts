import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RpInputModule } from '../framework/rp-input.module';
import { RpHttpService } from '../framework/rp-http.service';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpReferences } from '../framework/rp-references';
import { SearchFilter } from '../util/multiselect-pipe';
import { ClientUtil } from '../util/rp-client.util';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RpInputModule,
    
  ],
  declarations: [
      SearchFilter
  ],
  exports: [
      SearchFilter
  ],
  providers: [
    RpHttpService,
    RpIntercomService,
    RpReferences,
    ClientUtil
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MultiselectPipeModule { }