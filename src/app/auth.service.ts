import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor() { }

  registro(username: string, password: string): boolean {
    if (this.user[username]) {
      
      return false;
    }
    
    this.user[username] = password;
    return true;
  }

  login(username: string, password: string): boolean {
    
    console.log(`Autenticando usuario: ${username}`);
    return true; 
  }

  resetPassword(username: string): boolean {
    console.log(`Restableciendo contraseña para el usuario: ${username}`);
    return true;
  }
}
