import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, Router } from '@angular/router';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  @ViewChild('filtro', {static: false}) filtro!: ElementRef;
  title: string = 'Listado de cursos';
  textoFiltro: string = '';
  courses: Course[] = [
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
      id: 2,
      name: 'TypeScript Desde Cero',
      description: 'Aprende TypeScript 4 como si estuvieras en primero',
      price: 450.00,
      rating: 4.3,
      imageUrl: 'assets/images/courses/typescript.jpg',
      startDate: 'Julio 09, 2021'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.deleteAllCourses()
  }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = 'Cursos Angular'
  }

  generateZoom(event: MouseEvent) {
    console.log(event)
  }

  updateCourse(course: Course) {
    console.log('se ha actualizado', course)
    // Redireccionar a una ruta para editar el cursi
    this.router.navigate(['course/' + course.id])
  }

  removeCourse(course: Course) {
    // Realizar tareas con el objeto curso (información emitida en el evento)
    console.log('se ha eliminado', course)
    this.courses = this.courses.filter((c: Course) => c.id !== course.id)
  }

  deleteAllCourses() {
    setTimeout(() => {
      this.courses = []
    }, 5000)
  }

}
