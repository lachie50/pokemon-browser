import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation"

export default async function PokemonDetailsPage({ params }: { params: { name: string } }) {
    const { name } = await params

    {/* fetching individual stats for pokemons */}
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      notFound();
    }

    const pokemon = await response.json()

    return (
        <div>
            <h1>{pokemon.name}</h1>

            
        <div style={{ display: "flex", gap: "20px" }}>
        
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} front`}
          width={150}
          height={150}
        />

        <Image
          src={pokemon.sprites.back_default}
          alt={`${pokemon.name} back`}
          width={150}
          height={150}
        />

        <Image
          src={pokemon.sprites.front_shiny}
          alt={`${pokemon.name} shiny`}
          width={150}
          height={150}
        />

        <Image
            src={pokemon.sprites.back_shiny}
            alt={`${pokemon.name} shiny back`}
            width={150}
            height={150}
            />
      </div>

      <div>
        <h2>Types</h2>

        {pokemon.types.map((type: any) => (
          <p key={type.type.name}>
            {type.type.name}
          </p>
        ))}
      </div>

      <div>
        <h2>Base Stats</h2>

        {pokemon.stats.map((stat: any) => (
          <p key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}ad
          </p>
        ))}
      </div>
            
        </div>
    )
}