import { PokemonCard } from "@/components/card/card";
import { getPokemonList } from "../../lib/pokemon";

export default async function Home() {
  const pokemons = await getPokemonList();
  return (
    <main>
      <h1>Pokemon</h1>

      {pokemons.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </main>
  );
}
