"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"

export default function PokemonPage(){
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (!search) return;

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