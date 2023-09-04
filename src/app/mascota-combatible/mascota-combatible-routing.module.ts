import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotaCombatiblePage } from './mascota-combatible.page';

const routes: Routes = [
  {
    path: '',
    component: MascotaCombatiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotaCombatiblePageRoutingModule {}
