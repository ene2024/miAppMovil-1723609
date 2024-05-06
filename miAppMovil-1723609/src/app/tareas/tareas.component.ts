import { Component, OnInit, ViewChild} from '@angular/core';
import { TareasService } from './tareas.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { Tarea } from './Tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private TareaService: TareasService) { }

  ngOnInit() {
    this.tareas = this.TareaService.getTareas();
  }

  @ViewChild (AgregarComponent) child: any;

  agregarTarea(){
    this.TareaService.agregarTarea(this.child.newTarea);
  }

  tareas : Tarea[] = [];

  dropTarea(note: Tarea){
    this.TareaService.deleteTarea(note);
    alert("Se ha eliminado exitosamente la tarea!");
  }

}
