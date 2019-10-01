import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RpInputModule } from '../framework/rp-input.module';

import { RpHttpService } from '../framework/rp-http.service';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpReferences } from '../framework/rp-references';

import {Pager} from '../util/pager.component';
import {ClientUtil} from '../util/rp-client.util';
import {AdvancedSearchItemType} from '../util/advancedsearch-itemtype';
import {AdvancedSearchItem} from '../util/advancedsearch-item';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RpInputModule
  ],
  declarations: [
    AdvancedSearchItemType,
    AdvancedSearchItem
  ],
  exports: [
    AdvancedSearchItemType,
    AdvancedSearchItem
  ],
  providers: [
    RpHttpService,
    RpIntercomService,
    RpReferences,
    ClientUtil
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdvancedSearchModule { }