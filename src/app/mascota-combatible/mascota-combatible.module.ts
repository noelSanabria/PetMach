import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotaCombatiblePageRoutingModule } from './mascota-combatible-routing.module';

import { MascotaCombatiblePage } from './mascota-combatible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotaCombatiblePageRoutingModule
  ],
  declarations: [MascotaCombatiblePage]
})
export class MascotaCombatiblePageModule {}
