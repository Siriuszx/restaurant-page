import './style.css';
import gitHubIcon from './github.svg';
import MainBgImg from './sergio-alves-santos-PeDrafNlY2Y-unsplash.jpg';

const footer = document.querySelector('footer');

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







