import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioprogramacionPageRoutingModule } from './usuarioprogramacion-routing.module';

import { UsuarioprogramacionPage } from './usuarioprogramacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioprogramacionPageRoutingModule
  ],
  declarations: [UsuarioprogramacionPage]
})
export class UsuarioprogramacionPageModule {}
