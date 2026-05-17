// Import the next.js image component
import Image from 'next/image';
// import notFound so i can use 404 errors if pokmon isnt found
import { notFound } from "next/navigation"

// async = able to use await in function
// recieving params from the url
export default async function PokemonDetailsPage({ params }: { params: { name: string } }) {
    
    //extracting pokemon name from url params
    const { name } = await params

    // fetch pokemon data from api, fetch() sends a request from api
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    //checks if request succeeded, if not show the 404 errorr
    if (!response.ok) {
      notFound();
    }

    //convert response into json
    const pokemon = await response.json()

    return (
        //container to center everything horizontally
        <div className="min-h-[80vh] px-4 py-10 flex flex-col items-center">
          
          <h1 className="text-4xl font-bold text-black-600 capitalize mb-8">{pokemon.name}</h1>

        
        <div className="flex gap-6 mb-10">
          <div className="text-center">
            
            <Image
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} front`}
            width={150}
            height={150}
            />
            <p className="text-sm text-gray-500">Front</p>
          </div>

          <div className="text-center">
            <Image
            src={pokemon.sprites.back_default}
            alt={`${pokemon.name} back`}
            width={150}
            height={150}
            />
            <p className="text-sm text-gray-500">Back</p>
          </div>


          <div className="text-center">
            <Image
            src={pokemon.sprites.front_shiny}
            alt={`${pokemon.name} shiny`}
            width={150}
            height={150}
            />
            <p className="text-sm text-gray-500">Shiny</p>
          </div>
        
          <div className="">
            <Image
            src={pokemon.sprites.back_shiny}
            alt={`${pokemon.name} shiny back`}
            width={150}
            height={150}
            />
            <p className="text-sm text-gray-500">Shiny Back</p>
          </div>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Types</h2>

        {/* .map() loops through each item in array*/}
        {pokemon.types.map((type: any) => (
          
          <p 
            //react needs unique key for lists
            key={type.type.name}
            className="capitalize"
          >
            {type.type.name}
          </p>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Base Stats</h2>

        {pokemon.stats.map((stat: any) => (
          <p
            key={stat.stat.name}
            className="capitalize"
          >
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </div>   
    </div>
   )
}