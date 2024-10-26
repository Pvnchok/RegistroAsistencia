import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword() {
    if (this.authService.resetPassword(this.username)) {
      this.router.navigate(['/login']);
    } else {
      console.log('Error al restablecer la contraseña');
    }
  }
}
