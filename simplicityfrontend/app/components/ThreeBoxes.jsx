export function ThreeBoxes() {
    return (
      <section className="lg:mx-56 max-w-7xl px-8 sm:px-10 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-[#2D2D2D]">
            Why we choose Simple things?
          </h2>
          <p className="text-gray-600 text-xs">
            The Simple Thing offers two distinct yet interconnected services
          </p>
        </div>
  
        {/* Cards Grid */}
        <div className="grid grid-cols-1 text-xs md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3">
          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-2xl opacity-70"></div>
            <div className="relative flex flex-col items-center p-4 bg-white rounded-2xl h-full">
              <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
                Proven Expertise
              </h3>
              <p className="text-gray-600 text-center">
                Years of experience delivering results for brands and individuals
              </p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-2xl opacity-70"></div>
            <div className="relative flex flex-col items-center p-4 bg-white rounded-2xl h-full">
              <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
                Tailored Approach
              </h3>
              <p className="text-gray-600 text-center">
                Solutions and strategies customised to your unique needs
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-200 to-cyan-200 rounded-2xl opacity-70"></div>
            <div className="relative flex flex-col items-center p-4 bg-white rounded-2xl h-full">
              <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
                The Power of Simple
              </h3>
              <p className="text-gray-600 text-center">
                A philosophy that transforms complexities into actionable clarity
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  