import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2020';
  dataToChildFromParent = 'Este mensaje es para el Form Componet desde App Component';
}
