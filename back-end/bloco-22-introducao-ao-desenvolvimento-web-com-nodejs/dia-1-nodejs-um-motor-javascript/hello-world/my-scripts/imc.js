const peso = 80;
const altura = 178;

function calcImc() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso/ Math.pow(altura/ 100,2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calcImc();