import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class clasesPage implements OnInit {
  clases = [
    { nombre: 'Calidad de Software', codigo: 'CSY4111', creditos: 8 },
    { nombre: 'Programación Aplicaciones Móviles', codigo: 'PGY4121', creditos: 10 },
    { nombre: 'Arquitectura', codigo: 'ASY131', creditos: 10 },
    { nombre: 'Estadística Descriptiva', codigo: 'MAT4140', creditos: 8 },
    { nombre: 'Inglés Intermedio', codigo: 'INI5111', creditos: 16 },
    { nombre: 'Ética para el Trabajo', codigo: 'EAY4470', creditos: 4 },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
