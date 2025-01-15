
export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
      <div className="grid grid-cols-1 items-center gap-8 md:gap-12 md:grid-cols-2">
        {/* Image Column - Comes first on mobile */}
        <div className="order-1 md:order-2 w-full">
          <div className=" w-full rounded-2xl overflow-hidden bg-black">
            <img
              src="founder.png"
              alt="Portrait of Samyukta Ganesh Iyer"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Content Column - Comes second on mobile */}
        <div className="order-2 md:order-1 lg:pt-20 space-y-6">
          <div className="space-y-3">
            <p className="text-gray-600">About the Founder</p>
            <h2 className="text-4xl sm:text-4xl font-medium  text-[#2D2D2D]">
              <span className="font-semibold">Samyukta</span> Ganesh Iyer
            </h2>
          </div>
          <p className="text-[#898989] text-sm sm:text-[0.9rem] leading-snug max-w-[30rem]">
            Samyukta, former CMO Sephora, Baskin Robbins & Kaya is a marketing consultant, executive coach, and a seeker of simplicity. Over the past two decades, she's been at the helm of transformative award winning campaigns and initiatives, crafting some of the world's leading brands – Vaseline, Lakme, Asian Paints, Abbott, Frooti. Her career spans industries and continents, from spearheading global marketing strategies to mentoring future leaders.
          </p>
          {/* CTA Button with gradient border */}
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-md "></div>
            <button className="relative px-6 py-2 bg-white text-black rounded-md text-xs leading-none flex items-center">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

