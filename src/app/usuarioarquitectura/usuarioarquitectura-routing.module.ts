import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioarquitecturaPage } from './usuarioarquitectura.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioarquitecturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioarquitecturaPageRoutingModule {}
