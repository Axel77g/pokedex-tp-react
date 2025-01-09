import {useState} from "react";

export function PokemonImage({pokemon, className = ''}) {
    const [loaded,setLoaded] = useState(false);
    return <div className={'relative flex justify-center items-center'}>
        <img loading={'lazy'} onLoad={()=>setLoaded(true)} src={pokemon.image} alt={pokemon.name} className={className}/>
        {
            loaded
            &&
            <div
                className="absolute opacity-30 bottom-0 w-24 h-6 bg-gradient-to-b from-red-950 to-transparent rounded-full blur-md"
                style={{transform: 'translateY(0px) scaleY(0.7)'}}
            ></div>
        }

    </div>
}