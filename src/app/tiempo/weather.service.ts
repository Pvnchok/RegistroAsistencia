import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = environment.API_KEY;
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?access_key=${this.apiKey}&query=${lat},${lon}`;
    return this.http.get(url);
  }
}
