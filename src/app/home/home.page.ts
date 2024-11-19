import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../tiempo/weather.service'; 
import { HttpClient } from '@angular/common/http';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  segment: string = 'generar';
  qrText: string = '';
  materiaSeleccionada: string = '';
  username: string = '';
  result: string = '';
  scannedData: any;
  weatherData: any;
  horaActual: string = '';
  

  
  constructor(
    public httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private navController: NavController,
    public weatherService: WeatherService
  ) {}

  ngOnInit() {
    // Llama a la función cada segundo para actualizar la hora
    setInterval(() => {
      this.obtenerHora();
    }, 1000);

    // Obtener el nombre de usuario
    this.username = this.userService.getUsername(); 
    
    // Obtener la ubicación del usuario
    this.getUserLocation(); 
  }

  obtenerHora() {
    const now = new Date();
    this.horaActual = now.toLocaleTimeString();
    console.log(this.horaActual);  // Esto te ayudará a verificar que se actualiza correctamente
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

  async qrcode(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    this.result = result.ScanResult;
  }

  guardarSeleccion() {
    this.qrText = this.materiaSeleccionada;

    console.log('Materia seleccionada:', this.materiaSeleccionada);
  }

}