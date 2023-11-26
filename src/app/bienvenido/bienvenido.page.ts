
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage {

  constructor(private router: Router) {}

  entrar() {
    
    this.router.navigate(['cards']);
  }

}
