import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaalumnoPage } from './asignaturaalumno.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaalumnoPageRoutingModule {}
