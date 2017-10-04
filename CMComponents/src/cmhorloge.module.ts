import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorlogeComponent } from './horloge/horloge.component';

@NgModule({
  declarations: [
    HorlogeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [HorlogeComponent]
})
export class CMHorlogeModule { }
