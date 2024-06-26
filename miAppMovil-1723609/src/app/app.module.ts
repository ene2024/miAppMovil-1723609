import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [AppComponent, TareasComponent, AgregarComponent, VistaDetalleComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
