export default function Loading() {
    return(
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">

        <div className="text-6xl mb-4 animate-bounce">
            ⚡
        </div>

        <h1 className="text-2xl font-bold text-red-600 mb-2">
            Loading....
        </h1>

        <p className="text-gray-500">
            searching for pokemon data
        </p>
    </div>
    );
    
}