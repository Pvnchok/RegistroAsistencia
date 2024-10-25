import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  result: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.username = this.userService.getUsername(); 
  }

  navigateTo(page: string) {
    this.navController.navigateForward(`/${page}`);
  }

  async qrcode() {
    await this.router.navigate(['/login']); 
  }

 
}







  

