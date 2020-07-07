import React from 'react';
import PokemonSelect from '../components/PokemonSelect'

class PokemonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemon: ''
        }
        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({pokemons: data.results}));
    }

    handlePokemonSelected(pokemonName) {
        this.setState({selectedPokemon: pokemonName});
    }

    render(){
        return (
            <div className="pokemon-container">
                <h2>Pokedex Pro</h2>
                <PokemonSelect
                    pokemons={this.state.pokemons}
                    selectedPokemon={this.state.selectedPokemon}
                    onPokemonSelected={this.handlePokemonSelected}
                />
            </div>
        );
    }
}

export default PokemonContainer;