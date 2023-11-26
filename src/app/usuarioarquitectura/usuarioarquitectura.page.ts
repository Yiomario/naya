import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuarioarquitectura',
  templateUrl: './usuarioarquitectura.page.html',
  styleUrls: ['./usuarioarquitectura.page.scss'],
})
export class UsuarioarquitecturaPage implements OnInit {
  arquitectura: any = []; // Define la propiedad "arquitectura" para almacenar los usuarios de arquitectura.

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getArquitectura().subscribe((res: any) => {
      console.log('Res', res);
      this.arquitectura = res.arquitectura; // Asigna los datos al arreglo "arquitectura".
    });
  }
  redirigirAPagina() {
   
    window.location.href = '/generarqr';
  }
  getArquitectura() {
    return this.http.get('assets/files/db.json');
  }
}

