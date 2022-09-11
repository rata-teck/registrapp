import { Component } from '@angular/core';
import { BaseHistorial } from '../base-historial';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  public historial : Array<BaseHistorial> = [];
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
  public fila : BaseHistorial = {
    fecha : '',
    hora : '',
    alumno : this.alumno
  }
}