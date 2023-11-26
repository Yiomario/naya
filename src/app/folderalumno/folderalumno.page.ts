import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folderalumno',
  templateUrl: './folderalumno.page.html',
  styleUrls: ['./folderalumno.page.scss'],
})
export class FolderalumnoPage implements OnInit {
  public folder: string = '';
  public nombreUsuario: string = '';

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute // Agrega ActivatedRoute aquí
  ) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';

    // Obtener el nombre de usuario de los queryParams
    const nombreUsuarioParam = this.activatedRoute.snapshot.queryParamMap.get('nombreUsuario');
    if (nombreUsuarioParam) {
      this.nombreUsuario = nombreUsuarioParam;
    }
  }

  irA(pagina: string) {
    // Aquí debes definir cómo navegar a las páginas correspondientes según la opción seleccionada.
    // Por ejemplo:
    if (pagina === 'usuarios') {
      this.navCtrl.navigateForward('/usuarios');
    
    } else if (pagina === 'configuracion') {
      this.navCtrl.navigateForward('/configuracion');
    }
  }
}
