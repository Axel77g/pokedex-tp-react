import {usePokemonSearchContext} from "../contexts/pokemonSearchContext.jsx";
import {Button} from "./Button.jsx";

export default function Pagination(){
    const {nextPage,prevPage} = usePokemonSearchContext();
    return <div className={'flex gap-4'}>
        <Button onClick={prevPage}>&lt;</Button>
        <Button onClick={nextPage}>&gt;</Button>
    </div>
}