import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tareas/Tarea';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent  implements OnInit {

  nuevaTarea: Tarea = {
    nombre: '',
    mes: 0,
    ano: 0,
    descripcion: '',
  }

  constructor() { }

  ngOnInit() {}

}
