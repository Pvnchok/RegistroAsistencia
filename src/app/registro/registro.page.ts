import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
import { AlertController } from '@ionic/angular';  // Asegúrate de importar AlertController
import { AuthService } from '../auth.service';  // Asegúrate de importar tu servicio de autenticación

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,  // Inyección de AlertController
    private authService: AuthService  // Inyección de AuthService
  ) { }

  // Método para almacenar datos de forma momentánea en sessionStorage
  storeData() {
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('password', this.password);
    sessionStorage.setItem('confirmPassword', this.confirmPassword);

    // Verificar los valores almacenados
    console.log('Datos almacenados:');
    console.log('Username:', sessionStorage.getItem('username'));
    console.log('Password:', sessionStorage.getItem('password'));
    console.log('Confirm Password:', sessionStorage.getItem('confirmPassword'));
  }

  // Método para navegar a la página de login
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);  // Redirige a la página indicada
  }

  async registro() {
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa un nombre de usuario y contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    const isRegistered = this.authService.registro(this.username, this.password);
    if (isRegistered) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Usuario registrado correctamente',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/login']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre de usuario ya existe',
        buttons: ['OK'],
      });
      await alert.present();
    }
  
    // Almacenar los datos en sessionStorage
    this.storeData();
  }
}