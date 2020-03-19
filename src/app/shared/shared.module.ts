import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

//criando módulo de exportação de módulos que se repetem em diversos arquivos
//usamos o exports
@NgModule({
  exports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class SharedModule {}
