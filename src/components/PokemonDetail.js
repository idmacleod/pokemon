import React from 'react';
import { capitalize } from '../helpers';

const PokemonDetail = ({pokemon}) => {
    if (!pokemon) return null;

    const types = pokemon.types.map(type => {
        return <li key={type.type.name}>{capitalize(type.type.name)}</li>
    });

    const abilities = pokemon.abilities.map(ability => {
        return <li key={ability.ability.name}>{capitalize(ability.ability.name)}</li>
    });

    const moves = pokemon.moves.map(move => {
        return <li key={move.move.name}>{capitalize(move.move.name)}</li>
    });

    return (
        <>
            <div>
                <img src={pokemon.sprites.front_default} alt="front"/>
                <img src={pokemon.sprites.back_default} alt="back"/>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <td>{capitalize(pokemon.name)}</td>
                    </tr>
                    <tr>
                        <th>Weight:</th>
                        <td>{pokemon.weight}</td>
                    </tr>
                    <tr>
                        <th>Height:</th>
                        <td>{pokemon.height}</td>
                    </tr>
                    <tr>
                        <th>Types:</th>
                        <td><ul>{types}</ul></td>
                    </tr>
                    <tr>
                        <th>Abilities:</th>
                        <td><ul>{abilities}</ul></td>
                    </tr>
                    <tr>
                        <th>Moves:</th>
                        <td><ul>{moves}</ul></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default PokemonDetail;