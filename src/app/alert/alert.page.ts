import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  //criando e importando variável alert controller
  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {}

    //função que funciona simultaneamente
    async abrirAlert(){
      let alertSimples = await this.alertCtrl.create({
        header: 'Alert Simples',
        subHeader: 'Sub Header',
        message: 'Essa é a mensagem do alerta simples',
        buttons:['Ok']
      });
      await alertSimples.present();
    }

async abrirAlertMultiplos() {
  const alertMult = await this.alertCtrl.create({
    header: 'Alerta com Múltiplos Botões',
    message: 'Este é um alerta com múltiplos valores.',
    buttons: ['Ok', 'Cancelar', 'Deletar']
  });

  await alertMult.present();
}

async abrirAlertConfirmacao() {
  const alertConf = await this.alertCtrl.create({
    header: 'Confirmar!',
    message: 'Alert de confirmação!',
    buttons: [
      {
        text: 'CANCELAR',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'CONFIRMAR',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });
  await alertConf.present();
}

async abrirAlertPrompt() {
  const alertPrompt = await this.alertCtrl.create({
    header: 'Prompt!',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'mensagem',
        placeholder: 'Placeholder 2'
      },
      {
        name: 'name3',
        value: 'http://paginaaleatoria.com.br',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirmar Cancelamento');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirmar');
        }
      }
    ]
  });

  await alertPrompt.present();
}

async abrirAlertRadio() {
    const alertRadio = await this.alertCtrl.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirmação de Cancelamento');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirmação Ok', data);
          }
        }
      ]
    });

    await alertRadio.present();
  }

  async abrirAlertCheckbox() {
    const alertContr = await this.alertCtrl.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmação do Cancelamento');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirmação',data);
          }
        }
      ]
    });

    await alertContr.present();
  }


}