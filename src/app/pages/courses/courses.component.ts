import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, Router } from '@angular/router';
import { EMPTY, of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  @ViewChild('filtro', {static: false}) filtro!: ElementRef;
  title: string = 'Listado de cursos';
  //textoFiltro: string = '';
  private _txtFilter: string = '';
  courses!: Course[] | never[]
  messageError!: string;

  /**
   * Inspeccionar el cambio de valores de una propiedad mediante getters y setters
   * para activar una determinada lógica en consecuencia
   */
  set textoFiltro(t: string) {
    this._txtFilter = t;
    console.log('Texto filtro:',t)
    // Filtrar cursos
    // Si existe búsqueda, filtramos, caso contrario retornamos todo el listado de cursos
    //this.courses = this._txtFilter ? this.filtrarCursos(t) : this.courseService.getCourses();
    if (this._txtFilter) {
      this.courses = this.filtrarCursos(t)
    } else {
      this.courseService.getCourses().subscribe(courses => {
        this.courses = courses
      })
    }
  }

  get textoFiltro() {
    return this._txtFilter
  }

  constructor(private router: Router,
              private courseService: CourseService) { }

  ngOnInit(): void {
    //this.deleteAllCourses()
    //this.courses = this.courseService.getCourses()
    this.courseService.getCourses()
    .pipe(
      tap(courses => console.log('Cursos', courses)),
      catchError(error => {
        this.messageError = error;
        // Seleccionar estrategia de error
        // Atrapar y Reemplazar el error como un Observable vacío
        //return EMPTY
        // Atrapar y Reemplazar el error como un arreglo vacío  
        return of([])
      })
    )
    .subscribe(courses => {
      this.courses = courses;
    })
  }

  ngAfterViewInit() {
    
     // this.filtro.nativeElement.value = 'Cursos Angular';
    
      
  }

  filtrarCursos(t: string): Course[] {
    // Pasar a minuscula el nombre del curso y verificar si el término se encuentra en alguna posición dentro del string
    return this.courses.filter((couse: Course) => couse.name.toLowerCase().indexOf(t.toLowerCase()) >= 0)
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
