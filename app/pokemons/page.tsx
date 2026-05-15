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
        <div>
            <h1>Pokemon List</h1>

            <input 
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />

            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}