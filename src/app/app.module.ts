import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ListaHistorialComponent } from './lista-historial/lista-historial.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './formulario-seccion/formulario-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ListaHistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
