import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

//retiramos alguns imports modules e a lista de providers daqui e colocamos no core.module
//importamos CoreModulo com as conf. que foram retiradas
//aqui temos um app responsável por declarar  app component, importat core module com o módulos necessários, e fazer o bootstrap da nossa aplicação
@NgModule({
  declarations: [AppComponent],
  imports: [ CoreModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
