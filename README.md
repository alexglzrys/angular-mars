# AngularMars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.


## Que es Angular

Es una plataforma (antes un Framework) OpenSource creada por Google para el desarrollo de aplicaciones multiplataforma basada en TypeScript

- Web
- Mobile   (Cordova, Ionic, NativeScript, Capacitor)
- WPA    
- Escritorio 

Paquetes, Tecnologías y/o Herramientas que hacen de Angualar una Plataforma para el desarrollo de aplicaciones:

- Proactor
- Forms
- PWA
- Augury
- Language Services
- Router
- Element 
- CDK (Component Development Kit)
- Universal
- Karma
- Labs
- Compiler
- i18n  (Internacionalización)
- Http
- Material
- Animations
- CLI


## Versión Semántica Angular

Major release.Minor release.Patch release

- Patch release: 8.0.x (cada semana)
- Minor release: 8.x.0 (cada 2 meses)
- Major release: x.0.0 (cada 6 meses)

Lo anterior hace referencia al tiempo y forma en como se van publicando nuevas versiones del Framework Angular.


## Arquitectura Angular

- Modulos (Nos permiten agrupar componentes, servicios, valores, funciones, pipes relacionadas con nuestra aplicación. Modulo de productos, modulo de facturación, modulo de clientes)
- Injectors (Hacen referencia a un conjunto de servicios que se pueden inyectar directamente en los componentes de nuestra aplicación)
- Componentes (Agrupan la lógica de una parte de nuestra aplicación)
- Directivas (tienen un conjunto de metadatos que permiten alterar la estructura de nuestros templates, "Estructurales, Atributo, Interpolación")
- Templates (La vista HTML de nuestros componentes)
- Property Binding: (Comunicar informacion declarada en nuestros componentes hacia la vista. "interpolation") 
- Event Binding: (Comunicar información de la vista hacia nuestros componentes mediante eventos personalizados)

## Angular CLI

Es un generador de

- Scaffold: (Genera la estructura inicial para diferentes elementos de nuestra aplicación, componentes, pipes, servicios, interfaces, )
- Preview: (Permite generar una vista previa de nuestro proyecto, ng serve -o integrado)
- Local Build: (Permite construir o empaquetar nuestro proyecto optimizado para un ambiente local o producción, ng build --prod )
- Local testing, Unit testm E2E Test: (Permite generar la estructura inicial para archivos de testing en nuestra aplicación para cada componente)
- Follow Best Practices: (El CLI genera la estructura inicial de los elementos basados en las mejores prácticas, tanto en su contenido como en el nombre de cada archivo)

## Generar un nuevo proyecto Angular

```
ng new nombre-proyecto
ng new proyecto --routing   (habilitar el routing para nuestra aplicación)
ng new proyecto --prefix ed (agregar un prefijo para los componentes de nuestro proyecto, por defecto es app "app-menu")
ng new proyecto --style css (seleccionar el preprocesador para css)
ng new proyecto --skip-install  (saltar la instalación y solo generar la estructura del proyecto)
```

## Vista previa de la aplicación

```
ng serve
ng serve -o             // Abrir el navegador
ng serve --port 9000    // Cambiar puerto por defecto
```

## Ejecutar los test unitarios declarados en nuestra aplicación

```
ng test // Test unitarios para cada componente
ng e2e  // Test End To End, Se basan en los tests unitarios pero enfocados a la interactividad que tiene el usuario con nuestros componentes o servicios. 
```

## Ejecutar el linter

Permite verificar que nuestro código cumpla con lo especificado en el archivo tslint.json; es decir verifica que no existan problemas en la forma de como fue escrito nuestro código

```
ng lint
```

## Otras formas de generar un proyecto Angular

- StackBlitz (Editor online para la generación de proyectos)
- Angular Console (angularconsole.com)

## Generación de código mediante el Angular CLI

Por defecto los elementos generados son registrados en el módulo principal de la aplicación app.module

```
ng g class nombre-clase         // Generar una clase
ng g i nombre-interfaz          // Generar una interface
ng g enum nombre-enumerado      // Generar un enumerado
ng g c nombre-componente        // Generar la estructura de un componente
ng g m nombre-modulo            // Generar un modulo para agrupar elementos que forman parte una funcionalidad compleja de nuestra aplicación
ng g s nombre-servicio          // Generar un servicio
ng g d nombre-directiva         // Generar una directiva
ng g p nombre-pipe              // Generar un pipe (filtro)
ng g g nombre-guard             // Generar un guard
ng g application nombre-subaplicación   // Generar una aplicación que forma parte de nuestro proyecto principal
```

Si se desea agregar un elemento a un módulo especifico, se recomienda generar el modulo, y mediante el CLI generar el elemento especificando como prefijo el nombre del modulo/subcarpetaElemento/nombreElemento

```
ng g c nombreModulo/components/nombre-componente
```

## Especificar configuraciones para el proyecto Angular

Algunas librerías requieren agregar hojas de estilo a nuestra aplicación para poder trabajar. Para ello se debe especificar su ruta en en el archivo angular.json, para que al momento de empaquetar estas sean inyectadas en el index.html de nuestra aplicación 

```
angular.json    // Configuración para Angular

tslint.json     // Configuración para TSLint
tsconfig.json   // Configuración para TypeScript

environments/   // Configuración para cada entorno

styles.scss     // Hoja de estilo global para la aplicación
main.ts         // Punto de entrada para nuestra app
test.ts         // Punto de entrada para los test unitarios
```

## Desplegar localmente el Build de nuestra Aplicación

Este comando genera un build con los archivos de nuestra aplicación, el resultado son varios archivos .js con sufijos. Mismos que son utilizados por los navegadores según su compatibilidad

Podemos probar nuestro build mediante el uso de paquetes instalados de forma global en nuestro PC ("librería http-server")

```
ng build                // Generar carpeta de distribución
ng build --prod         // Generar carpeta de distribución optimizada para producción

npm i -g http-server                                    // instalar librería de forma global
http-server dist/nombre-carpeta-generada-proyecto       // montar el proyecto en el servidor local
```

## Componentes

Es una combinación de diferentes elementos (Template, Estilos, Lógica)
- Vista (HTML)
- Binding (comunicación entre elementos - Data Binding y Event Binding)
- Directivas (enlazar contenido)
- CSS
- Clase (lógica del componente conformada por propiedades y métodos)
- Metadatos (Son propiedades que forman parte del cuerpo de un @Decorador, Los decoradres le indican a Angular que función desempeña cada clase declarada en nuestro proyecto: Componente, Servicio, Módulo, Directiva, Pipe)

```
Componente = Plantilla / Estilos + Clase + Metadatos

ng g c nombreDelComponente      // Generar un componente
```

- Todos los paquetes de angular se deben de importar de @angular/...
- Los decoradores se encuentran definidos en el paquete de @angular/core
- En el mundo de Angular, la parte más básica y elemental es el componente, un componente puede estar compuesto por otros sub-componentes, y así sucesivamente.
- Los componentes para ser renderizados en las vistas, deben pertenecen siempre a un módulo (deben estar declarados). La forma correcta de trabajar con ángular es dividir nuestra aplicación en módulos, y esos modulos deben estar compuestos por diversos componentes. Los componentes que son usados por diversos módulos a lo largo de nuestra aplicación deben estar registrados en un módulo compartido generalmente llamado shared, mismo que declara los componentes que gestiona y exporta explicitamente aquellos componentes que desea compartir con otros módulos.

#### Estilos en componentes

- Angular usa CSS estandar, pero podemos usar algún procesador
- Permite definir estilos por componente, lo que hace posible un diseño modular (los estilos declarados en un componente no interfieren con los estilos declarados en otros componentes, es decir, encapsula los estilos de los componentes)

```
styles: ['h1 {color: red;}', 'p {font-size: 14px;}', '.title {font-family: Arial; text-align: center}']    // Arreglo de declaraciones de estilo. (inline)

styleUrls: ['./app.component.css']   // Arreglo de archivos de estilos (archivos separados)
```

- Se recomienda hacer uso de estilos **inline** cuando el componente sea básico y no requiera un estilo sumamente elaborado

#### Plantillas en componentes

- Permite distribuir los diferentes elementos que componen nuestra vista: Layout, HTML, Binding (enlace de propiedades o eventos), Directivas
- Plantillas inline, requieren el uso de backticks. **Esta forma es recomendada para componentes con estructura básica**
```
template: `
    <div>
        <h1>Angular</h1>
    </div>
`,
```

- Plantillas separada en un archivo
```
templateUrl: './app.component.html'
``` 

## Angular Router
- Permite al usuario navegar de una vista a otra (componentes de página) en la aplicación y renderizar su contenido en la ventana del navegador
- El módulo de RouterModule contiene directivas **routerLink, routerLinkActivate** que permiten inyectar un comportamiento más avanzado a nuestros enlaces al momento de navegar, es decir, evitan que la ventana del navegador se recargue.
- El módulo RouterModule contiene un componente que permite visualizar el contenido de una vista (componente de página) asociada a una ruta **router-outlet**
- Para definir un conjunto de rutas principales para nuestra aplicación, es necesario declarar un arreglo de objetos de ruta y registrarlo en el RouterModule, el cual debe ser exportado, e importado en el módulo principal de nuestra aplicación

```
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

RouterModule.forRoot(routes)
```

- En proyectos complejos, se recomienda que cada módulo que contiene páginas para nuestra app, se le asocie un router. El cual es un módulo que contiene la declaración de rutas para ese modulo, mismas que deben ser declaradas en el RouterModule como rutas hijas, e importadas en dicho módulo
```
ng g m carpetaModulo/nombreModuloRouting --flat
ng g m carpetaModulo --routing      // Genera el módulo y su respectivo archivo para la definición de rutas

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

RouterModule.forChild(routes)
```

- Los módulos que tienen asociados un esquema de rutas, son importados en la definición del esquema de rutas principales de la aplicación mediante la técnica del LazyLoad. De esta forma sus rutas quedan declaradas como rutas hijas de la aplicación bajo un path padre/ruta-hija, y en ocasiones un estilo de layout diferente gracias a la definición de un componente padre para las respectivas rutas hijas. **Para ver el contenido de las rutas hijas en el Layout este debe definir en su template el componente** router-outlet. (Vistas anidadas)

```
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        loadChildren: () => import('./auth/auth.module.ts).then(m => AuthModule)
    }
]
```

### Instalar librerías de terceros
La instalación se hace de forma tradicional mediante NPM, sin embargo, si la librería instalada requiere de estilos CSS personalizados, es necesario vincularlos a nuestra aplicación mediante la edición del archivo **angular.json**

Otra forma de hacerlo es importar los CSS de forma tradicional desde nuestro archivo **styles.css** mediante el uso de imports **@import "~bootstrap/dist/main.css"**

- Se recomienda la primer opción **angular.json** ya que al momento de empaquetar nuestra App, dichos archivos también serán optimizados. Sin embargo, es importante recordar que esta opción requiere volver a transpilar la aplicación (ng serve, ng build)

```
npm i bootstrap
npm install --save @fortawesome/fontawesome-free

--- archivo styles.css
@import '~bootstrap/dist/css/bootstrap.min.css';

--- archivo angular.json (path build)
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
],
```

### Data Binding

Permite enlazar los datos declarados en la clase de nuestro componente con el DOM (Template o vista de nuestro componente) **Propiedades**, y comunicar información del template hacia la clase de nuestro componente mediante el uso de **Eventos**

- Esto lo hace de forma unideraccional
- Property Binding = Clase -> Template
- Event Binding = Template -> Clase


El binding en Angular se puede aplicar de distintas formas:

#### Interpolación
La clase de nuestro componente define propiedades o atributos, las cuales para ser mostradas en la vista, se hace mediante el uso de **Expresones de Plantilla**

Con el uso de **interpolación** podemos también hacer expresiones JS

```
titulo: string = 'Hola mundo'

<p>{{ titulo }}</p>
<p>La suma de 1 + 3 es {{ 1 + 3 }}</p>
```

#### Property Binding

Es un tipo de binding para vincular el valor de las propiedades definidas en nuestra Clase, como valores de atributos declarados en las etiquetas de nuestra plantilla

```
<img [src]="pathImage" [alt]="titulo + ' - EDTeam'">
<a [href]="linkURL" [title]="curso.title" [disabled]="curso.status">Más información</a>    
```

#### Event Binding

Es un tipo de Binding, para comunicar a la Clase sobre cambios o acciones realizadas en la vista (Template) por el usuario

- Los eventos nativos de JS son invocados sin el prefijo on
- Los eventos nativos pueden ser de distinta naturaleza, las acciones del usuario tienen que ver con MouseEvent, pero existen otros tipos de acciones que se relacionan con otro tipo de eventos (arrastrar y soltar, que la página este lista, touch, imagenes cargadas) **https://developer.mozilla.org/es/docs/Web/Events**

```
guardarRegistro() {
    // lógica para guardar el registro
}

editarCurso(curso: any) { }

generarZoom(event: MouseEvent) { }


<button (click)="guardarRegistro()">Save</button>
<button (click)="editarCurso(curso)>Editar este curso</button>
<img [src]="pathImage" [alt]="titulo" (mouseover)="generarZoom($event)">
```

#### Binding condicional en atributos, clases y estilos

```
<div [attr.arial-label]="help">Ayuda</div> // Binding en atributo

<div [class.special]="esEspecial"></div> // Binding en clase

<div [style.color]="esEspecial ? 'red' : 'green'"></div> // Binding en estilo
```

## Pipes

Un Pipe toma un dato de entrada y lo transforma para generar una nueva salida

- Se establece un formato para la salida
- Soporta parámetros
- Se pueden encadenar, el flujo siempre va de izquierda a derecha

```
<p>Mi nacimiento es {{ nacimiento | date }}</p>
<p>{{ nacimiento | date | lowercase }}</p>
```

## Directivas

Son elementos HTML personalizados que permiten extender el lenguaje HTML. Generalmente se les vé como etiquetas (las cuales representan el contenido de un componente), pero tambien se pueden usar como atributos personalizados

- Directivas personalizadas (custom)
- Directivas incorporadas en el framework (built-in)

```
<ed-root></ed-root>
<ed-calendario></ed-calendario>
```

#### Directivas estructurales

Manipulan la estructura del DOM, agregando, eliminando o actualizando elementos.

```
*ngIf
*ngFor
*ngSwitch   

<div *ngIf="curso">{{ curso.name }}</div>
<ul>
    <li *ngFor="let heroe of heroes">{{ heroe.name}}</li>
</ul>
<div [ngSwitch]="mes">
    <p *ngSwitchCase="'Enero'">Iniciando el año</p>
    <p *ngSwitchDefault>En que planeta vives</p>
</div>
```

## Propiedades @Input

Permite a un componente padre enviar información a sus componentes hijos por medio de la definición de un decorador @Input en la clase del componente hijo (propiedad personalizada)

```
<componente-padre>
    <hijo [datos]="informacion"></hijo>
</componente-padre>

// Componente hijo
@Input() datos: string;     // La info. se almacena en la propiedad datos
```

## Propiedades @Output

Permite a un componente hijo enviar información a su componente padre por medio de la definición de un decorador @Output en la case del componente hijo y el uso de un emisor de eventos personalizados (EventEmmiter)

- El EventEmmiter puede o no enviar una carga útil como información del evento **< TipoDeEvento >**
- EventEmmiter debe ser importado desde @angular/core 

```
// Componente hijo
@Output() edit: EventEmitter<Course> = new EventEmitter<Course>();

// En algun método del componente hijo, se emite el evento personalizado edit con su carga util (el curso)
this.edit.emit(informacionDelCurso)


<componente-padre>
    <hijo (edit)="editarCurso($event)"></hijo>
</componente-padre>

// Componente padre
editarCurso(mi_curso: Course) {
    delete(mi_curso)
}
```

## @ViewChild

Permite acceder a elementos HTML declarados en la vista (template), desde la clase de nuestro componente.
Después de ello, se puede acceder a todas sus propiedades nativas para manipularlas al clásico estilo JS

- Para identificar al elemento al cuál se quiere acceder, se necesita de una **variable de referencia de plantilla**

- Si se desea acceder desde el momento que se renderiza el componente, es necesario declaraar toda la lógica en el ciclo de vida **AfterViewInit**

```
<input type="text" #varreferencia>

@ViewChild('varreferencia', {static: false}) micampo: ElementRef;

this.micampo.nativeElement.value = 'UN NUEVO CONTENIDO'
```

## Módulos

Permiten agrupar un conjunto de carácteristicas o código que este relacionado con nuestra aplicación.

- Configura el inyector y el compilador para organizar contenido relacionado
- Es una clase de Typescript marcada con el decorador @NgModule
- Consolida componentes, directivas, pipes en bloques de funcionalidad
- Se suelen enfocar en: caracteristicas de la aplicación, colección común o un conjunto de utilidades, o un dominio de la lógica de negocio
- Agrupan servicios
- Se pueden cargar al inicio o usando estrategias como Lazy Loading para cargarlos bajo demanda

```
declarations: ['Define los componentes, Directivas, Pipes que agrupa el módulo']

imports: ['Listado de módulos cuyos elementos van a necesitar los componentes del modulo actual']

providers: ['Los servicios que los componentes de este modulo necesitan para poder trabajar']

exports: ['Los elementos que desea compartir el modulo actual con otros módulos']
```

## Inyección de Dependencias

- Es un patron de diseño orientado a objetos
- Permite el paso de objetos como **dependencias**
- Los objetos se pueden pasar a componentes
- Pueden estar disponibles en toda la aplicación
- El patrón permite la creación de instancias

Generalmente se le ve cuando se solicita la llamada de un servicio dentro de un componente.

- LoggerService
- LoginService
- PopupService
- EnvironmentService

La inyección de una dependencia se hace a través del constructor, lo que genera que se cree una instancia de dicho servicio, misma que estará disponible en toda la clase (private), o en el template (public)

```
constructor(private myService: MyService) {

}
```

## Servicios

Es una clase con un propósito bien definido

```
export class MyService {
    log(message: string): string {
        return message;
    }
}
```

## Buenas prácticas en Angular

- Conversiones para estructura de archivos
- Principio: Single Responsability
- Convenciones de nombre (naming)
- Estructura de una aplicación
- Buenas prácticas sobre componentes, directivas, servicios (servicios de datos, o utilitarios)
- Lifecycle Hooks

## Asincronía

Ocurrencia de eventos independientes del flujo principal del programa, así como la manera de manejar dichos eventos.

- Java: el flujo principal del programa se ejecuta en el **hilo principal**, y los eventos independientes del flujo principal, **generan nuevos hilos** de ejecución en paralelo

- JavaScript: corre en un solo hilo de ejecucion. Otros eventos se manejan usando **asyncrhronus non-blocking I/O model**. El código se ejecuta de forma secuencial, y las operaciones de I/O no son secuenciales (depende de la implementación)

```
console.log('primero')
setTimeout(() => { 
    console.log('me ejecuto después de 2 segundos') 
    }, 2000)
console.log('segundo')
```

### Síncrono VS Asíncrono

Síncrono: La ejecución del código es secuencial, una después de la otra.

Asíncrono: La ejecución del código no se bloquea, si se tiene una función asíncrona y en seguida más instrucciones, el proceso continua con su ejecución.

### Promesas

Es un **objeto** que representan la abstracción del resultado de una operación asincrona
Dicho resultado puede estar disponible en el momento o en un futuro
- Puede contener un resultado válido
- Puede contener un error

```
let promesa = new Promise((resolve, reject) => {
    resolve('felicidades')
})

promesa.then((mensaje) => {
    console.log('Resultado: ', mensaje)
})

let promesa_dos = new Promise((resolve, reject) => {
    reject('error en el proceso')
})

promesa_dos.then((mensaje) => {
    console.log('Resultado: ', mensaje)
}).catch((error) =>{
    console.log('Error: ', error)
})

// Encadenar promesas

promesa.then((mensaje) => {
  console.log('Felicidades', mensaje)
    // En este punto se retorna la siguiente promesa
  return promesa_dos
}).then((msg) => {
  console.log('Promesa 2', msg)
}).catch((error) => {
  console.log('Error', error)
})
```

### Patrón Observer

Patron de diseño de software

- Observable: El objeto o entidad que se desea observar en busca de nuevos cambios
- Observer: Los clientes que fungen como observadores u oyentes a cualquier cambio del objeto o entidad de observación

### Programación Reactiva

Es un paradigma para la programación asíncrona
- Hace referencia al procesamiento de un **flujo de datos de manera asíncrona**
- **ReactiveX** es un API para programación asíncrona con flujos observables. Disponible para varios lenguajes de programación
- En programación reactiva, **todo es un flujo de datos**

### RxJS y Observables

- Extensiones Reactivas (librerías para la programación reactiva) para JavaScript
- Provee funciones utilitarias para la creación y el manejo de Observables

Se pueden usar para:

- Convertir código existente asíncrono (promesas) en observables
- Iterar sobre los valores en flujos de datos (convertirlos a otros tipos de datos)
- Mapear valores a diferentes tipos
- Filtrar flujos de datos
- Combinar múltiples flujos de datos

**Los Observables son especialmente útiles para procesar multiples entradas de datos**, ya que una promesa se usa para valores simples

### Observable

- RxJS provee una implementación de un tipo Observable
- RxJS también provee funciones para crear nuevos Observables
- Dichas funciones simplifican su proceso de creación para eventos, promesas y otros

```
import { from } from 'rxjs'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

const datos = from(fetch('api/datos'))

datos.suscribe({
    next(respuesta) { console.log(respuesta) },
    error(err) { console.error(err) },
    complete() { console.info('completado') }
})

const nums = of(1,2,3)
const cuadrados = nums.pipe(
    map((val: number) => val * val)
)

cuadrados.suscribe(x => console.log(x))

```

Ejemplo que conviete una promesa en Observable

```
import { from } from "rxjs"

async function testObservable() {
    // Esperar hasta que se resuelva la promesa 
  const users = await fetch('https://randomuser.me/api/?results=5')
    // Serializar los datos de la respuesta de la promesa en un objeto json y convertir ese objeto en un Observable
  const datos = from(users.json())

    // Suscripción al Observable
  datos.subscribe({
    next(respuesta) {
      console.log('Respuesta', respuesta.results)
    },
    error(error) {
      console.log('Error', error)
    },
    complete() {
      console.log('Completado')
    }
  })
}

testObservable()
```

## Arquitectura Cliente-Servidor

Arquitectura en la que varios clientes solicitan y reciben servicios de un servidor centralizado.

- Los clientes proporcionan una interfaz para la solicitud de servicios y mostrar los resultados
- Los servidores esperan las solicitudes para responder a los mismos
- Normalmente un servidor provee una interfaz de conexión estandarizada y transparente a los clientes (universal)

### REST y RESTfull

#### REST
- Representational State Transfer
- Es un patrón de arquitectura para la creación de servicios Web (Especificación)
- Considera restricciones para su arquitectura (Cliente-Servidor, Stateless, Cacheable, Uniform Interface, Layered System)

#### RESTfull

- Se usa para referirse a servicios Web que implementan la aquitectura REST
- Podemos decir que se basan en capas: (Request Handler **GET/POST/PUT/DELETE**, Service Handler **Proceso para generar respuestas JSON, XML**, Database Handler **Operaciones con recursos de base de datos**)

### Métodos HTTP

HTTP define un conjunto de **métodos de petición** para indicar las acciones a realizar sobre un recurso
Estos métodos suelen llamarse tambíén **verbos HTTP**

- GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH

Las RESTful APIs permiten ejecutar operaciones CRUD
- CREATE, READ, UPDATE, DELETE

### Peticiones HTTP en Angular

La mayoria de las aplicaciones Front-End se comunican con los servicios Back-End a través del protocolo HTTP

Navegadores modernos admiten dos APIs para estas solicitudes

- XMLHttpRequest
- Fetch API (reciente)

Angular provee un cliente denominado HttpClient, el cual ofrece un API HTTP simplificado para aplicaciones Angular basado en XMLHttpRequest

**Este cliente retorna siempre un Observable**

Se recomienda usar este cliente dentro de un servicio, para separar conceptos o responsabilidades en nuestra App, con el objetivo de reutilizar (inyectar) el servicio en otros componentes.

```
// Módulo para peticiones HTTP
HttpClientModule

// Inyectar servicio
HttpClient

// Servicio
getDatos(): Observable<Datos> {
    return this.http.get<Datos>('/api/endpoint');
}

// Componente
mostrarDatos() {
    this.datosServices.getDatos().suscribe(respuesta => {
        this.datos = respuesta
    })
}
```

### Manejo de Errores

- ¿Que sucede si la petición al servidor falla?
- ¿Que pasa si tenemos una conexión intermitente?

**HTTPClient retorna un objeto de error** que contiene mayor información con respecto al error

- Es ideal dar una retroalimentación genérica al usuario acerca del error
- Mostrar el objeto de error que retorna el servidor no es una buena idea.

```
getDatos(): Observable<Datos> {
    return this.http.get<Datos>('api/endpoint').pipe(
        catchError(this.manejarError)
    )
}

private manejarError(error: HttpErrorResponse) {
    if (error.error instaceof ErrorEvent) {
        // Error en el lado del cliente
        // Ocurrio un error error.error.message
    } else {
        // Error en el lado del servidor
        // Backend con error error.status, error.error
    }
    // Retornan un error como Observable
    return throwError('Error inesperado')
}
```

Estrategias:

- Capturar el error y reemplazar (Catch and Replace)
- Capturar el error y relanzar (Catch and Rethrow)

```
// Operador of
catchError(error => of([]))     // Reemplazar el error por otra cosa

// Relanzar
catchError(error => throwError(error))  // Relanzar el error
```

## Manejo de Formularios

¿Que se puede hacer con formularios?

- Iniciar sesión en una aplicación
- Actualizar perfil de usuario
- Ingresar los datos de un pedido online
- Otras tareas de ingreso de datos

**Angular proporciona dos enfoques para manejar entradas de usuario a través de formularios**

En ambos casos se efectpua:

- Captura de eventos de entrada
- Validación de entrada de usuario
- Creación de un modelo de formulario
- Creación de un modelo de datos para actualizar y detectar cambios

- **Formulario basados en Plantillas (template driven forms)**
- Formulario simples (sin mucha lógica o control de validación)
- Se requiere importar el **módulo FormsModule**
```
<input id="nombre" name="nombre" required minlength="4" [(ngModel)]="nombre" #nombre="ngModel">

La plantilla #nombre, es una variable que permite verificar el estado del input (espejo), o poder validarlo desde la plantilla. Es una instancia de un formControl

// es invalido y (esta sucio || ya fue tocado)
nombre.invalid && (nombre.dirty || nombre.touched) ?

nombre.errors.required  // requerido
nombre.errors.minlength // debe tener al menos 4 caracteres
```
- **Formularios reactivos (reactive forms)**


## Formularios basados en Plantillas

Angular permite verificar el estado de un formulario a través de los siguientes criterios

- ¿El formulario ha sido visitado?
- ¿El formulario ha sido modificado?
- ¿El formulario es válido?

```
VERDAD --- FALSE

// Formulario Visitado (tocado)
touched --- untouched

// Formulario modificado (llenado)
dirty --- pristine

// Formulario válido
valid --- invalid

<form #registerCourseForm="ngForm">
    <input type="text" name="name" id="name" [(ngModel)]="myCourse.name" required class="form-control" placeholder="Ingrese nombre del curso">
</form>
<pre>
    Formulario valido: {{ registerCourseForm.form.valid }}
    Formulario invalido: {{registerCourseForm.form.invalid}}

    Formulario tocado: {{ registerCourseForm.form.touched }}
    Formulario no tocado: {{ registerCourseForm.form.untouched }}

    Formulario sin modificar (limpio): {{registerCourseForm.form.pristine }}
    Formulario modificado (sucio): {{ registerCourseForm.form.dirty}}
</pre>
```

### Acceder al estado del formulario desde la clase

Se usa el decorador **@ViewChild()**

```
// Capturar el formulario (ngForm) via variable de plantilla 
@ViewChild('variablePantilla') form: FormControl;

onSubmit() {
    if (this.form.valid) {
        this.form.reset()
    }
}
```

- **FormControl** es un objeto que permite rastrear el valor y estado de validación de un control de formulario.
- Implementa la mayor parte de la funcionalidad básica para acceder al valor, estado de validación, interacciones de usuarios y eventos.

### Validadores

- Los formularios basados en plantillas agregan los mismos atributos de validación que un formulario HTML **nativo**
- Angular usa directivas para hacer coincidir estos atributos con funciones de validación del propio framework

```
required
minlength
maxlength
```

### Mensajes de Error de Validación

- Identificar el campo de formulario mediante una variable de plantilla y como valor asociar ngModel **#name="ngModel"**
- El estado de un campo de formulario es idéntico al estado de todo el formulario, es decir, existen las mismas propiedades para su evaluación

```
<form #registerCourseForm="ngForm">
    <input type="text" name="name" id="name" [(ngModel)]="myCourse.name" required #name="ngModel" class="form-control" placeholder="Ingrese nombre del curso">
    
    // El campo debe ser invalido, y además. Debe estar sucio ó en su caso debío de haber sido tocado, para considerar mostrar el error
    <span *ngIf="name.invalid && (name.dirty || name.touched)">El campo es requerido</span>
</form>
```

### Clases CSS de control

Angular refleja automáticamente muchas propiedades de control en el elemento de formulario **como clases CSS**. Es decir, inyecta automáticamente clase CSS con base al estado del formulario/campo

- Se puede usar estas clases para dar un estilo de acuerdo al estado del formulario/campo

```
.ng-valid
.ng-invalid

.ng-pristine
.ng-dirty

.ng-untouched
.ng-touched

.ng-pending


input.ng-invalid.ng-touched {
    border: 1px solid red;
}

input.ng-valid.ng-touched {
    border: 1px solid teal;
}
```

### Two Way Data Binding

Vincular datos en dos vías. Se hace mediante **ngModel**
Cualquier cambio que se haga en el modelo desde la plantilla, se refleja en la clase del componente y viceversa.

```
<input type="url" name="image" class="form-control" [(ngModel)]="myCourse.imageUrl">

{{ myCourse | json }}
```