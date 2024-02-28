import { PokemonCard } from "@/components/card/card";
import SelectDemo from "@/components/select/select";
import { getPokemonList } from "../lib/pokemon";
import * as styles from "./page.css";

export default async function Home() {
  const pokemon = await getPokemonList();

  return (
    <main>
      <h1>Pokemon</h1>

      <div className={styles.select}>
        <SelectDemo
          label="pokemon"
          items={pokemon.results.map((r) => ({ name: r.name, value: r.name }))}
        />
      </div>

      <section className={styles.section}>
        {pokemon.results.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </section>
    </main>
  );
}
