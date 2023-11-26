import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginalumnoPageRoutingModule } from './loginalumno-routing.module';

import { LoginalumnoPage } from './loginalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de que IonicModule esté importado aquí
    LoginalumnoPageRoutingModule
  ],
  declarations: [LoginalumnoPage]
})
export class LoginalumnoPageModule {}
