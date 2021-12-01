import { Injectable } from '@angular/core';
import { COURSES } from '../data/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    return COURSES
  }

}
