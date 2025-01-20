'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ThreeBoxes({heading, h1, box1H, box2H, box3H, h2, h3, h4}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  const MotionDiv = ({ children, className, variants, ...props }) => (
    <motion.div
      className={`${className} hidden lg:block`}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )

  const StaticDiv = ({ children, className }) => (
    <div className={`${className} lg:hidden`}>{children}</div>
  )

  return (
    <section ref={ref} className="lg:mx-56 max-w-7xl px-8 sm:px-10 lg:px-8 py-12 sm:py-16">
      <MotionDiv 
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#2D2D2D]">
          {heading}
        </h2>
        <p className="text-gray-600 text-xs">
          {h1}
        </p>
      </MotionDiv>
      <StaticDiv className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-semibold text-[#2D2D2D]">
          {heading}
        </h2>
        <p className="text-gray-600 text-xs">
          {h1}
        </p>
      </StaticDiv>

      <div className="grid grid-cols-1 text-xs md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3">
        <MotionDiv 
          className="relative group"
          variants={leftCardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-2xl opacity-70"></div>
          <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
              {box1H}
            </h3>
            <p className="text-[#898989] text-center">
              {h2}
            </p>
          </div>
        </MotionDiv>
        <StaticDiv className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-2xl opacity-70"></div>
          <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
              {box1H}
            </h3>
            <p className="text-[#898989] text-center">
              {h2}
            </p>
          </div>
        </StaticDiv>

        <MotionDiv 
          className="relative group"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-2xl opacity-70"></div>
          <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
              {box2H}
            </h3>
            <p className="text-[#898989] text-center">
              {h3}
            </p>
          </div>
        </MotionDiv>
        <StaticDiv className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-2xl opacity-70"></div>
          <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
              {box2H}
            </h3>
            <p className="text-[#898989] text-center">
              {h3}
            </p>
          </div>
        </StaticDiv>

        <MotionDiv 
          className="relative group"
          variants={rightCardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-2xl opacity-70"></div>
          <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
              {box3H}
            </h3>
            <p className="text-[#898989] text-center">
              {h4}
            </p>
          </div>
        </MotionDiv>
        <StaticDiv className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-2xl opacity-70"></div>
          <div className="relative flex flex-col items-center p-3 bg-white rounded-2xl h-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">
              {box3H}
            </h3>
            <p className="text-[#898989] text-center">
              {h4}
            </p>
          </div>
        </StaticDiv>
      </div>
    </section>
  )
}

