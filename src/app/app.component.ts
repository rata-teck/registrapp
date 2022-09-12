import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseHistorial } from './base-historial';
import { Seccion } from './seccion';
import { Alumno } from './alumno';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

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
  @Output()
  public puenteAlumno(alumno:Alumno):void{
    this.alumno = alumno;
    this.e.emit(alumno);
  }
  public seccion! : Array<Seccion>;
}
