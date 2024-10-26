"use client"

const Cards = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-" id="Info">
      <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          More Information
        </h1>
        <p className="text-gray-700 text-lg text-center mb-12">
            You can find out more about the prohect on the following cards
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/img/Hero3.jpg" alt="hero" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Written history of the game (Only the main concept)</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">In Journey Through Time, players take on the role of a time guardian traveling through various historical eras to restore the flow of time. From ancient civilizations to dystopian futures, they’ll solve puzzles and face unique enemies from each era. Every decision can alter the timeline’s destiny, testing their skills to preserve history.</p>
              <a href="/blog/History" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            
            </a>
           </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/img/Features.jpeg" alt="features" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Journey Through Time combines diverse gameplay mechanics and interactive elements to immerse players in a thrilling, time-traveling adventure. The game’s features are designed to enrich the experience, offering depth and variety through puzzle-solving, combat, exploration, and a dynamic storyline that adapts to player choices.</p>
              <a href="/blog/Features" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
           </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/img/Update.jpg" alt="update" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Updates and progress</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Journey Through Time has been a journey in itself—from initial concept to current progress, every milestone has brought the game closer to its final form. This timeline provides insight into the development stages, highlighting how each phase shaped the game’s mechanics, design, and features.</p>
              <a href="/blog/Updates" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            
            </a>
           </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cards
