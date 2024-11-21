import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  userName: string = 'Panchito';
  userEmail: string = 'Panchito.tilin@duocuc.cl';
  userAge: number = 18;
  userImage: string = '';

  constructor(private router: Router) {
    const savedImage = localStorage.getItem('userImage');
    this.userImage = savedImage || 'assets/img/gato.jpg';
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userImage = reader.result as string;
        localStorage.setItem('userImage', this.userImage);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']); // Cambia '/home' al path real de tu página de inicio
  }
}
