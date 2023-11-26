import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioarquitecturaPageRoutingModule } from './usuarioarquitectura-routing.module';

import { UsuarioarquitecturaPage } from './usuarioarquitectura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioarquitecturaPageRoutingModule
  ],
  declarations: [UsuarioarquitecturaPage]
})
export class UsuarioarquitecturaPageModule {}
