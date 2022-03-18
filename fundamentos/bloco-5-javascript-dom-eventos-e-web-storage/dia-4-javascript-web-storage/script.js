const bGColorBtn = document.getElementById('bg-button');
const bGColorInpt = document.getElementById('bg-input');
const section = document.getElementsByTagName('section');

function setBackGroundColor() {
  section[0].style.backgroundColor = bGColorInpt.value;
  console.log(section[0].style.backgroundColor);
  
}



bGColorBtn.addEventListener('click', setBackGroundColor);