import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class PresupuestosService {

   presURL: string ='https://comprasapp-69f06.firebaseio.com/presupuestos.json';

  constructor(private http:Http) {

   }

   //Realiza peticiones http de tipo post a la bd para crear registros
   postPresupuestos(presupuesto:any){
     const newpres=JSON.stringify(presupuesto);
     const headers=new Headers(
       {
         'Content-Type':'application/json'
       }
     );

     //envia al server recibiendo el resultado de la operacion
     return this.http.post(this.presURL,newpres,{headers})
     .map(res=>{
       console.log(res.json());
       return res.json();
     })
   }



}
