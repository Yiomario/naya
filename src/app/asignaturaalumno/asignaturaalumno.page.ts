import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router desde @angular/router

@Component({
  selector: 'app-asignaturaalumno',
  templateUrl: './asignaturaalumno.page.html',
  styleUrls: ['./asignaturaalumno.page.scss'],
})
export class AsignaturaalumnoPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    // Código que deseas ejecutar cuando se inicie esta página
  }

  // Función para manejar el clic en el botón de la tarjeta 1
  accionTarjeta1() {
    // Redirige a la página "usuarioprogramacion" cuando se hace clic en el botón de la tarjeta 1
    this.router.navigate(['/usuarioprogramacion']);
  }

  // Función para manejar el clic en el botón de la tarjeta 2
  accionTarjeta2() {
    // Redirige a la página "usuarioarquitectura" cuando se hace clic en el botón de la tarjeta 2
    this.router.navigate(['/usuarioarquitectura']);
  }

  // Función para manejar el clic en el botón de la tarjeta 3
  accionTarjeta3() {
    // Redirige a la página "usuariocalidad" cuando se hace clic en el botón de la tarjeta 3
    this.router.navigate(['/usuariocalidad']);
  }
}
