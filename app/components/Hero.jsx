"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { 
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div>
      <section className="mx-auto w-full px-5 py-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28">
          {/* Left Column */}
          <div className="space-y-8 text-left lg:text-left lg:max-w-[50rem]">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#2D2D2D]">
              <span className="font-semibold">Simplicity</span> is Powerful
            </h1>
            <p className="text-base sm:text-lg md:text-md tracking-tight lg:text-md text-gray-600">
              Welcome to The Simple Thing, a company founded with a singular belief: simplicity is powerful. In a world that celebrates the complex, we help you find 'your' simple.
            </p>
            {/* CTA Button with gradient border */}
            <div className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350]  to-[#00E6F2] rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative font-medium leading-tight tracking-tighter text-xs sm:text-sm px-6 py-2 bg-white rounded-md text-[#1E1E1E] flex items-center">
                Book your Session
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] w-full md:w-[600px] xl:w-[700px]">
            <img
              src="./woman.png"
              alt="Professional in light blue attire"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="relative w-full h-[100px] overflow-hidden">
        <motion.div
          className=" w-[400%] lg:w-[100%] sm:w-[400%] h-24"
          animate={isMobile ? {
            x: [0, '-70%'],
          } : {}}
          transition={isMobile ? {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            },
          } : {}}
        >
          <img
            src="./banner.png"
            alt="Banner Image"
            className="object-cover  w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

