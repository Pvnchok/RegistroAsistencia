import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
 private API_KEY:string= '36b198c7b5425732a9aa43d48dd5e25b';
  private API_URL: string ='https://api.openweathermap.org/data/2.5/weather'
;
  

  constructor(private http: HttpClient) {}

  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    const url = `${this.API_URL}?access_key=${this.API_KEY}&query=${lat},${lon}`;
    return this.http.get(url);
  }
}
