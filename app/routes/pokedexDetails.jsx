import {PokedexListView} from "../views/PokedexListView.jsx";

export function meta({}) {
  return [
    { title: "Pokedex - Home" },
    { name: "description", content: "Bienvenue dans le pokedex !" },
  ];
}

export default function PokedexDetails() {
  return <PokedexListView />;
}
