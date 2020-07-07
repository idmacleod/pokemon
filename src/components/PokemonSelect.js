import React from 'react';
import { capitalize } from '../helpers';

const PokemonSelect = (props) => {
    const options = props.pokemons.map(pokemon => {
        return <option value={pokemon.url} key={pokemon.name}>
            {capitalize(pokemon.name)}
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