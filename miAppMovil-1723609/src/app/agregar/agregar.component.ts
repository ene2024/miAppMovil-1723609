import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tareas/Tarea';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})

export class AgregarComponent  implements OnInit {

  constructor(private modalController:ModalController) { }

  nuevaTarea: Tarea = {
    nombre: '',
    mes: 0,
    ano: 0,
    descripcion: '',
  }

  Confirmar(){
    this.modalController.dismiss(this.nuevaTarea);
  }

  ngOnInit() {}

}
