import { PokemonDetail } from "@/types"

export const getPokemonList = async () => {
  const tmp = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const json: {
    count: number,
    next: string,
    previous: string,
    results: {
      name: string,
      url: string
    }[]
  }
    = await tmp.json()

  return json
}

export const getPokemonDetail = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, id * 200));

  const tmp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  const json = await tmp.json()

  return json as PokemonDetail
}

