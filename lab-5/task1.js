const nameInput = document.getElementById('name');
const groupInput = document.getElementById('group');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const emailInput = document.getElementById('email');

const submitInput = document.querySelector('input[type="button"]');

const uk = '[А-ЩЬЮЯҐЄІЇа-щьюяґєії]';

const validations = {
  name: new RegExp(`^${uk}+\\s+${uk}\\.${uk}\\.$`),
  group: new RegExp(`^${uk}{2}-\\d{2}$`),
  phone: new RegExp(`^\\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}$`),
  address: new RegExp(`^[мМ]\\.\\s+${uk}+$`),
  email: new RegExp(`^[a-z]+@[a-z]+\\.com$`),
};

const validateForm = () => {
  let isValid = true;

  const inputs = [];
  for (const field in validations) {
    const input = document.getElementById(field);
    const value = input.value.trim();

    if (!validations[field].test(value)) {
      isValid = false;
      input.style.border = '0.1em solid red';
    } else {
      input.style.border = '0.1em solid green';
      inputs.push(value);
    }
  }

  if (isValid) {
    const outputs = document.querySelectorAll('.output-container span.output');
    for (let i = 0; i < outputs.length; i++) {
      const output = outputs[i];
      output.textContent = inputs[i];
    }
  }
};

submitInput.addEventListener('click', validateForm);
