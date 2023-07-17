import './style.css'
import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import LibrosLogo from '/Libros.svg'
import { Welcomeapp } from './src/welcome/welcome-app';
import { UsersApp } from './src/users/users-app';




document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${LibrosLogo}" class="logo" alt="logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
    
    </div>
   
  </div>
`;

const element = document.querySelector('.card');
Welcomeapp(element);
UsersApp(element);