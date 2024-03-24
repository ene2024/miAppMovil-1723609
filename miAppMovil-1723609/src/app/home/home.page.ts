import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {
      console.log("AppComponent: Constructor");
    }
    ngOnChanges(){
      console.log("AppComponent: OnChanges");
    }
   
    ngOnInit(){
      console.log("AppComponent: OnInit");
    }
   
    ngDoCheck(){
      console.log("AppComponent: DoCheck");
    }
   
    ngAfterContentInit(){
      console.log("AppComponent: AfterContentInit");
    }
   
    ngAfterContentChecked(){
      console.log("AppComponent: AfterContentChecked");
    }
   
    ngAfterViewInit(){
      console.log("AppComponent: AfterViewInit");
    }

    ngAfterViewChecked(){
      console.log("AppComponent: AfterContentChecked");
    }
   
    ngOnDestroy(){
      console.log("AppComponent: OnDestroy");
    }
  }

  title: string = 'Mi nueva Pagina';

  hazmeClic() : void{
    alert("Hiciste clic!")
  }
  imgUrl: String = 'https://media1.tenor.com/m/dcymVyOUF4QAAAAd/perro-perritos.gif'

  nombreAlumno: string = '';
}
