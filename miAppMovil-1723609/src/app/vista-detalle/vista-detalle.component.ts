import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../tareas/tareas.service';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.scss'],
})
export class VistaDetalleComponent  implements OnInit {

  constructor(private ruta: ActivatedRoute, private consulta: TareasService) { }

  ngOnInit() {}
  idTarea: string = this.ruta.snapshot.params['id'];

  tarea = this.consulta.getTareaById(this.idTarea);

  imgurl="https://img.freepik.com/vector-premium/escritor-perros-responsable-al-estilo-caricaturas_714091-25352.jpg?w=740";

}
