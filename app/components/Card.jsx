import Image from 'next/image'

export function Card() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-gray-600">Lorem ipsum</p>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#2D2D2D]">
                Lorem ipsum
              </h2>
            </div>
            <p className="text-[#898989] leading-relaxed">
              At the heart of every great brand is one defining idea: it's Simple.
            </p>
            {/* CTA Button with gradient border */}
            <div className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative px-6 py-2 bg-white rounded-lg leading-none flex items-center text-sm">
                See Talk Sessions
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-black">
              <img
                src="founder.png"
                alt="Professional portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

