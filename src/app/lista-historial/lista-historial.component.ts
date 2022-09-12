import { Component, Input } from '@angular/core';
import { BaseHistorial } from '../base-historial';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input()
  public historial! : Array<BaseHistorial>;
}