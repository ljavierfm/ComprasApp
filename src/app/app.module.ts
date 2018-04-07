import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { ProveedoresService } from "./servicios/proveedores.service";
import { PresupuestosService } from './servicios/presupuestos.service';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { FirebaseConfig } from './firebase-config';


//constante de la clase Routes con Array de objetos con rutas para cada componente
const routes:Routes=[
  {path:"",component:InicioComponent},
  {path:"proveedores",component:ProveedoresComponent},
  {path:"addprovee",component:AddproveeComponent},
  {path:'addpres',component:AddpresComponent},
  {path:'**',component:InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ProveedoresService,PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
