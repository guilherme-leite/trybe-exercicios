import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemonIndex: 0,
            filteredType: 'all',
        };
    }

    filterPokemon(filteredType) {
        this.setState({ filteredType, pokemonIndex: 0 });
    }

    nextPokemon(numberOfPokemon) {
        this.setState(state => ({
            pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemon,
        }));
    }

    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;