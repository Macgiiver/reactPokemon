import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Pokemonsname from './components/pokemonsname'
import Pokemonid from './components/pokemonsid'
import Pokemonstype from './components/pokemonstype'
import './index.css';

const Tablalista = () => {

    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=150')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
                await allPokemons.sort((a, b) => a.id - b.id)


            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    const pokemonlist = [
        { position: "#01", name: "pokemon", type: "pokemon.type" },
        { position: "#02", name: "pokemon", type: "pokemon.type" },
        { position: "#03", name: "pokemon", type: "pokemon.type" },
    ]

    const pokemonCC = (pokemonlist, index) => {
        return (
            <tr key={index}>
                <td>{pokemonlist.position}</td>
                <td>{pokemonlist.name}</td>
                <td>{pokemonlist.type}</td>
            </tr>
        )
    }

    return (
        <div>
        <h1>Pokemos Go!</h1>
        <div>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{allPokemons.map((pokemonStats, index) =>
                        <Pokemonid
                            key={index}
                            id={pokemonStats.id}
                        />)}</td>
                        <td>{allPokemons.map((pokemonStats, index) =>
                        <Pokemonsname
                            key={index}
                            name={pokemonStats.name}
                        />)}</td>
                        <td>{allPokemons.map((pokemonStats, index) =>
                        <Pokemonstype
                            key={index}
                            type={pokemonStats.types[0].type.name}
                        />)}</td>
                    </tr>
                </tbody>
            </ReactBootStrap.Table>
        </div>
        </div>
    );
}

export default Tablalista