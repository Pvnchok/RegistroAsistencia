import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { clasesPage } from './clases.page';

const routes: Routes = [
  {
    path: '',
    component: clasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class clasesPageRoutingModule {}
