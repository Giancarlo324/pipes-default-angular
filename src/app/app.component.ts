import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expoPipes';
  // Para mayúsculas y minúsculas
  texto = 'ESTOY aprendiendo Pipes';

  // Para poner decimales.
  PI = Math.PI;

  // Para poner porcentajes.
  porcentaje = 0.589;

  // Moneda
  salario = 3500.5;

  // JSON
  datos = {
    nombre: 'Sheldon',
    nick: 'Shelly',
    cancion: 'Soft Kitty',
    skills: ['eidetic memory', 'makes people nervous'],
    direccion: {
      calle: 'Elm Street',
      numero: 3,
      ciudad: 'Pasadena'
    }
  };

  // Date
  myDate = new Date();

  // Pipes unidos
  numero = '5.45678912';
}
