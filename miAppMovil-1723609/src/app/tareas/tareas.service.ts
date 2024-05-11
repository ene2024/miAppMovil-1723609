import { Injectable } from '@angular/core';
import { Tarea } from './Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  Tareas: Tarea[] = [
    {
      nombre: 'Cita con el Dentistas',
      mes: 3,
      ano: 2024,
      descripcion: 'Cita con el dentista a las 4 pm'
    },
    {
      nombre: 'Tarea de Base de Datos',
      mes: 4,
      ano: 2024,
      descripcion: 'Realizar PIA'
    }
  ];

  getTareaById(id: any){
    return this.Tareas[id];
  }

  getTareas(){

    return this.Tareas;

  }


  agregarTarea(tarea: Tarea){

    this.Tareas.push(tarea);

  }

  deleteTarea(tarea: Tarea){

    let position: number = this.Tareas.indexOf(tarea);
    this.Tareas.splice(position, 1);
    
  }


}