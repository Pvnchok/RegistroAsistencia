import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';
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
  ) { }

  async login() {
    if (this.username === 'Francisco' && this.password === 'Colectivo') {
      this.userService.setUsername(this.username); // Guarda el nombre del usuario
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales incorrectas',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
