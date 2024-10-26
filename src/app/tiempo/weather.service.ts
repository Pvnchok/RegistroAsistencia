import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = environment.API_KEY; // Asegúrate de que esta clave esté en tu archivo de entorno
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
