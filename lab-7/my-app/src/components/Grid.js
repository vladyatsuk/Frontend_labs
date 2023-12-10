import Image from './Image';
import Button from './Button';

const Grid = () => {
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

  return (
    <div className='grid'>
      <Image />
      <div className='button-box'>
        <Button name='Додати' handleClick={appendImage}/>
        <Button name='Збільшити' handleClick={increaseImage}/>
        <Button name='Зменшити' handleClick={decreaseImage}/>
        <Button name='Видалити' handleClick={deleteImage}/>
      </div>
    </div>
  );
}

export default Grid;