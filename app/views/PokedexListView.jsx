import {usePokemonContext} from "../contexts/pokemonContext.jsx";
import {useEffect} from "react";
import {PokemonCard} from "../components/PokemonCard.jsx";
import Pagination from "../components/Pagination.jsx";

export  function PokedexListView() {
  const {loadPokemons,pokemons,loading} = usePokemonContext();

  useEffect(()=>{
    loadPokemons();
  },[])

  if(loading){
    return <main className={'bg-white p-4 rounded'}>
      Loading...
    </main>
  }
  return <main className={'bg-white p-4 rounded flex flex-col gap-4 items-center'}>
    <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'}>
      {
        pokemons.map((pokemon,i)=>{
          return <PokemonCard pokemon={pokemon} key={'pokemon-card-'+i}/>
        })
      }

    </div>
    <Pagination/>

  </main>
}