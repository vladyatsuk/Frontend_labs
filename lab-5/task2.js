const myVar = 5;

const colorPicker = document.getElementById('colorPicker');
const cells = document.querySelectorAll('td');
const myCell = cells[myVar - 1];

myCell.addEventListener('mouseover', (e) => {
  const random = (number) => Math.floor(Math.random() * (number + 1));
  e.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
});

myCell.addEventListener('click', (e) => {
  e.target.style.backgroundColor = colorPicker.value;
});

myCell.addEventListener('dblclick', () => {
  for (let i = 0; i < cells.length; i++) {
    if (i !== myVar - 1) {
      cells[i].style.backgroundColor = colorPicker.value;
    }
  }
});
