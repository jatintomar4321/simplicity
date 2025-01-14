
export default function Hero() {
  return (
    <div>
    <section className="mx-auto w-full px-16 py-4">
      <div className="flex flex-1 items-center gap-40 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-6xl font-medium leading-tight text-[#2D2D2D]">
            <span className=" font-semibold"> Simplicity </span>is powerful
          </h1>
          <p className="text-md text-gray-600">
            Welcome to The Simple Thing, a company founded with a singular belief: simplicity is powerful. In a world that celebrates the complex, we help you find 'your' simple.
          </p>
          {/* CTA Button with gradient border */}
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-6 py-2 bg-white rounded-md text-[#1E1E1E] leading-none flex items-center">
              Book your Session
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className=" h-[500px] w-[900px]">
          <img
            src="./woman.png"
            alt="Professional in light blue attire"
            fill
            className="object-contain"
            priority
          />
         
        </div>
      </div>
   
    </section>
    <img
            src="./banner.png"
            alt="Professional in light blue attire"
            fill
            className="object-contain w-full h-full"
            priority
          />
         
    </div>
  )
}

