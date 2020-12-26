import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      nombre:'Sebastian',
      especialidad:'Laravel',
      descripcion:'desarrollo de app usando Laravel'
    },
    {
      nombre:'Romina',
      especialidad:'NodeJs',
      descripcion:'desarrollo de aplicacion usando la tecnologia NodeJS'
    }
  ]

  getEquipo(){
    return this.equipo;
  }

  getUno(i:any){
    return this.equipo[i];
  }

  constructor() { 
    console.log('Servicio funcionando')
  }
}
