import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule
import { AuthService } from 'src/app/auth.service'; // Importa el servicio

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], // Asegúrate de que AppRoutingModule esté aquí
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService], // Registra el servicio
  bootstrap: [AppComponent],
})
export class AppModule {}
