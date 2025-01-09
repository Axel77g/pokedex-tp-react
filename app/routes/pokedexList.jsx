import {PokemonDetailView} from "../views/PokemonDetailView.jsx";

export function meta({}) {
    return [
        { title: "Pokemon detail" },
        { name: "description", content: "Detail d'un pokemon !" },
    ];
}

export default function PokedexList() {
    return <PokemonDetailView />;
}
