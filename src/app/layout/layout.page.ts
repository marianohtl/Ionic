import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
// criando funções dentro do arquivo referente a page de layout
// classe que controla a naegação

//navCtrl é uma variável 
  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  //criando a função que faz com que o botão menu te leve à layout menu
  openLayoutMenu(){
    //alert("Menu");
    //navCntrl seleciona a classe de navegação
    //navigate Forward > navegar para frente
    this.navCtrl.navigateForward('layout-menu');
  }

  openLayoutSplit(){
    this.navCtrl.navigateForward('layout-split')
  }


  openLayoutGrid(){
    this.navCtrl.navigateForward('layout-grid')
  }


  openLayoutCss(){
    this.navCtrl.navigateForward('utilidades-css')
  }

}
