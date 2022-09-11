import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  //@Output()
  //public envio = new EventEmitter();
  @Output()
  public enviarDatos = new EventEmitter<Seccion>();
  public nuevaSeccion : Seccion = {
    id : 0,
    nombre : ''
  }
  public guardar() : void{
    const clon = {
      ...this.nuevaSeccion
    }
    this.enviarDatos.emit(clon);
  }
}