import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

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
        const filteredPokemons = this.fetchFilteredPokemons();
        const pokemonTypes = this.fetchPokemonTypes();
        const pokemon = filteredPokemons[this.state.pokemonIndex];

        return (
            <div className="pokedex">
                <Pokemon pokemon={ pokemon } />
                <div className='pokedex-buttons-panel'>
                    <Button
                    onClick={() => this.filterPokemons('all')}
                    className='filter-button'
                    >
                        All
                    </Button>
                    {pokemonTypes.map(type => (
                     <Button 
                     key={ type }
                     onClick={() => this.filterPokemons(type)}
                     className='filter-button'
                     >
                         { type }
                     </Button>
                    ))}
                </div>
                    <Button 
                        className='pokedex-button'
                        onClick={() => this.nextPokemon(filteredPokemons.lenght)}
                        disabled={ filteredPokemons.lenght <= 1 }
                    >
                        Próximo pokemon
                     </Button>
            </div>
        );
    }
}

export default Pokedex;