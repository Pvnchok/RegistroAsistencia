import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Lógica de autenticación
    console.log(`Autenticando usuario: ${username}`);
    return true; // Cambia esto según tu lógica de autenticación
  }

  resetPassword(username: string): boolean {
    console.log(`Restableciendo contraseña para el usuario: ${username}`);
    return true;
  }
}
