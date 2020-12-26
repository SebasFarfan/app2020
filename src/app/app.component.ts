import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2020';
  show:boolean = true;
  //showDos:boolean = false;
  activo:any = "";

  cursos:string[]=["HTML", "ANGULAR", "PHP"];

  animales:Array<any> = [
    {tipo: "Perro", nombre:"Firulais", edad:"2"},
    {tipo: "Gato", nombre:"Chabelo", edad:"11"},
    {tipo: "Gato", nombre:"Coquillo", edad:"11"},
    {tipo: "Perro", nombre:"Jack", edad:"4"}
  ]
}
