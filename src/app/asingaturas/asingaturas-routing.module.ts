import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsingaturasPage } from './asingaturas.page';

const routes: Routes = [
  {
    path: '',
    component: AsingaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsingaturasPageRoutingModule {}
