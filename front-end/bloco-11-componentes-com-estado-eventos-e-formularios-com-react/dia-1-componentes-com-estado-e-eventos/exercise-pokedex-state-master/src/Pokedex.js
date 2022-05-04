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

    fetchFilteredPokemons() {
        const { pokemons } = this.props;
        const { filteredType } = this.state;

        return pokemons.filter(pokemon => {
            return filteredType === 'all' ? true : pokemon.type === filteredType;
        });
    }

    fetchPokemonTypes() {
        const { pokemons } = this.props;
        return [ ...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
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