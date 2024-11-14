import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { clasesPageRoutingModule } from './clases-routing.module';

import { clasesPage } from './clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    clasesPageRoutingModule
  ],
  declarations: [clasesPage]
})
export class clasesPageModule {}
