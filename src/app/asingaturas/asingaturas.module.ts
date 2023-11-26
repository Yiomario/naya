import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsingaturasPageRoutingModule } from './asingaturas-routing.module';

import { AsingaturasPage } from './asingaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsingaturasPageRoutingModule
  ],
  declarations: [AsingaturasPage]
})
export class AsingaturasPageModule {}
