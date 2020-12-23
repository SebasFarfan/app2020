import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getCourses(){
    return [{'id': 1, 'nombre': 'MEAN', 'time': '10'},
            {'id': 2, 'nombre':'ANGULAR', 'time': '19'},
            {'id': 3, 'nombre':'JAVA', 'time': '1'}
           ]
  }
}
