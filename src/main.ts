import './style.css'
//Es necesario importar los otros archivos para poder que se ejecuten. Main es el punto de entrada
// import './topics/1-basic-types'
// import './topics/2-object-interface'
// import './topics/3-functions';
// import './topics/4-homework-types'
// import './topics/5-basic-destructuring'
// import './topics/6-function-destructuring'
// import './topics/7-import-export'
// import './topics/8-classes'
// import './topics/9-generics'
// import './topics/10-decorators'
import './topics/11-optional-chaining'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hola Mundo
`

console.log('hola mundo');


//Intrucciones para crear una aplicación con Vite con typescript
// - Abrir una carpeta en la consola (hacerlo en la consola dev VSCode porque no me funcionó en bash)
// - comando: npm create vite
// - Dar nombre proyecto y Seleccionar vanilla y typescript
// - ir a la carpeta del proyecto
// - comando: npm install
// - comando: npm run dev
// - abrir en el navegador