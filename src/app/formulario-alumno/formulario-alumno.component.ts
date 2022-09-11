import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output()
  public enviarAlumno = new EventEmitter<Alumno>();
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

  public guardar():void{
    const clon = {
      ...this.alumno
    }
    this.enviarAlumno.emit(clon);
  }
}