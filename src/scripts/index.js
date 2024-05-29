import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#Hamburger'),
  drawer: document.querySelector('.list-menu'),
  content: document.querySelector('#Main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// code dibawah dari project 1 sebelumnya
// const navbar = document.querySelector(".list-menu");
// document.querySelector("#Hamburger").onclick = () => {
//   navbar.classList.toggle("active");
// };
// document.querySelector("main, .Hero").onclick = () => {
//   navbar.classList.remove("active");
// };
