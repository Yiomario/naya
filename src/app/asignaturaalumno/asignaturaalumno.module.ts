import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaalumnoPageRoutingModule } from './asignaturaalumno-routing.module';

import { AsignaturaalumnoPage } from './asignaturaalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaalumnoPageRoutingModule
  ],
  declarations: [AsignaturaalumnoPage]
})
export class AsignaturaalumnoPageModule {}
