import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title: string = 'Mi nueva Pagina';

  hazmeClic() : void{
    alert("Hiciste clic!")
  }
  imgUrl: String = 'https://media1.tenor.com/m/dcymVyOUF4QAAAAd/perro-perritos.gif'

  nombreAlumno: string = '';
}
