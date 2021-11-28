import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title: string = 'Listado de cursos';
  courses: any[] = [
    {
      id: 1,
      name: 'Angular Desde Cero',
      description: 'Aprende Angular como si estuvieras en primero',
      price: 799.50,
      rating: 4.9,
      imageUrl: 'assets/images/courses/angular.jpg',
      startDate: 'Enero 15, 2021'
    },
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      description: 'Aprende TypeScript 4 como si estuvieras en primero',
      price: 450.00,
      rating: 4.3,
      imageUrl: 'assets/images/courses/typescript.jpg',
      startDate: 'Julio 09, 2021'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  editCourse(course: any) {
    console.info(course)
  }

  deleteCourse(course: any) {
    console.warn(course)
  }

  generateZoom(event: MouseEvent) {
    console.log(event)
  }

}
