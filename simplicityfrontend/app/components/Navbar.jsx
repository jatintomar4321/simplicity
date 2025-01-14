export default function Navbar() {
    return (
      <header className="w-full text-[#241201]">
        {/* Top banner */}
        <div className="w-full bg-gradient-to-r from-[#FFF350]  to-[#00E6F2] ">
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
  
        {/* Navigation bar */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-16 py-4">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-md font-[550]">The Simple Thing</h1>
          </div>
  
          {/* Navigation Links */}
          <div className="hidden text-xs md:flex items-center gap-8">
            <a
              href="#"
              className="relative  text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-100 after:bg-gray-900 after:transition-transform hover:after:scale-x-0"
            >
              Coaching
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Resources
            </a>
          </div>
  
          {/* CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-0.5  bg-gradient-to-r from-[#FFF350]  to-[#00E6F2] rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative text-xs px-3 leading-tighter py-2 text-[#1E1E1E] bg-white rounded-lg flex items-center">
              Book your Session
            </button>
          </div>
        </nav>
      </header>
    )
  }
  
  