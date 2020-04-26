import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  url = 'https://api.openweatherapp.org/data/2.5/weather';
  apiKey = 'dbf7ed89db2eda547f062a62a0bb2a31';

  constructor(private http: HttpClient) { }

  // => Método para retornar os parametros de latitude e longitude da api
    getWeatherDataByCoords(lat, lon){
      const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apiKey);

      return this.http.get(this.url, { params });

  // preciso entender melhor esta parte, este método.
}

  getWeatherDataByCityName(city: string){
    // definir os parametros da url
    const params = new HttpParams()
      .set('q', city)
      .set('units','metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }


}
