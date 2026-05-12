import Image from 'next/image';
import Link from 'next/link';

export default async function PokemonDetailsPage({ params }: { params: { name: string } }) {
    const { name } = await params

    {/* fetching individual stats for pokemons */}
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json()

    return (
        <div>
            <h1>{pokemon.name}</h1>
            
        </div>
    )
}