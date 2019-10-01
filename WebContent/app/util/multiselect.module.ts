import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RpInputModule } from '../framework/rp-input.module';

import { RpHttpService } from '../framework/rp-http.service';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpReferences } from '../framework/rp-references';
import { MultiselectDropdown } from '../util/multiselect-dropdown';
import { MultiselectPipeModule } from '../util/multiselect-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientUtil } from '../util/rp-client.util';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RpInputModule,
    MultiselectPipeModule,
    ReactiveFormsModule
  ],
  declarations: [
      MultiselectDropdown
  ],
  exports: [
      MultiselectDropdown
  ],
  providers: [
    RpHttpService,
    RpIntercomService,
    RpReferences,
    ClientUtil,
    MultiselectPipeModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MultiselectModule { }