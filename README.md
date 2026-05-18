## My Project: Pokemon-Browser

### What i Built
I built a small Pokemon web app using Next.js and Tailwind CSS, users can search for Pokemon and view pages including data such as sprites, types and base stats using data i fetched from an API. The app includes error handling such as when you search for a pokemon that doesnt exist.

### What i Expected
I expected Next.js and SvelteKit to be very similar in terms of routing and page structure. I assumed pages would just be files in folders, and navigation would be straight forward 


### What Actually Happened 
Next.js felt more complex then SvelteKit mainly because of the learning of server components and client components. In SvelteKit reactivity is built into the language but in Next.js I had to think more about when to use "use client". Routing was similar in the way it was filed based, but Next.js was more complex compared to SvelteKits.

### The Hardest Part
I felt the hardest part for me was knowing when to use "use client" and when I didn't need to. It wasn't obvious at first knowing why some features like hooks or click events required client components while static pages didn't. On my home page I have a button that strictly takes you to the pokemons/page.tsx page. I initially thought I would need "use client" in there due to the button click but ended up finding out i dont.

### What Id Do Differently
Firstly I would've liked to of made the overall look and interactivity on it better but i didn't want to do too much on my first time using Next.js. On my homepage i would use next/link from the beginning on the <a> to avoid unnecessary page reloads

### One Sentence Verdict
I enjoyed using Next.js and i think its a very good full stack framework, although it seemed more complex then SvelteKit which was easier for me to learn.
