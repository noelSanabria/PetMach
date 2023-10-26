import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAddPageRoutingModule } from './usuario-add-routing.module';

import { UsuarioAddPage } from './usuario-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioAddPageRoutingModule
  ],
  declarations: [UsuarioAddPage]
})
export class UsuarioAddPageModule {}
