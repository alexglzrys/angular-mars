import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-create-reactive',
  templateUrl: './course-create-reactive.component.html',
  styleUrls: ['./course-create-reactive.component.scss']
})
export class CourseCreateReactiveComponent implements OnInit {

  // Referencia a todo el formulario
  courseCreateForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Definir el estado inicial de todos los controles que agrupa el formulario reactivo
    this.courseCreateForm = new FormGroup({
      // Las validaciones para cada control de formulario se especifican durante la definición de su estado inicial
      // Si es más de una validación, se debe declarar como un arreglo de validaciones
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      price: new FormControl(null, [Validators.required, Validators.min(200)]),
      // Además de las funciones de validación pre-construidas, podemos especificar las propias
      url: new FormControl(null, [Validators.required, this.domainValid('amazon.com')]),
      active: new FormControl(true)
    });

    this.detectorDeCambios();
  }

  onSubmit() {
    console.log(this.courseCreateForm);
  }

  // Los getters pueden facilitar el acceso a los controles de formulario durante la inspección de validación
  get description() {
    return this.courseCreateForm.get('description');
  }

  // Validaciones personalizadas
  domainValid(word: string): ValidatorFn {
    // Siempre debe retornar una función, la cual retorne un valor null (si la validación pasa) o un objeto con una clave y valor (si la validación falla)
    
    // La función siempre recibe el control de formualario a validar
    return (control: AbstractControl): {[key: string]: any} | null => {
      // Cuerpo o lógica de validación
      if (control.value !== null && control.value.includes(word)) {
        // La validación falla si el valor del control de formulario contiene la palabra que se pasa como parámetro a la función Validadora
        return {
          // La clave que podemos usar en el template para saber si el error causado, es de este tipo de validación (dominio invalido)
          'domaininvalid': true
        }
      } else {
        // La validación pasó. 
        // En este caso el valor del campo no contiene el texto especificado, o simplemente no se ha escrito nada en el hasta el momento
        return null;
      }
    }
  }

  detectorDeCambios() {
    // Los formularios reactivos trabajan internamente con Observables para detectar cambios en los valores de sus campos o estado de validación
    // ? Suscribirse a estos Observables, da oportunidad a encadenar cierta lógica de programación que desemos activar, por ejemplo llamado a API's externas

    // Detectar los cambios de valor en todos los campos agrupados en el formulario (valor actual)
    //this.courseCreateForm.valueChanges.subscribe(value => console.log(value));

    // Detectar los cambios de estado global en el formulario (validación)
    // this.courseCreateForm.statusChanges.subscribe(status => console.log(status));

    // Detectar cambios de valor para un campo en particular
    // this.courseCreateForm.get('price')?.valueChanges.subscribe(value => console.log('Price', value));

    // Detectar el estado de validación para un campo en particular
    this.courseCreateForm.get('price')?.statusChanges.subscribe(status => console.log('Price', status));
  }

}
