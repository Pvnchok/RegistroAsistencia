import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private users: any = {};  // Usamos un objeto para almacenar los usuarios registrados

  constructor() {}

  // Método para registrar un nuevo usuario
  registro(username: string, password: string): boolean {
    // Verificar si el usuario ya existe
    if (this.users[username]) {
      return false;  // El usuario ya existe
    }
    
    // Si no existe, agregar al objeto de usuarios
    this.users[username] = password;
    console.log(`Usuario registrado: ${username}`);
    return true;  // Usuario registrado correctamente
  }

  // Método para validar el login
  login(username: string, password: string): boolean {
    console.log(`Autenticando usuario: ${username}`);
    
    // Verificar si el usuario existe y si la contraseña coincide
    if (this.users[username] && this.users[username] === password) {
      return true;  // Credenciales correctas
    }
    return false;  // Credenciales incorrectas
  }

  // Método para restablecer la contraseña
  resetPassword(username: string): boolean {
    console.log(`Restableciendo contraseña para el usuario: ${username}`);
    // Aquí podrías agregar lógica para restablecer la contraseña si lo deseas
    return true;
  }
}