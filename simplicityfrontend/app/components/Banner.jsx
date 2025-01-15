export function Banner() {
    return (
      <section className="w-full bg-[#FFF350] px-4 py-8 sm:px-6 sm:py-6 lg:px-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-20">
            {/* Quote Section */}
            <div className="space-y-4 md:max-w-[20rem] max-w-[25rem]  lg:max-w-[20rem] ">
              <h2 className="text-3xl font-medium text-[#2D2D2D]   sm:text-3xl lg:text-3xl">
                "A leading happiness expert"
              </h2>
              <p className="text-base text-gray-600 sm:text-lg lg:text-xl">
                Lorem ipsum 
              </p>
            </div>
  
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-12 pt-40 sm:pt-40 lg:pt-10  lg:gap-16 md:flex md:flex-wrap">
              <div className="flex flex-col lg:space-y-4 items-start md:items-start">
                <p className="text-2xl font-medium text-[#2D2D2D] sm:text-3xl lg:text-2xl">
                  99999+
                </p>
                <p className="text-sm text-gray-600 sm:text-base lg:text-sm">
                  Satisfied Users
                </p>
              </div>
              <div className="flex flex-col lg:space-y-4  items-start md:items-start">
                <p className="text-2xl font-medium text-[#2D2D2D] sm:text-2xl lg:text-2xl">
                  99999+
                </p>
                <p className="text-sm text-gray-600 sm:text-base lg:text-sm">
                  Projects Delivered
                </p>
              </div>
              <div className="flex flex-col items-start lg:space-y-4  md:items-start">
                <p className="text-2xl font-medium text-[#2D2D2D] sm:text-2xl lg:text-2xl">
                  99999+
                </p>
                <p className="text-sm text-gray-600 sm:text-base lg:text-sm">
                  Hours of Research
                </p>
              </div>
              <div className="flex flex-col items-start lg:space-y-4  md:items-start">
                <p className="text-2xl font-medium text-[#2D2D2D] sm:text-2xl lg:text-2xl">
                  99999+
                </p>
                <p className="text-sm text-gray-600 sm:text-base lg:text-sm">
                  Global Reach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  