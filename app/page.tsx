//home page
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold text-black-600 mb-4">Welcome to PokeBrowser</h1>

      <p className="text-gray-600 max-w-md mb-6">Explore and view details of your favourite Pokemon</p>

      <a href="/pokemons"
      className="bg-red-600 text-white px-6 py-2 rounded-full border-2 border-black hover:bg-red-700 transition:">Browse Pokemon</a>
    </div>
  )
}
