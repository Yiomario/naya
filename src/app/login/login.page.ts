import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async iniciarSesion() {
    if (!this.usuario.trim() || !this.contrasena.trim()) {
      await this.mostrarAlerta('Error', 'Por favor, completa todos los campos.');
      return;
    }

    this.router.navigate(['/folder/inbox', { id: 'inbox' }]);

  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Los campos están vacíos. Por favor, rellene los campos.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
