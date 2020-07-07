import React from 'react';

class PokemonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: []
        }
    }

    render(){
        return (
            <div className="pokemon-container">
                <h2>All the Pokemonses!</h2>
            </div>
        );
    }
}

export default PokemonContainer;