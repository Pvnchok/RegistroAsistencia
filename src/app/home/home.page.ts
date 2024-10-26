import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../tiempo/weather.service'; // Ruta corregida
import { environment } from 'src/environments/environment'; // Asegúrate de que el entorno esté configurado
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  result: string = '';
  weatherData: any;

  constructor(
    public httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private navController: NavController,
    public weatherService: WeatherService // Asegúrate de que esto esté bien definido
  ) {}

  ngOnInit() {
    this.username = this.userService.getUsername(); 
    this.getUserLocation(); // Llama a esta función para obtener el clima al iniciar
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.getWeather(lat, lon);
        },
        (error) => {
          console.error('Error obteniendo la ubicación', error);
        }
      );
    } else {
      console.error('Geolocalización no es soportada por este navegador.');
    }
  }

  getWeather(lat: number, lon: number) {
    this.weatherService.getWeatherByCoords(lat, lon).subscribe({
      next: (data: any) => {
        this.weatherData = data;
      },
      error: (error: any) => {
        console.error('Error obteniendo el clima', error);
      }
    });
  }

  navigateTo(page: string) {
    this.navController.navigateForward(`/${page}`);
  }

  async qrcode() {
    await this.router.navigate(['/login']); 
  }
}
