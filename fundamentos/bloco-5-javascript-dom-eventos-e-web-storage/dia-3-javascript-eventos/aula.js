// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//Ela tem a propriedade translation com a posição alterada.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado..

const firstLi = document.getElementById("first-li")
const secondLi = document.getElementById("second-li")
const thirdLi = document.getElementById("third-li")
const input = document.getElementById('input');

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);

function addTechClass(event){
  const techClassElement = document.querySelector('.tech');
  techClassElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

//Ao iniciar a função eu capturo o elemento que tiver a classe e salvo esta em uma constante. A partir dela posso mudar o valor de qualquer uma que já tenha essa classe para '';

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


input.addEventListener('input', changeText);

function changeText(event) {
  const techClassElement = document.querySelector('.tech');
  techClassElement.innerText = event.target.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

const myWebpage = document.getElementById('my-spotrybefy');

myWebpage.addEventListener('dblclick', takeMeToUrl);

function takeMeToUrl() {
  window.location.replace('https://www.spotify.com')
};

// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', changeColor);

function changeColor() {
  myWebpage.style.color = 'red';
}

myWebpage.addEventListener('mouseout', changeColorBack);

function changeColorBack() {
  myWebpage.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  if (event.target.id === 'first-li'){
    event.target.innerText = 'Aqui está a primeira tecnologia que mais gostei.'
  } else if (event.target.id === 'second-li'){
    event.target.innerText = 'Aqui está a segunda tecnologia que mais gostei.'
  } else {
    event.target.innerText = 'Aqui está a terceira tecnologia que mais gostei.'
  }
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.