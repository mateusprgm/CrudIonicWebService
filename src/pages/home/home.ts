import { Component, enableProdMode } from '@angular/core';
import { NavController } from 'ionic-angular';





enableProdMode()
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html',
  
})


export class HomePage {
 
  
  constructor(public navCtrl: NavController) {
   
  }
  
}