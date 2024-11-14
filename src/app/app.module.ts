import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { UserService } from './user.service'; // Asegúrate de que la ruta sea correcta
import { WeatherService } from './tiempo/weather.service'; // Ruta corregida
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    UserService,
    WeatherService // Asegúrate de registrar el servicio si no usas 'providedIn: root'
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
