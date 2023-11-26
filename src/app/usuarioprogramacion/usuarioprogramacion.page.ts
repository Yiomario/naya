import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarioprogramacion',
  templateUrl: './usuarioprogramacion.page.html',
  styleUrls: ['./usuarioprogramacion.page.scss'],
})
export class UsuarioprogramacionPage implements OnInit {
  programacion: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProgramacion().subscribe(
      (res: any) => {
        console.log('Res', res);
        this.programacion = res.programacion;
      },
      (error) => {
        console.error('Error al obtener programación:', error);
      }
    );
  }

  redirigirAPagina() {
   
    window.location.href = '/generarqr';
  }

  getProgramacion() {
    return this.http.get('assets/files/db.json');
  }
}
