import './style.css';
import loadInitialPage from './initialPage.js';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

loadInitialPage(); 

const homeBtn = document.querySelector('.home-link');
homeBtn.addEventListener('click', loadHomePage);

const menuBtn = document.querySelector('.menu-link');
menuBtn.addEventListener('click', loadMenuPage);

const contactBtn = document.querySelector('.contact-link');
contactBtn.addEventListener('click', loadContactPage);