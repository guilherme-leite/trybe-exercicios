import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='card'>
        { pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon.name}/>)}
      </div>
    )
  }
}

export default Pokedex;
