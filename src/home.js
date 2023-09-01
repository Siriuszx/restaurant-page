const loadHomePage = function () {

    // Wipes 'content' box to reload contents
    const content = document.querySelector('.content');
    content.innerHTML = '';

    
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');
    heroContainer.textContent = 'Open at Lorem Straße now';

    content.appendChild(heroContainer);
}

export default loadHomePage;