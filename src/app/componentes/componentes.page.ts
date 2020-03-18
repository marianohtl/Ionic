import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {
// criando funções dentro do arquivo referente a page de layout
// classe que controla a naegação

//navCtrl é uma variável 
constructor(private navCtrl : NavController) { }


  ngOnInit() {
  }

  openCompActionSheet(){
    this.navCtrl.navigateForward('action-sheet');
  }

openCompAlert(){
  this.navCtrl.navigateForward('alert');
}
openCompBadges(){
  this.navCtrl.navigateForward('badges');
}

openCompCard(){
  this.navCtrl.navigateForward('card');
}

openCompButton(){ 
  this.navCtrl.navigateForward('comp-button');
}
}
