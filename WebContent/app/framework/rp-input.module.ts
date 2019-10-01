import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RpInputComponent } from './rp-input.component';

import { RpIntercomService } from './rp-intercom.service'; 
import { RpReferences } from './rp-references'; 

const INPUT_MODULES = [
'rp-input'
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [    
    RpInputComponent
  ],
  exports: [
    RpInputComponent
  ],
  providers: [
    RpIntercomService,
    RpReferences
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    RpInputComponent
  ]
})
export class RpInputModule { }