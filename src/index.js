const contentContainer = document.createElement('div');
contentContainer.classList.add('content');

const defaultImg = document.createElement('img');
defaultImg.setAttribute('alt', 'Image');

const heading = document.createElement('h1');
heading.textContent = 'This is my Restaurant';

const desc = document.createElement('p');
desc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
    ' Eveniet hic quisquam neque' +
    'deleniti rem eum quo autem dolore exercitationem asperiores.';

document.body.appendChild(contentContainer);
contentContainer.appendChild(defaultImg);
contentContainer.appendChild(heading);
contentContainer.appendChild(desc);
