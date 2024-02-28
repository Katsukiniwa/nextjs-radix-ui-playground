import { PokemonCard } from "@/components/card/card";
import SelectDemo from "@/components/select/select";
import { getPokemonList } from "../lib/pokemon";
import * as styles from "./page.css";
import { Suspense } from "react";

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

      <p>
        SuspenseとPoke
        API呼び出し時のsleep(id*1000)の組み合わせでidが若い順に表示されるようにしています
      </p>
      <section className={styles.section}>
        {pokemon.results.map((p) => (
          <Suspense key={p.name} fallback={<p>Loading data...</p>}>
            <PokemonCard key={p.name} name={p.name} url={p.url} />
          </Suspense>
        ))}
      </section>
    </main>
  );
}
