import userIcon from './user.png';

const loadContactPage = function () {
    
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const contact = document.createElement('div');
    contact.classList.add('content-container');

    const contactHeader = document.createElement('h2');
    contactHeader.classList.add('container-header');
    contactHeader.textContent = 'Our Contacts';

    const contactCardContainer = document.createElement('div');
    contactCardContainer.classList.add('container-card-container');

    // Content cards
    const contactCard1 = document.createElement('div');
    contactCard1.classList.add('container-card');

    const contactCard1Image = new Image();
    contactCard1Image.classList.add('user-img');
    contactCard1Image.src = userIcon;

    const contactCard1Header = document.createElement('h3');
    contactCard1Header.textContent = '@CoolGuy123';

    const contactCard1Desc = document.createElement('p');
    contactCard1Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    contactCard1.appendChild(contactCard1Image);
    contactCard1.appendChild(contactCard1Header);
    contactCard1.appendChild(contactCard1Desc);


    const contactCard2 = document.createElement('div');
    contactCard2.classList.add('container-card');

    const contactCard2Image = new Image();
    contactCard2Image.classList.add('user-img');
    contactCard2Image.src = userIcon;

    const contactCard2Header = document.createElement('h3');
    contactCard2Header.textContent = '@CoolGuy123';

    const contactCard2Desc = document.createElement('p');
    contactCard2Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    contactCard2.appendChild(contactCard2Image);
    contactCard2.appendChild(contactCard2Header);
    contactCard2.appendChild(contactCard2Desc);


    const contactCard3 = document.createElement('div');
    contactCard3.classList.add('container-card');

    const contactCard3Image = new Image();
    contactCard3Image.classList.add('user-img');
    contactCard3Image.src = userIcon;

    const contactCard3Header = document.createElement('h3');
    contactCard3Header.textContent = '@CoolGuy123';

    const contactCard3Desc = document.createElement('p');
    contactCard3Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    contactCard3.appendChild(contactCard3Image);
    contactCard3.appendChild(contactCard3Header);
    contactCard3.appendChild(contactCard3Desc);


    const contactCard4 = document.createElement('div');
    contactCard4.classList.add('container-card');

    const contactCard4Image = new Image();
    contactCard4Image.classList.add('user-img');
    contactCard4Image.src = userIcon;

    const contactCard4Header = document.createElement('h3');
    contactCard4Header.textContent = '@CoolGuy123';

    const contactCard4Desc = document.createElement('p');
    contactCard4Desc.textContent = 'Lorem ipsum dolor, sit amet consectetur ' +
        'adipisicing elit. Dolorem, dignissimos.';

    contactCard4.appendChild(contactCard4Image);
    contactCard4.appendChild(contactCard4Header);
    contactCard4.appendChild(contactCard4Desc);


    contactCardContainer.appendChild(contactCard1);
    contactCardContainer.appendChild(contactCard2);
    contactCardContainer.appendChild(contactCard3);
    contactCardContainer.appendChild(contactCard4);

    contact.appendChild(contactHeader);
    contact.appendChild(contactCardContainer);
    content.appendChild(contact);
}

export default loadContactPage;