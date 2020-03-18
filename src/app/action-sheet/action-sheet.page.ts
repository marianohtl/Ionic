import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
//importando a classe
  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }

  async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header:'Albuns',
      buttons:[
        {
          text:'Música',
          role:'desctrutive',
          icon:'musical-note',
          handler:() => {
            alert('Música');
          }
        },
        {
          text:'Filmes',
          icon:'film',
          handler:() =>{
            alert('Filmes');
          }
        },
        {
          text:'Cancelar',
          icon:'close',
          handler:() =>{
            alert('Cancelado');
          }
        },
    
        {
          text:'Jogos',
          icon:'logo-game-controller-b',
          handler:() =>{
            alert('Jogos');
          }
        }]
    });
    await actionSheet.present();
  }

}
