const getData = document.querySelector('button.getData');
const deleteData = document.querySelector('button.deleteData');
const errorDiv = document.querySelector('.error');

const grid = document.querySelector('.grid');

getData.addEventListener('click', () => {
  errorDiv.textContent = '';
  fetch('https://randomuser.me/api')
    .then((result) => {
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      return result.json();
    })
    .then((data) => {
      const obj = data.results[0];

      const {
        picture,
        location: { postcode, city },
        name,
        email,
      } = obj;

      const imgSrc = picture.large;

      const profile = document.createElement('div');
      profile.innerHTML = `
      <img src="${imgSrc}" />
      <ul>
        <li>Name: ${name.title} ${name.first} ${name.last}</li>
        <li>City: ${city}</li>
        <li>Postcode: ${postcode}</li>
        <li>Email: ${email}</li>
      </ul>`;

      grid.appendChild(profile);
    })
    .catch((error) => {
      console.error('Error while fetching data:', error);
      errorDiv.textContent = error.message;
    });
});

deleteData.addEventListener('click', () => {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
});
