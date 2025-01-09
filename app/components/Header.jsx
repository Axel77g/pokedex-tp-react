import Pokeball from "../icons/Pokeball.jsx";

export function Header(){
    return <header className={'flex gap-2 items-center mb-4' }>
        <Pokeball/>
        <h1 className={'text-2xl font-medium'}>Pokedex</h1>
    </header>
}