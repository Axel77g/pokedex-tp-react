import { index,route } from "@react-router/dev/routes";

export default [index("routes/pokedexDetails.jsx"), route('pokemon/:id', "routes/pokedexList.jsx")];
