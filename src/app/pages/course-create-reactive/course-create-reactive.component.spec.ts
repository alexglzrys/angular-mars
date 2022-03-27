import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreateReactiveComponent } from './course-create-reactive.component';

describe('CourseCreateReactiveComponent', () => {
  let component: CourseCreateReactiveComponent;
  let fixture: ComponentFixture<CourseCreateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCreateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
