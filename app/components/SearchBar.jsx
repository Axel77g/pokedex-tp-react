import Search from "../icons/Search.jsx";
import {usePokemonSearchContext} from "../contexts/pokemonSearchContext.jsx";
import {memo, useRef} from "react";

function SearchBar({}){
    const searchContext = usePokemonSearchContext();
    const cooldown = useRef(null);
    console.log("searchBar")
    function handleInput(event){
        if(cooldown.current){
            clearTimeout(cooldown.current)
        }
        cooldown.current = setTimeout(()=> {
            searchContext.setSearch(event.target.value)
        }, 500)
    }

    return <div onInput={handleInput} className={'bg-white flex rounded items-center relative overflow-hidden my-6'}>
        <Search className={'absolute left-2'}/>
        <input className={'bg-white text-red-400 text-md w-full p-2 pl-[35px]'} placeholder={'Search'} />
    </div>
}

export default memo(SearchBar)