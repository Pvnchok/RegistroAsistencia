import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  username: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  resetPassword() {
    if (this.authService.resetPassword(this.username)) {
      // Redirigir a la página de login en caso de éxito
      this.router.navigate(['/login']);
    } else {
      console.log('Error al restablecer la contraseña');
    }
  }
}




