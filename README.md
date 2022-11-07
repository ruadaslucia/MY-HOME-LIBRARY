#### 1_ Crear el proyecto front de React:
- npx create-react-app nombre-del-proyecto
#### 2_ Borrar todo lo innecesario
    - EJEMPLO: public/index.html y public/manifest.json todo lo relacioinado con:
             logo192.png y logo512.png
    Es un error que saldrá en las devtools.
#### 3_ Instalar sass:
- npm install node-sass
#### 4_ Instalar react-router-dom
- npm install react-router-dom
- EL CONTENIDO DE index.js por entero va a pasar a ser:

        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.scss';
        import App from './App';

        import { BrowserRouter } from 'react-router-dom';

        ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
        );


#### 5_ Lanzar la aplicación
- npm start
#### 6_ Crear versión de producción
- npm run build

        OJO: si se sube el proyecto a github pages, este solo admite la carpeta 
        docs, así que al crear la carpeta "build" se le cambia el nombre a "docs".

        Esto se hace solo se hace cuando se vayan a subir cambios a github pages.
        Y al final las ordenes serían así:
        - npm run build / cambiar de nombre build-docs/ git add -A / git commit 
          -m "text" / git push

#### 7- Administrar hoja de variables de estilos
- la carpeta styles está dividida en:
##### components
- contiene los estilos de los componentes que se vayan creando para tenerlos en un solo espacio
##### layouts
- contiene los estilos de los componentes principales como header-main-footer
##### core
- contiene la hoja de variables y la de reset.

VARIABLES contiene: abreviaciones para utilizar colores, fuentes, tamaños de fuente...

        //colors
        $metal: #54585a;
        $snorlax: #114e4e;
        $softSnorlax:#196666;
        $grey: #a0a0a0;
        $orange: #e17334;
        $softOrange:#f39762;
        $white:#ffffff;

        //fonts
        $roboto:'Roboto', sans-serif;

RESET contiene contiene estilos para que el navegador mantenga las proporciones que necesitas desde el momento 0.

        por ejemplo:

        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }



#### 8- Implementar fuentes externas (google fonts) en React o iconos (font awesome)
- Se hace desde public/index.html y se ponen en el head y se pueden sacar de google fonts. 

        ejemplo fuente Roboto: 

        En index.html:

        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,
        wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
        
        En las hojas de estilos:

        font-family: 'Roboto', sans-serif;

- Es igual para los iconos: Añades tu Kit's Code a tu proyecto en el Head

        En index.html:

        <script src="https://kit.fontawesome.com/XXXXXXXX.js" crossorigin="anonymous"></script>

        En el html de los componentes:

        <i class="fa-solid fa-arrow-up"></i>

#### 9- Implementar favicon
- La carpeta public contiene un archivo que se llama favicon.ico, es una imagen, por lo que si intercambias un archivo por otro y lo llamas igual ya cambias el favicon. Y public/index.html ya tiene la configuración hecha. No habría que tocar nada más.