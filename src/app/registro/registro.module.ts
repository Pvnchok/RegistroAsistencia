import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
import { AlertController } from '@ionic/angular';  // Asegúrate de importar AlertController
import { AuthService } from '../auth.service';  // Asegúrate de importar tu servicio de autenticación

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
