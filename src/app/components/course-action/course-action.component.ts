import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.scss']
})
export class CourseActionComponent implements OnInit {

  @Input() course!: Course;
  @Output() edit: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() delete: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  editCourse(course: any) {
    console.info(course)
    // Propagar el objeto curso hacia el componente Curso
    this.edit.emit(course);
  }

  deleteCourse(course: any) {
    console.warn(course)
    this.delete.emit(course)
  }

}
