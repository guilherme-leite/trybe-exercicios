// //Diferencas entre nextSibling e nextElementSibling.
// console.log(document.getElementById('start').nextSibling);

// console.log(document.getElementById('start').nextElementSibling);

// // O primeiro mostra o proximo nó e o outro mostra o próximo elemento. Por isso um tem o conteúdo e o outro a tag inteira.

////////////////////////////////

//Segundo Exemplo.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

elementoOndeVoceEsta.parentElement.style.color = 'red';

elementoOndeVoceEsta.children[0].innerText='Elemento Filho do filho'

const pai = document.getElementById('pai');

const primeiroFilho = document.getElementById('elementoOndeVoceEsta').nextSiblingElement;

const atencao = document.getElementById('elementoOndeVoceEsta').parentElement.innerText;

const terceiroFilho = document.getElementById('elementoOndeVoceEsta').parentElement.children[2];

const novoIrmao = document.createElement('section');
novoIrmao.innerText = 'novo irmão'
pai.appendChild(novoIrmao);

const novoFilho = document.createElement('section');
novoFilho.innerText = 'novo filho'
elementoOndeVoceEsta.appendChild(novoFilho);

const novoFilhoDoFilho = document.createElement('section');
novoFilhoDoFilho.innerText = 'Novo Filho do Filho';
elementoOndeVoceEsta.children[0].appendChild(novoFilhoDoFilho);

const terceiroFilhoAcesso = novoFilhoDoFilho.parentElement.parentElement.nextElementSibling;

const paiDoPai = document.getElementById('paiDoPai')
const childrenDoPaiDoPai = paiDoPai.children;

for(let i = 0; i < childrenDoPaiDoPai.length; i += 1){
  if(childrenDoPaiDoPai[i].id !== 'pai'){
    paiDoPai.removeChild[i];
  }
}




