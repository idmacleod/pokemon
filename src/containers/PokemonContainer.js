import React from 'react';
import PokemonSelect from '../components/PokemonSelect'
import PokemonDetail from '../components/PokemonDetail';

class PokemonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemon: null
        }
        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({pokemons: data.results}));
    }

    handlePokemonSelected(pokemonUrl) {
        fetch(pokemonUrl)
            .then(res => res.json())
            .then(data => this.setState({selectedPokemon: data}));
    }

    render() {
        return (
            <div className="pokemon-container">
                <h2>Pokedex Pro</h2>
                <PokemonSelect
                    pokemons={this.state.pokemons}
                    selectedPokemon={this.state.selectedPokemon}
                    onPokemonSelected={this.handlePokemonSelected}
                />
                <PokemonDetail pokemon={this.state.selectedPokemon} />
            </div>
        );
    }
}

export default PokemonContainer;