import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
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
    if (pagina === 'asingaturas') {
      this.navCtrl.navigateForward('/asingaturas');
    } else if (pagina === 'usuarios') {
      this.navCtrl.navigateForward('/usuarios');
    } else if (pagina === 'configuracion') {
      this.navCtrl.navigateForward('/configuracion');
    }
  }
}




