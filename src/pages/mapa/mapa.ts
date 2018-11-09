import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat: number;
  lng: number;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController) {
    //preuba con valores estáticos
    // this.lat = 42.3318619;
    // this.lng = -7.876628;
    //tomamos dinámicamente el parámetro que me llega con las coordenadas
    let coordenadasArray = this.navParams.get("coord").split(",");
    this.lat = Number(coordenadasArray[0].replace("geo:", ""));
    this.lng = Number(coordenadasArray[1]);
    console.log (this.lat, "<=>", this.lng)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }
  cerrar_modal(){
    this.viewCtrl.dismiss();
  }
}
