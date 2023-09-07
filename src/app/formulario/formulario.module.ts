import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormularioPageRoutingModule } from './formulario-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // 
import { FormularioPage } from './formulario.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormularioPageRoutingModule,
    ReactiveFormsModule, 
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}