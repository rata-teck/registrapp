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
  public nuevoAlumno():void{
    const copiaAlumno = {
      ...this.alumno
    }
    this.alumnos.push(copiaAlumno);
  }
}
