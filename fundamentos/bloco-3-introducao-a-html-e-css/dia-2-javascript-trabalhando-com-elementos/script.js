// Acesse o elemento elementoOndeVoceEsta

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//acesse o pai a partir de elementoOndeVoceEsta

let pai = elementoOndeVoceEsta.parentElement;

//adicionar cor ao pai.

pai.style.color = 'red';

//Acesse o primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;

//adicione um texto a ele.

primeiroFilhoDoFilho.textContent = 'tarraaaaaaaa'

//acesse o primeiroFilho a partir de pai.

let primeiroFilho = pai.firstElementChild;

//console.log(primeiroFilho);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

let primeiroFilhoCaminho2 = elementoOndeVoceEsta.previousElementSibling;
//console.log(primeiroFilhoCaminho2);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

let atencao = elementoOndeVoceEsta.nextSibling;
//console.log(atencao);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

let terceiroFilho = elementoOndeVoceEsta.nextSibling.nextSibling;
//console.log(terceiroFilho)

//Agora acesse o terceiroFilho a partir de pai .

let terceiroFilhoCaminho2 = pai.childNodes;
//console.log(terceiroFilhoCaminho2[5]);

// Crie um irmão para elementoOndeVoceEsta .

let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta .

let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho .

let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .

let terceiroFilhoCaminho3 = primeiroFilhoDoFilhoDoFilho.nextElementSibling;
//console.log(terceiroFilhoCaminho3);

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

for (let index = 0; index < pai.childNodes.length; index++) {
    let indexChildren = pai.childNodes[index];
    if(indexChildren.id !== 'elementoOndeVoceEsta'){
        indexChildren.remove();
    } 
}

//