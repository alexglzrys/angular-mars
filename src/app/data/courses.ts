import { Course } from '../interfaces/course';

export const COURSES: Course[] = [
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