import {useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch.js";
import {usePokemonSearchContext} from "../contexts/pokemonSearchContext.jsx";

export function Filters(){
    const {make} = useFetch('/types',{method:"GET"})
    const [types, setTypes] = useState([]);
    const {setTypeId,setLimit,limit} = usePokemonSearchContext();

    useEffect(()=>{
        make().then((response)=>{
            setTypes(response.data)
        })
    },[])

    function handleChange(event){
        setTypeId(event.target.value)
    }

    function handleChangeLimit(event){
        setLimit(event.target.value)
    }


    return <div className={'flex gap-2 flex-1'}>
        {/*  Type selector  */}
        <select onChange={handleChange} className={'bg-white text-red-400 rounded p-2.5'}>
            <option value={''}>All</option>
            {
                types.map((type)=>{
                    return <option key={type.id} value={type.id}>{type.name}</option>
                })
            }
        </select>

        <select onChange={handleChangeLimit} className={'bg-white text-red-400 rounded p-2.5'} value={limit}>
            <option value={10}>Limit 10</option>
            <option value={20}>Limit 20</option>
            <option value={50}>Limit 50</option>
        </select>
    </div>
}