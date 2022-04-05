
const URL = `https://api.coincap.io/v2/assets`;

const fetchAPI = async () => {
  const coins = await fetch(URL)
    .then(response => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coins;
};

const setCoins = async () => {
  const coins = await fetchAPI();

  const coinList = document.getElementById('coins-container');

  coins.filter((coin) => Number(coin.rank) <= 10).forEach((coin) => {
    const newLi = document.createElement('li');
    const priceUsd = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${priceUsd.toFixed(2)}`

    coinList.appendChild(newLi);
  });
};

window.onload = () => setCoins();