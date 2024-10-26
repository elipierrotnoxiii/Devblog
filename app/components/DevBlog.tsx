
const DevBlog = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto py-8" id="about">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src="/img/Avatar-foto.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">Geo</h1>
                        <p className="text-gray-700">Software Developer</p>
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                        <ul>
                            <li className="mb-2">JavaScript</li>
                            <li className="mb-2">React</li>
                            <li className="mb-2">Node.js</li>
                            <li className="mb-2">HTML/CSS</li>
                            <li className="mb-2">Tailwind Css</li>
                            <li className="mb-2">Unity</li>
                            <li className="mb-2">C#</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Hi</h2>
                    <p className="text-gray-700">  Welcome to the first Devlog for <strong>Journey Through Time</strong>, a 2D adventure game that takes you through different historical eras. In these posts, I’ll be sharing the development progress, the technical challenges I face, and the design decisions I’m making along the way.
                    </p>

                    <hr className="my-6 border-t border-gray-300"/>

                    <h2 className="text-xl font-bold mt-6 mb-4">Project Overview</h2>
                    <div className="mb-6">
                       <p className="mt-2">
                        <strong>Journey Through Time</strong> is a 2D adventure game where players must travel through different historical eras, solve puzzles, face enemies, and overcome environmental challenges to restore balance to the timeline.
                      </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold">Developer Goals</span>
                        </div>
                        <p className="mt-2">
                          As the developer of <strong>Journey Through Time</strong>, my goal is to create an engaging and educational experience that combines historical exploration with puzzle-solving mechanics. I aim to make the game accessible and fun for a wide audience.
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold">Inspiration Behind the Gamer</span>
                            
                        </div>
                        <p className="mt-2">
                        The inspiration for <strong>Journey Through Time</strong> comes from my love for both history and classic adventure games like <em>The Legend of Zelda</em> and <em>Chrono Trigger</em>. The time-travel element allows for endless possibilities in creating unique puzzles and challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default DevBlog
