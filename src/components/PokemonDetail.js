import React from 'react';
import { capitalize } from '../helpers';

const PokemonDetail = ({pokemon}) => {
    if (!pokemon) return null;
    return (
        <h3>
            {capitalize(pokemon.name)}
        </h3>
    );
}

export default PokemonDetail;