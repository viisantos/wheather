import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../wheather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat;
  lon;
  weather;


  constructor(private weatherService: WheatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  //este método permite o uso da localização pelo browser.
  getLocation(){
    if ( 'geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data => {
          this.weather = data;
        });
      });
    }
  }
  // => Metodo responsavel por procurar cidade pela API
  getCity(city){
    this.weatherService.getWeatherDataByCityName(city).subscribe((data) => {
      this.weather = data;
    });
  }

}
