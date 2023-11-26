import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage {
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async cambiarContrasena() {
    if (this.newPassword.trim() === '' || this.confirmPassword.trim() === '') {
      // Al menos uno de los campos está vacío, mostrar alerta de campo vacío
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    } else if (this.newPassword === this.confirmPassword) {
      // Contraseñas coinciden, mostrar alerta
      const alert = await this.alertController.create({
        header: 'Contraseña cambiada',
        message: 'Tu contraseña ha sido cambiada con éxito.',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              // Navegar a la página de inicio de sesión
              this.router.navigate(['/login']);
            },
          },
        ],
      });

      await alert.present();
    } else {
      // Contraseñas no coinciden, mostrar alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }
}
