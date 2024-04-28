import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../komponen/list-Tempat'
console.log('Hello Coders! :)');
 
const navbar = document.querySelector(".list-menu");

document.querySelector("#Hamburger").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("main, .Hero").onclick = () => {
  navbar.classList.remove("active");
};