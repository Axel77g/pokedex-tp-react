import {useNavigate} from "react-router";
import {PokemonImage} from "./PokemonImage.jsx";

/**
 * @param {Pokemon} pokemon
 * @returns {JSX.Element}
 * @constructor
 */
export function PokemonCard({pokemon}) {
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/pokemon/${pokemon.pokedexId}`)
    }
    return <div onClick={handleClick} className={'relative border-red-100 border-2 rounded p-2 cursor-pointer hover:bg-red-50 hover:scale-105 transition-transform'}>
        <span className={'opacity-30 top-3 right-3 absolute'}>#{pokemon.pokedexId}</span>

        <div className={'mt-4 flex justify-center'}>
            <PokemonImage pokemon={pokemon} className={'max-w-15'}/>
        </div>
        <div className={'bg-red-100 rounded mt-[-20px] p-2 pt-6'}>
            <h2 className={'text-center font-semibold '}>{pokemon.name}</h2>
            <div className={'flex justify-center gap-4'}>
                {pokemon.types.map((type,i) => {
                    return <img key={'image'+i} className={'h-5'} src={type.image} alt={type.name}/>
                })}
            </div>
        </div>
    </div>

}