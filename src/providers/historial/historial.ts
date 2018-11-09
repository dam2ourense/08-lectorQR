import { ScanData } from './../../models/scan-data.model';
import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { MapaPage } from '../../pages/mapa/mapa';


@Injectable()
export class HistorialProvider {
  private historial:ScanData[] = [];
  constructor(private iab:InAppBrowser,
            private modalCtrl: ModalController) {
    
  }

  agregar_elemento_historial(texto: string){
    let dato = new ScanData(texto);
    //metemo un elemento al principio del array
    this.historial.unshift(dato);

    //despues de crea el elemnot, lo abrimos
    this.abrir_elemento_historial();

  }

  cargar_historial (){
    return this.historial;
  }

  abrir_elemento_historial(index:number = 0){
    let elemento = this.historial[index];
    console.log(elemento);
    switch(elemento.tipo){
      case "web":
        this.iab.create(elemento.info, "_system");
        break;
      case "mapa":
        this.modalCtrl.create(MapaPage,{coord:elemento.info})
              .present();
        break;
      default:
        console.error("Tipo no soportado");



      


    }

  }

}
