import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderalumnoPage } from './folderalumno.page';

const routes: Routes = [
  {
    path: '',
    component: FolderalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderalumnoPageRoutingModule {}
