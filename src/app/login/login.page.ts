import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    const storedUsername = sessionStorage.getItem('username');
    const storedPassword = sessionStorage.getItem('password');

    if (this.username === 'Admin' && this.password === '12345') {
      sessionStorage.setItem('username', this.username); // Guardar en sessionStorage
      this.userService.setUsername(this.username); 
      this.router.navigate(['/home']);
    } else if (this.username === storedUsername && this.password === storedPassword) {
      sessionStorage.setItem('username', this.username); // Guardar en sessionStorage
      this.userService.setUsername(this.username);
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales incorrectas',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
