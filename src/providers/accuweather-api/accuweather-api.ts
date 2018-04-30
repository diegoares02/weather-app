import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AccuweatherApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccuweatherApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AccuweatherApiProvider Provider');
  }

  getWeather(){
    return new Promise(resolve => {
      this.http.get('http://apidev.accuweather.com/currentconditions/v1/33655.json?language=en&apikey=hoArfRosT1215')
      .subscribe(data =>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    });
  }

}
