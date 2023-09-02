import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirMascotaPageRoutingModule } from './elegir-mascota-routing.module';

import { ElegirMascotaPage } from './elegir-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirMascotaPageRoutingModule
  ],
  declarations: [ElegirMascotaPage]
})
export class ElegirMascotaPageModule {}
