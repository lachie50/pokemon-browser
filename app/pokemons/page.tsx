// tells next.js this component runs in the browser, required for interactivity and apis
"use client";
//import reacts useState, lets us store and updata data
import { useState } from "react";
//lets navigate to different pages
import { useRouter } from "next/navigation"

//main page component
export default function PokemonPage(){
    //create search variable, set search to current value, set search updates value
    const [search, setSearch] = useState("");
    //create router instance, used for changing pages
    const router = useRouter();

    //run function if search button clicked
    const handleSearch = () => {
        //if search is empty, stop
        if (!search) return;

        //navigate to searched page
        router.push(`/pokemons/${search.toLowerCase()}`);
    }


    return(
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <h1 className="text-3xl font-bold text-black-600 mb-6">Pokemon Search</h1>

        <div className="flex gap-3">
            <input 
            type="text"
            placeholder="Search Pokemon"
            value={search}
            //e.target.value = what user input, setSearch updates search state
            onChange={(e) => setSearch(e.target.value)} 
            className="border-2 border-black px-4 py-2 rounded-full"
            />

            <button 
                onClick={handleSearch}
                className="bg-red-600 text-white px-5 py-2 rounded-full border-2 border-black hover:bg-red-700 transition">
                Search
            </button>
        </div>


        </div>
 
    )
}