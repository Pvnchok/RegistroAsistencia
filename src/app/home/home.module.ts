import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
@@ -9,6 +10,7 @@ import { Router } from '@angular/router';
})
export class HomePage implements OnInit {
  username: string = '';
  scannedData: any;

  constructor(
    private userService: UserService,
@@ -20,7 +22,37 @@ export class HomePage implements OnInit {
  }


  /*async qrcode() {
    {this.router.navigate(['/login']);}
  }*/
async qrcode() {
  try {
    await this.startScan();
  } catch (error) {
    console.error('Error iniciando el escaneo de QR:', error);
  }
}
  async startScan() {
  // Solicitar permiso para usar la cámara
  await BarcodeScanner.checkPermission({ force: true });
  // Ocultar la UI de la aplicación mientras escaneas (opcional)
  BarcodeScanner.hideBackground(); 
  // Iniciar el escaneo del código QR
  const result = await BarcodeScanner.startScan(); // Escanea el código QR
  // Si el escaneo fue exitoso
  if (result.hasContent) {
    console.log('Código QR escaneado', result.content);
    this.scannedData = result.content; // Guardar el contenido escaneado
  }
}
stopScan() {
  // Detener el escaneo (por si lo necesitas)
  BarcodeScanner.stopScan();
}
}
