import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  // Capturar el formulario via variable de plantilla
  @ViewChild('registerCourseForm', {static: false}) form!: FormControl;

  // Modelo asociado al formulario
  myCourse: Course = {
    name: '',
    description: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  registrarCurso() {
    // Inspeccionar el estado del formulario
    
    console.log('Formulario enviado', this.form)
    if (this.form.valid) {
      console.log('Modelo enviado', this.myCourse)
      // Resetear formulario
      this.form.reset()
    }
  }

}
