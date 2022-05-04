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

    pokemonFilter(filter) {
        this.setState({ filter, pokemonIndex: 0 });
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