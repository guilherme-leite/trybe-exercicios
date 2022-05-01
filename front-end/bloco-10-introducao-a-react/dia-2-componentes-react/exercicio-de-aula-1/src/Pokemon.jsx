import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='card'>
        { pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon.name}/>)}
      </div>
    )
  }
}

// {
//   id: 148,
//   name: "Dragonair",
//   type: 'Dragon',
//   averageWeight: {
//       value: 16.5,
//       measurementUnit: "kg"
//   },
//   image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
//   moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
// }

export default Pokemon;
