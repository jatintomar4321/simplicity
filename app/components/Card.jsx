
export function Card() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-6 lg:px-10 py-12 sm:py-10">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-24">
          <div>
          <div className="space-y-2">
            <div className="space-y-2">
              <p className="text-gray-600">Lorem ipsum</p>
              <h2 className="text-3xl sm:text-3xl font-medium text-[#2D2D2D]">
                Lorem ipsum
              </h2>
            </div>
            <p className="text-[#898989] text-xs leading-relaxed">
              At the heart of every great brand is one defining idea: it's Simple.
            </p>
            </div>
</div>
            {/* CTA Button with gradient border */}
            <div>
          <div className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-lg "></div>
              <button className="relative px-6 py-2 bg-white text-black rounded-lg leading-none flex items-center text-xs">
                See Talk Sessions
              </button>
            </div>
          </div>
          </div>
         

          {/* Right Column - Image */}
          <div className="w-full">
            <div className="relative  w-full rounded-3xl overflow-hidden bg-black">
              <img
                src="11.png"
                alt="Professional portrait"
                
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
               
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

