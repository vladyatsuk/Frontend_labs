const hobbyList = document.getElementById('hobbyList');
const movies = document.querySelector('p.movies');

const btn1 = document.querySelector('button:nth-of-type(1)');
const btn2 = document.querySelector('button:nth-of-type(2)');
const btn3 = document.querySelector('button:nth-of-type(3)');
const btn4 = document.querySelector('button:nth-of-type(4)');

const random = (number) => Math.floor(Math.random() * (number + 1));

const getRandomColor = () => `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

const setRandomColors = (element) => {
  element.style.backgroundColor = getRandomColor();
  element.style.color = getRandomColor();
};

const appendImage = () => {
  const image = document.createElement('img');
  image.src =
    'https://lviv.travel/image/blocks/66/83/668325f9619a04456712848827a0cea82afa0a72_1584955931.jpeg?w=600&crop=1733%2C1300%2C0%2C0';
  image.alt = 'Фото Львова';

  const link = document.createElement('a');
  link.href = 'https://lviv.travel/ua/news/lviv-suchasnii';
  link.appendChild(image);

  const grid = document.querySelector('.grid');
  const buttonBox = document.querySelector('.button-box');

  if (grid.children.length % 3 === 2) {
    if (grid.children.length !== 2) {
      grid.insertBefore(document.createElement('div'), buttonBox);
    }
    grid.insertBefore(link, buttonBox);
  } else {
    grid.insertBefore(link, buttonBox);
  }
};

const increaseImage = () => {
  const images = document.querySelectorAll('a');
  const lastImage = images[images.length - 1];

  lastImage.style.width = getComputedStyle(lastImage).width.slice(0, -2) * 1.05 + 'px';
};

const decreaseImage = () => {
  const images = document.querySelectorAll('a');
  const lastImage = images[images.length - 1];

  lastImage.style.width = getComputedStyle(lastImage).width.slice(0, -2) / 1.05 + 'px';
};

const deleteImage = () => {
  const images = document.querySelectorAll('a');
  const lastImage = images[images.length - 1];

if (images.length > 0) {
  if (images.length > 3 && images.length % 2 === 1) {
    const emptyDiv = lastImage.previousSibling;
    emptyDiv.remove();
  }
  lastImage.remove();
 }
};

hobbyList.addEventListener('click', (e) => setRandomColors(e.currentTarget));
movies.addEventListener('click', (e) => setRandomColors(e.currentTarget));

btn1.addEventListener('click', appendImage);
btn2.addEventListener('click', increaseImage);
btn3.addEventListener('click', decreaseImage);
btn4.addEventListener('click', deleteImage);
