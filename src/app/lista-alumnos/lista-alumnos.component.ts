import { Component, Input } from '@angular/core';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  public alumnos : Array<Alumno> = [];
  @Input()
  alumno! : Alumno;
  if(alumno =! NaN){
    const copia = {
      ...this.alumno
    }
    this.alumnos.push(copia);
  }
}
