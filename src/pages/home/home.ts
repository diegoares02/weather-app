import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AccuweatherApiProvider } from '../../providers/accuweather-api/accuweather-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  res : any;
  constructor(public navCtrl: NavController,
  private alertCtrl:AlertController,
  private accuweatherProvider: AccuweatherApiProvider) {

  }
  presentAlert(){
    this.accuweatherProvider.getWeather()
    .then( data => {
      this.res = data;
      console.log(this.res);
    });
  }
}
