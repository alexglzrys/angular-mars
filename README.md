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