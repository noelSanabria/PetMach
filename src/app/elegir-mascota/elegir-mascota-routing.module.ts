import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirMascotaPage } from './elegir-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirMascotaPageRoutingModule {}
