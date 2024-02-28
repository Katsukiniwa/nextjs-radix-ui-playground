import { PokemonDetail } from "@/types"

export const getPokemonList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return res as {
    count: number,
    next: string,
    previous: string,
    results: {
      name: string,
      url: string
    }[]
  }
}

export const getPokemonDetail = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, id * 200));

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  return res as PokemonDetail
}

