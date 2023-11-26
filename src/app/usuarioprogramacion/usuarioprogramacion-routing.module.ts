import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioprogramacionPage } from './usuarioprogramacion.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioprogramacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioprogramacionPageRoutingModule {}
