import { PokemonCard } from "@/components/card/card";
import SelectDemo from "@/components/select/select";
import { getPokemonList } from "../lib/pokemon";
import * as styles from "./page.css";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const pokemon = await getPokemonList();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Pokemon</h1>

      <div className={styles.select}>
        <SelectDemo
          defaultValue={pokemon.results[0].name}
          items={pokemon.results.map((r) => ({ name: r.name, value: r.name }))}
        />
      </div>

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
