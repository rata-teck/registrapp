import { Time } from "@angular/common";
import { Alumno } from "./alumno";

export interface BaseHistorial {
    fecha:Date,
    hora:Time,
    alumno:Alumno
}