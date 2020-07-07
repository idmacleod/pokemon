import React from 'react';

class PokemonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({pokemons: data.results}));
    }

    render(){
        return (
            <div className="pokemon-container">
                <h2>Pokedex Pro</h2>
            </div>
        );
    }
}

export default PokemonContainer;