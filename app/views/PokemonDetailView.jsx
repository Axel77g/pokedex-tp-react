import {useFetch} from "../hooks/useFetch.js";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {Button} from "../components/Button.jsx";
import {PokemonImage} from "../components/PokemonImage.jsx";

const maxStatValue = 100;
export function PokemonDetailView(){
    const params = useParams()
    const navigate = useNavigate()
    const url = `/pokemons/${params.id}`
    const {make, loading} = useFetch(url,{method:"GET"})

    /**
     * @type {[Pokemon, Function]}
     */
    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        make().then((response)=>{
            setPokemon(response.data)
        }).catch((e)=>{
            console.error(e)
            navigate('/404')
        })
    },[])

    function handleGoBack(){
        navigate('/')
    }

    if(loading || !pokemon) return <main className={'bg-white p-4 rounded'}>Loading...</main>
    return <main className={'bg-white p-4 rounded'}>
        <Button onClick={handleGoBack}>Retour</Button>
        <div
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] lg:grid-cols-[2fr_1fr_2fr] gap-4 p-4"
        >
            {/* Informations principales */}
            <div className="border-2 border-red-100 rounded overflow-hidden">
                <div className="flex gap-4 bg-red-100 text-red-500 p-2 px-8 items-center">
                    <span>No. {pokemon.pokedexId}</span>
                    <h1 className="text-xl font-semibold">{pokemon.name}</h1>
                </div>

                <div className="divide-y p-2 px-8">
                    {pokemon.types.map((type) => (
                        <span
                            key={type.name}
                            className="flex gap-2 items-center text-md py-2"
                        >
              <img src={type.image} alt={type.name} className="h-10" />
                            {type.name}
            </span>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div>
                <PokemonImage pokemon={pokemon} className="w-40 mx-auto"/>
            </div>

            {/* Statistiques */}
            <div>
                {Object.entries(pokemon.stats).map(([statName, statValue]) => (
                    <div key={statName} className="mb-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span>{statName}</span>
                            <span>{statValue}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-red-500 h-2 rounded-full"
                                style={{
                                    width: `${Math.min((statValue / maxStatValue) * 100, 100)}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>

}