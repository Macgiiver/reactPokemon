import React, { useEffect, useState } from 'react'
import Pokemons from './components/pokemos'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

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

    return (
        <div className="app-contaner">
            <h1>Pokemos Go!</h1>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats, index) =>
                        <Pokemons
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.sprites.other.dream_world.front_default}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default App;
