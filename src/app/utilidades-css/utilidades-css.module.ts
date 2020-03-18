import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UtilidadesCssPage } from './utilidades-css.page';

const routes: Routes = [
  {
    path: '',
    component: UtilidadesCssPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UtilidadesCssPage]
})
export class UtilidadesCssPageModule {}
