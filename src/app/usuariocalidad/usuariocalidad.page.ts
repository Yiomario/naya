import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-usuariocalidad',
  templateUrl: './usuariocalidad.page.html',
  styleUrls: ['./usuariocalidad.page.scss'],
})
export class UsuariocalidadPage implements OnInit {

  calidad: any = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCalidad().subscribe((res: any) => {
      console.log('Res', res);
      this.calidad = res.calidad; 
    });
  }
  redirigirAPagina() {
   
    window.location.href = '/generarqr';
  }

  getCalidad() {
    return this.http.get('assets/files/db.json');
  }
}

