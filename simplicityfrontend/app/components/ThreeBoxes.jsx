export function ThreeBoxes({heading,h1,box1H,box2H,box3H,h2,h3,h4}) {
    return (
      <section className="lg:mx-56 max-w-7xl px-8 sm:px-10 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-[#2D2D2D]">
            {heading}
          </h2>
          <p className="text-gray-600 text-xs">
            {h1}
          </p>
        </div>
  
        {/* Cards Grid */}
        <div className="grid grid-cols-1 text-xs md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3">
          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350]  to-[#00E6F2] rounded-2xl opacity-70"></div>
            <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
              <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
                {box1H}
              </h3>
              <p className="text-gray-600 text-center">
                {h2}
              </p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350]  to-[#00E6F2] rounded-2xl opacity-70"></div>
            <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
              <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
                {box2H}
              </h3>
              <p className="text-gray-600 text-center">
                {h3}
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350]  to-[#00E6F2] rounded-2xl opacity-70"></div>
            <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
              <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
                {box3H}
              </h3>
              <p className="text-gray-600 text-center">
                {h4}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  