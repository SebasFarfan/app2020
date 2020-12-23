import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-principal',
  templateUrl: './form-principal.component.html',
  styleUrls: ['./form-principal.component.css']
})
export class FormPrincipalComponent implements OnInit {

  status = "Formaulario No Enviado";
  defaultName = "";
  displayPassword = false;
  lightStatus = "GREEN";
  names = ['Sebastian', 'Carolina', 'Luis', 'Analia'];
  //@Input('dataToChildFromParent') messageFromParent: any;
  //@Input() parentDataToChild;
  @Input('parentDataToChild') messageFromParent;
  
  courses = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    console.log(this.courses);
  }

  onSendForm(email: { value: any; }){
    //alert("Enviado el Formulario");
    console.log(email.value);
    this.status = "Formualrio ha sido enviado";
  }

  onDefaultForm(){
    this.defaultName = "Sebastian";
  }

  



}
