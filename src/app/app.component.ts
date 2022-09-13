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
    this.alumno = alumno;
  }
  public seccion : Array<Seccion> = [];
  public recibeSecciones(secciones : Array<Seccion>):void{
    this.seccion = secciones;
  }
  public cambiaNombreSeccion(event : Event):void{
    this.registro.alumno.seccion.nombre = (event.target as HTMLInputElement).value;
  }
}
