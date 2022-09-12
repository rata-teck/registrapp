import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  //@Output()
  //public envio = new EventEmitter();
  public nuevaSeccion : Seccion = {
    id : 0,
    nombre : ''
  }
  @Input()
  public secciones : Array<Seccion> = [];
  public guardar() : void{
    const clon = {
      ...this.nuevaSeccion
    }
    this.secciones.push(clon);
  }
}