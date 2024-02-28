import { getPokemonDetail } from "@/lib/pokemon";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemonDetail(Number(params.id));
  return (
    <main>
      <h1>{pokemon.name}</h1>
      <Link href="/">back to top</Link>

      <h2>ability</h2>
      {pokemon.abilities.map((ability) => (
        <p key={ability.ability.name}>{ability.ability.name}</p>
      ))}

      <h2>image</h2>
      <Image
        src={pokemon.sprites.front_default}
        width={100}
        height={100}
        alt="pokemon"
      />
    </main>
  );
}
