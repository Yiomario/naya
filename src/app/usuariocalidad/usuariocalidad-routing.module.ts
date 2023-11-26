import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariocalidadPage } from './usuariocalidad.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariocalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariocalidadPageRoutingModule {}
