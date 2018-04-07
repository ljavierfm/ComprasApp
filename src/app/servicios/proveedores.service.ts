import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores:any=[
    {
      nombre:'Telefonica',
      cif:'B1234567890',
      direccion:'Paseo de la Castellana, 100',
      cp:'28080',
      localidad:'Madrid',
      provincia:'Madrid',
      telefono:913432344,
      email:'info@telefonica.es',
      contacto:'Juan Pérez'
    },
    {
      nombre:'Iberdrola',
      cif:'B123457852',
      direccion:'Príncipe de Vergara, 200',
      cp:'28080',
      localidad:'Madrid',
      provincia:'Madrid',
      telefono:913432377,
      email:'info@iberdrola.es',
      contacto:'Laura Martínez'
    },

  ]

  constructor() { }

  getProveedores(){
    return this.proveedores;
  }

}
