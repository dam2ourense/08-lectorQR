import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { GuardadosPage } from '../guardados/guardados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GuardadosPage;
  

  constructor() {

  }
}
