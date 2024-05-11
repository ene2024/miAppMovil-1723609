import { Component, OnInit, ViewChild} from '@angular/core';
import { TareasService } from './tareas.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { ModalController } from '@ionic/angular';
import { Tarea } from './Tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private TareaService: TareasService, private modalController: ModalController) { }


  ngOnInit() {
    this.tareas = this.TareaService.getTareas();
  }

  @ViewChild(AgregarComponent) child: any;

  async agregarTarea(){
    const modal = await this.modalController.create({
      component: AgregarComponent,
    });

    modal.onDidDismiss().then((dataReturned)=>
    {
      if(dataReturned){
        this.nuevaTarea = dataReturned.data;
        console.log(this.nuevaTarea);
        this.TareaService.agregarTarea(this.nuevaTarea);
      }
    });
    return await modal.present();
  }

  nuevaTarea: Tarea = {
    nombre: '',
    mes: 1,
    ano: 1,
    descripcion: '',
  }

  dropTarea(note: Tarea){
    this.TareaService.deleteTarea(note);
    alert("Se ha eliminado exitosamente la tarea!");
  }

  tareas : Tarea[] = this.TareaService.Tareas;


 

}
