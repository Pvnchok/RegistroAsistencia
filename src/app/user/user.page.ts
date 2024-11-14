import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  userName: string = 'Panchito';
  userEmail: string = 'Panchito.tilin@duocuc.cl';
  userAge: number = 18;
  userImage: string ="assets/img/gato.jpg";
 
  constructor() {}
}

