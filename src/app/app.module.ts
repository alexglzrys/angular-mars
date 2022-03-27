import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseActionComponent } from './components/course-action/course-action.component';
import { CourseEditComponent } from './pages/course-edit/course-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CourseCreateComponent } from './pages/course-create/course-create.component';
import { CourseCreateReactiveComponent } from './pages/course-create-reactive/course-create-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseActionComponent,
    CourseEditComponent,
    CourseCreateComponent,
    CourseCreateReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
