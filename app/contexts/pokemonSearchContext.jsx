import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";

function pokemonSearchContextValue(){
    const [search, _setSearch] = useState('');
    const [typeId, _setTypeId] = useState(null);
    const [limit, _setLimit] = useState(20);
    const [page,_setPage] = useState(1);

    const navigate = useNavigate();
    const getQueryString = useCallback(()=> {
        let queryObject = {};
        if(search){
            queryObject.name = search;
        }
        if(typeId){
            queryObject.typeId = typeId;
        }
        if(limit){
            queryObject.limit = limit;
        }
        if(page){
            queryObject.page = page;
        }
        const query = new URLSearchParams(queryObject);
        return query.toString();
    }, [search,typeId,limit,page])

    function redirect(){
        if(location.pathname !== '/'){
            navigate('/')
        }
    }

    function nextPage(){
        _setPage(page+1)
    }

    function prevPage(){
        if(page > 1) _setPage(page-1)
    }

    return {
        search,
        setSearch(...args){
            redirect()
            _setSearch(...args)
        },
        typeId,
        setTypeId(...args){
            redirect()
            _setTypeId(...args)
        },
        limit,
        setLimit(...args){
            redirect()
            _setLimit(...args)
        },
        nextPage,
        prevPage,
        getQueryString
    }
}

const PokemonSearchContext = createContext({})

export const PokemonSearchContextProvider = ({children})=>{
    return <PokemonSearchContext.Provider value={pokemonSearchContextValue()}>
        {children}
    </PokemonSearchContext.Provider>
}

export const usePokemonSearchContext = ()=>{
    return useContext(PokemonSearchContext)
}
