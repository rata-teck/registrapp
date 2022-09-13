import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  alumno! : Alumno;
  @Output()
  public e = new EventEmitter<Alumno>();
  public historial : Array<BaseHistorial> = [];
  registro : BaseHistorial = {
    fecha : '',
    hora : '',
    alumno : this.alumno
  }
  public guardarRegistro():void{
    const copiaRegistro = {
      ...this.registro
    }
    this.historial.push(copiaRegistro);
  }
  @Input()
  public puenteAlumno(alumno:Alumno):void{
    this.alumnos.push(alumno);
  }
  public seccion : Array<Seccion> = [];
  public recibeSecciones(secciones : Array<Seccion>):void{
    this.seccion = secciones;
  }
  public cambiaNombreSeccion(event : Event):void{
    this.registro.alumno.seccion.nombre = (event.target as HTMLInputElement).value;
  }
  public alumnos:Array<Alumno> = [];
  public seleccionaAlumno(event : Event):void{
    const Apellido = (event.target as HTMLInputElement).value;
    for(let a7 of this.alumnos){
      if(a7.apellido == Apellido){
        this.alumno.nombre = a7.nombre;
        this.alumno.apellido = a7.apellido;
        this.alumno.rut = a7.rut;
        this.alumno.seccion = a7.seccion;
      }
    }
  }
  public cambiaIdSeccion(event : Event):void{
    this.alumno.seccion.id = parseInt((event.target as HTMLInputElement).value);
  }
}
