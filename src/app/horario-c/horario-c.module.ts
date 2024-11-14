import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioCPageRoutingModule } from './horario-c-routing.module';

import { HorarioCPage } from './horario-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioCPageRoutingModule
  ],
  declarations: [HorarioCPage]
})
export class HorarioCPageModule {}
