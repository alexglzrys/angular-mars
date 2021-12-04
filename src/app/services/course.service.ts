import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { COURSES } from '../data/courses';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  /*getCourses() {
    return COURSES
  }*/

  getCourses(): Observable<Course[]> {
    //return this.http.get<Course[]>('assets/api/courses/courses.json');
    return this.http.get<Course[]>('assets/api/courses/courses.json')
      .pipe(
        // Operador para capturar el error
        catchError(this.manejarError)
      );

  }

  // El servicio debe implementar un mensaje más técnico sobre el error
  // El componente solo debe limitarse a dar feedback al usuario
  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error del lado del Cliente', error.error.message)
    } else {
      // Error del lado de Servidor
      console.log('Error del lado del Servidor')
      console.log('Error status', error.status)
      console.log('Error', error.error)
    }
    // Estrategia de gestión de Error
    // Capturar y Relanzar el error
    return throwError('Hubo un problema al obtener los datos, intente más tarde')
  }

}
