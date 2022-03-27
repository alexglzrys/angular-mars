import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseEditComponent } from './pages/course-edit/course-edit.component';
import { CourseCreateComponent } from './pages/course-create/course-create.component';
import { CourseCreateReactiveComponent } from './pages/course-create-reactive/course-create-reactive.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'course/edit/:id',
    component: CourseEditComponent,
  },
  {
    path: 'courses/add',
    component: CourseCreateComponent,
  },
  {
    path: 'courses/add-reactive',
    component: CourseCreateReactiveComponent
  },
  {
    path: '**',
    redirectTo: 'courses'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
