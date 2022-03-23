const sendBtn = document.querySelector('#send-btn');
const deleteBtn = document.querySelector('#delete-btn');
const nameInput = document.querySelector('#input-nome');
const emailInput = document.querySelector('#input-email');
const optInput = document.querySelector('#opt-1');
const textInput = document.querySelector('textarea');
const dataInput = document.querySelector('#input-data');
const opt1Input = document.querySelector('#checkbox1');
const opt2Input = document.querySelector('#checkbox2');

console.log(textInput);

sendBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("yafuu");
});

deleteBtn.addEventListener('click', () => {
  nameInput.value = '';
  emailInput.value = '';
  optInput.checked = true;
  textInput.value = '';
  dataInput.value = '';
  opt1Input.checked = false;
  opt2Input.checked = false;
});