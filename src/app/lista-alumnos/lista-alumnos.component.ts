import { Component } from '@angular/core';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  public alumnos : Array<Alumno> = [];
  public seccion : Seccion = {
    id : 0,
    nombre : ''
  }
  public alumno : Alumno = {
    rut : '',
    nombre : '',
    apellido : '',
    edad : 0,
    seccion : this.seccion
  }
}
