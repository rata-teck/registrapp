import { Component, Input } from '@angular/core';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  @Input()
  public alumnos! : Array<Alumno>;
}
