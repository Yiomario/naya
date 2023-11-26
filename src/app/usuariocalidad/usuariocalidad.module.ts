import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariocalidadPageRoutingModule } from './usuariocalidad-routing.module';

import { UsuariocalidadPage } from './usuariocalidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariocalidadPageRoutingModule
  ],
  declarations: [UsuariocalidadPage]
})
export class UsuariocalidadPageModule {}
