import { Component, Output, EventEmitter} from '@angular/core';
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
  public cambiaNombre(event : Event):void{
    this.nuevaSeccion.nombre = (event.target as HTMLInputElement).value;
  }
  public cambiaId(event : Event):void{
    this.nuevaSeccion.id = parseInt((event.target as HTMLInputElement).value);
  }
  @Output()
  public a4 = new EventEmitter<Array<Seccion>>();
  public secciones : Array<Seccion> = [];
  public guardar() : void{
    const clon = {
      ...this.nuevaSeccion
    }
    this.secciones.push(clon);
    this.a4.emit(this.secciones);
  }
}
