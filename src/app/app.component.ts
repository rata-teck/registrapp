import { Component } from '@angular/core';
import { BaseHistorial } from './base-historial';
import { Seccion } from './seccion';
import { Alumno } from './alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RegistrAPP';
  seccion : Seccion = {
    id : 0,
    nombre : ''
  }
  alumno : Alumno = {
    rut : '',
    nombre : '',
    apellido : '',
    edad : 0,
    seccion : this.seccion
  }
  historial : Array<BaseHistorial> = [];
  registro : BaseHistorial = {
    fecha : '',
    hora : '',
    alumno : this.alumno
  }
}
