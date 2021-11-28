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