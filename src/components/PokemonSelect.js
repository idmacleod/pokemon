import React from 'react';

const PokemonSelect = (props) => {
    const options = props.pokemons.map(pokemon => {
        return <option value={pokemon.name} key={pokemon.name}>
            {pokemon.name}
        </option>
    });
    
    const handleChange = event => props.onPokemonSelected(event.target.value);

    return (
        <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Choose your Pokemon</option>
            {options}
        </select>
    );
}

export default PokemonSelect;