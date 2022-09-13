import { Component, Output, EventEmitter, Input } from '@angular/core';
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

  public cambiaNombre(event : Event):void{
    this.alumno.nombre = (event.target as HTMLInputElement).value;
  }
  public cambiaRut(event : Event):void{
    this.alumno.rut = (event.target as HTMLInputElement).value;
  }
  public cambiaApellido(event : Event):void{
    this.alumno.apellido = (event.target as HTMLInputElement).value;
  }
  public cambiaEdad(event : Event):void{
    this.alumno.edad = parseInt((event.target as HTMLInputElement).value);
  }
  public cambiaNombreSeccion(event : Event):void{
    this.seccion.nombre = (event.target as HTMLInputElement).value;
  }
  public cambiaIdSeccion(event : Event):void{
    this.seccion.id = parseInt((event.target as HTMLInputElement).value);
  }

  guardar():void{
    const clon = {
      ...this.alumno
    }
    this.enviarAlumno.emit(clon);
  }
}
