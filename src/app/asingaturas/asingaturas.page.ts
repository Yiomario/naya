import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router desde @angular/router

@Component({
  selector: 'app-asingaturas',
  templateUrl: './asingaturas.page.html',
  styleUrls: ['./asingaturas.page.scss'],
})
export class AsingaturasPage {

  constructor(private router: Router) { }

  // Función para manejar el clic en el botón de la tarjeta 1
  accionTarjeta1() {
    // Redirige a la página "usuarios" cuando se hace clic en el botón de la tarjeta 1
    this.router.navigate(['/usuarioprogramacion']);
  }

  // Función para manejar el clic en el botón de la tarjeta 2
  accionTarjeta2() {
    // Redirige a la página "usuarios" cuando se hace clic en el botón de la tarjeta 2
    this.router.navigate(['/usuarioarquitectura']);
  }

  // Función para manejar el clic en el botón de la tarjeta 3
  accionTarjeta3() {
    // Redirige a la página "usuarios" cuando se hace clic en el botón de la tarjeta 3
    this.router.navigate(['/usuariocalidad']);
  }
}


