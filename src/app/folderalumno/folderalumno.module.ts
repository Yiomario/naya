import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderalumnoPageRoutingModule } from './folderalumno-routing.module';

import { FolderalumnoPage } from './folderalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderalumnoPageRoutingModule
  ],
  declarations: [FolderalumnoPage]
})
export class FolderalumnoPageModule {}
