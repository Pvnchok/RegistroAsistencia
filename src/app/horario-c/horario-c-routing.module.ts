import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioCPage } from './horario-c.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioCPageRoutingModule {}
