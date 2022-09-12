import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Alumno } from '../alumno';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output()
  public enviarAlumno = new EventEmitter<Alumno>();
  @Input()
  public secciones! : Array<Seccion>;
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

  guardar():void{
    const clon = {
      ...this.alumno
    }
    this.enviarAlumno.emit(clon);
  }
}