import { ScanData } from './../../models/scan-data.model';
import { HistorialProvider } from './../../providers/historial/historial';
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[]=[];

  constructor(private histProv: HistorialProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuardadosPage');
    this.historial = this.histProv.cargar_historial();
  }
  abrir_scan(index:number){
    this.histProv.abrir_elemento_historial(index);
  }
}
