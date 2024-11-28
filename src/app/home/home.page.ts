import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../tiempo/weather.service'; 
import { HttpClient } from '@angular/common/http';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import { Storage } from '@ionic/storage-angular'; 

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
  asignatura: string = '';
  seccion: string = '';
  sala: string = '';
  fecha: string = '';

  constructor(
    public httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private navController: NavController,
    public weatherService: WeatherService,
    private storage: Storage  
  ) {}

  ngOnInit() {
    this.storage.create().then(() => {  // Inicializa el storage
      this.loadTheme();
    });
  
    setInterval(() => {
      this.obtenerHora();
    }, 1000);
  
    this.username = this.userService.getUsername(); 
    this.getUserLocation(); 
  }

  obtenerHora() {
    const now = new Date();
    this.horaActual = now.toLocaleTimeString();
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
    this.fecha = this.obtenerFechaSistema();
    if (this.asignatura && this.seccion && this.sala && this.fecha) {
      this.qrText = `${this.asignatura}|${this.seccion}|${this.sala}|${this.fecha}`;
    } else {
      this.qrText = 'Faltan datos para completar la entrada.';
    }

    console.log('Texto generado:', this.qrText);
  }

  obtenerFechaSistema(): string {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    
    return `${year}${month}${day}`;
  }

  toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.classList.toggle('dark', currentTheme === 'dark');
    this.saveTheme(currentTheme);
  }

  async saveTheme(theme: string) {
    await this.storage.set('theme', theme);
  }

  async loadTheme() {
    const savedTheme = await this.storage.get('theme');
    if (savedTheme) {
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }
}
