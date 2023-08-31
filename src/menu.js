const loadMenuContents = function () {

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    const menuHeader = document.createElement('h2');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Our Menu';

    const menuCardContainer = document.createElement('div');
    menuCardContainer.classList.add('menu-card-container');

    // Menu cards section
    const menuCard1 = document.createElement('div');
    menuCard1.classList.add('menu-card');

    const menuCard1Header = document.createElement('h3');
    menuCard1Header.textContent = 'Long Island Ice Tea';

    const menuCard1Desc = document.createElement('p');
    menuCard1Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    menuCard1.appendChild(menuCard1Header);
    menuCard1.appendChild(menuCard1Desc);

    
    const menuCard2 = document.createElement('div');
    menuCard2.classList.add('menu-card');

    const menuCard2Header = document.createElement('h3');
    menuCard2Header.textContent = 'Long Island Ice Tea';

    const menuCard2Desc = document.createElement('p');
    menuCard2Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    menuCard2.appendChild(menuCard2Header);
    menuCard2.appendChild(menuCard2Desc);

    
    const menuCard3 = document.createElement('div');
    menuCard3.classList.add('menu-card');

    const menuCard3Header = document.createElement('h3');
    menuCard3Header.textContent = 'Long Island Ice Tea';

    const menuCard3Desc = document.createElement('p');
    menuCard3Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    menuCard3.appendChild(menuCard3Header);
    menuCard3.appendChild(menuCard3Desc);

    
    const menuCard4 = document.createElement('div');
    menuCard4.classList.add('menu-card');

    const menuCard4Header = document.createElement('h3');
    menuCard4Header.textContent = 'Long Island Ice Tea';

    const menuCard4Desc = document.createElement('p');
    menuCard4Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    menuCard4.appendChild(menuCard4Header);
    menuCard4.appendChild(menuCard4Desc);


    menuCardContainer.appendChild(menuCard1);
    menuCardContainer.appendChild(menuCard2);
    menuCardContainer.appendChild(menuCard3);
    menuCardContainer.appendChild(menuCard4);

    menu.appendChild(menuHeader);
    menu.appendChild(menuCardContainer);
    content.appendChild(menu);
}

export default loadMenuContents;