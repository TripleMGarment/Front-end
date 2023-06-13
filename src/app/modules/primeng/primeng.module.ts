import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

const modules = [
    DropdownModule,
    ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [...modules]
})

export class PrimengModule { }
