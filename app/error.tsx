//errors for broken code, server error or failed api

//tells next.js this runs in the browser, important for button clicks only works in client components
"use client";

//auto use this component if error happens
export default function Error({
    //contains info on what went wrong
    error,
    //tries to reload page
    reset,
}: {
    //error must be an object
    error: Error
    //reset must be function, and returns nothing
    reset: () => void;
}) {
    return (
        <div>
            <h1>Something went wrong!</h1>

            {/* try load page again */}
            <button onClick={() => reset()}>
                Try Again
            </button>
        </div>
    )
}