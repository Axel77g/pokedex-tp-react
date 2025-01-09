import {createContext, useContext, useEffect, useRef, useState} from "react";
import {useFetch} from "../hooks/useFetch.js";
import {usePokemonSearchContext} from "./pokemonSearchContext.jsx";
export function pokemonContextValue(){
    const init = useRef(true);
    const {getQueryString} = usePokemonSearchContext();
    const {loading, make} = useFetch('/pokemons?'+ getQueryString() ,{
        method:'GET',
    })
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=>{
        if(init.current){
           init.current = false;
           return
        }
        loadPokemons();
    },[getQueryString])

    async function loadPokemons(){
       try{
          const response = await make();
            setPokemons(response.data)
       }catch (e){
           console.error(e)
           setPokemons([])
       }
    }

    return {
        loading,
        pokemons,
        loadPokemons,
    }
}

export const PokemonContext = createContext({})

export const PokemonContextProvider = ({children})=>{
    return <PokemonContext.Provider value={pokemonContextValue()}>
        {children}
    </PokemonContext.Provider>
}

export const usePokemonContext = ()=>{
    return useContext(PokemonContext)
}
