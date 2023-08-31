import gitHubIcon from './github.svg';
import MainBgImg from './sergio-alves-santos-PeDrafNlY2Y-unsplash.jpg';
import loadHomeContents from './home.js';
import loadMenuContents from './menu';

const loadInitialPage = function () {

    const body = document.querySelector('body');

    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    // Header

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('logo');
    headerLogo.textContent = 'New Berlin Bar';

    const headerNav = document.createElement('nav');
    headerNav.classList.add('header-nav');

    const navUl = document.createElement('ul');

    const navLi1 = document.createElement('li');
    const navLink1 = document.createElement('a');
    navLink1.classList.add('nav-link');
    navLink1.textContent = 'Home';

    const navLi2 = document.createElement('li');
    const navLink2 = document.createElement('a');
    navLink2.classList.add('nav-link');
    navLink2.textContent = 'Menu';

    const navLi3 = document.createElement('li');
    const navLink3 = document.createElement('a');
    navLink3.classList.add('nav-link');
    navLink3.textContent = 'Contact';

    const reserveBtn = document.createElement('button');
    reserveBtn.type = 'button';
    reserveBtn.textContent = 'Reserve Table';

    navLi1.appendChild(navLink1);
    navLi2.appendChild(navLink2);
    navLi3.appendChild(navLink3);

    navUl.appendChild(navLi1);
    navUl.appendChild(navLi2);
    navUl.appendChild(navLi3);

    headerNav.appendChild(navUl);
    headerNav.appendChild(reserveBtn);

    header.appendChild(headerLogo);
    header.appendChild(headerNav);

    // Main

    const content = document.createElement('div');
    content.classList.add('content');
    content

    main.appendChild(content);
    // loadHomeContents();
    loadMenuContents();

    // Footer

    const authorContainer = document.createElement('div');
    authorContainer.classList.add('author-container');

    const logoLink = document.createElement('a');
    logoLink.href = 'https://github.com/siriuszx';

    const gitHubLogo = new Image();
    gitHubLogo.classList.add('github-logo');
    gitHubLogo.src = gitHubIcon;
    gitHubLogo.alt = 'GitHub Logo';

    const aliasFooter = document.createElement('span');
    aliasFooter.textContent = 'Siriuszx';

    logoLink.appendChild(gitHubLogo);
    authorContainer.appendChild(logoLink);
    authorContainer.appendChild(aliasFooter);

    footer.appendChild(authorContainer);
}



export default loadInitialPage;