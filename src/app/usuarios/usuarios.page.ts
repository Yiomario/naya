import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { assert } from 'console';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  
})
export class UsuariosPage implements OnInit {
  usuarios :any =[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getusers().subscribe(res=>{
      console.log("Res", res)
      this.usuarios = res;
    });
  }
  redirigirAPagina() {
   
    window.location.href = '/scanearqr';
  }
  getusers()
  {
    return this.http
    .get("assets/files/db.json")
    .pipe(
      map((res:any) =>{
        return res.usuarios;
      })

    )
  }

}
