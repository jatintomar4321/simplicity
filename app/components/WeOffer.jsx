'use client'

import { useState } from 'react'

export default function WeOffer() {
  const [activeService, setActiveService] = useState('marketing')

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 lg:px-16">
      {/* Header */}
      <div className="text-center space-y-3 pb-14">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#241201]">What we offer</h2>
        <p className="text-[#898989] text-xs sm:text-sm pb-3">
          The Simple Thing offers two distinct yet interconnected services
        </p>
        
        {/* Custom Toggle Switch */}
        <div className="inline-flex items-center rounded-full border px-1 py-1 bg-white shadow-sm">
  <button
    onClick={() => setActiveService('marketing')}
    className={`px-2 py-1 rounded-full text-[0.65rem] transition-all sm:px-3 sm:py-2 sm:text-xs ${
      activeService === 'marketing'
        ? 'bg-gradient-to-r from-[#FFF350] to-[#00E6F2] text-gray-800'
        : 'hover:bg-gray-100 text-gray-600'
    }`}
  >
    Marketing Consultancy
  </button>
  <button
    onClick={() => setActiveService('executive')}
    className={`px-2 py-1 rounded-full text-[0.65rem] transition-all sm:px-3 sm:py-2 sm:text-xs ${
      activeService === 'executive'
        ? 'bg-gradient-to-r from-[#FFF350] to-[#00E6F2] text-gray-800'
        : 'hover:bg-gray-100 text-gray-600'
    }`}
  >
    Executive Coaching
  </button>
</div>

      </div>

      {/* Content Section */}
      <div className="bg-gray-50 rounded-2xl px-5 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-6 md:py-10 lg:py-12 lg:mx-32 max-w-screen-xl text-xs sm:text-xs">
        <div className="space-y-3 mb-12">
          <p className="text-gray-600 font-semibold">Lorem ipsum</p>
          <h3 className="text-2xl sm:text-2xl font-semibold  text-[#2D2D2D]">
            {activeService === 'marketing' ? 'Marketing Consultancy' : 'Executive Coaching'}
          </h3>
          <p className="text-gray-600 max-w-xl ">
            {activeService === 'marketing' 
              ? "At the heart of every great brand is one defining idea: it's Simple."
              : "Transform your leadership through simplicity and clarity."}
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeService === 'marketing' ? (
            <>
              <div className="space-y-4">
                <h4 className="text-xl sm:text-lg font-medium text-[#2D2D2D]">Define the simple</h4>
                <p className="text-gray-600">Distill the essence of your brand into one powerful truth</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl sm:text-lg font-medium text-[#2D2D2D]">Craft Clarity</h4>
                <p className="text-gray-600">Create messaging and strategies that cut through the noise</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl sm:text-lg font-medium text-[#2D2D2D]">Simplify Execution</h4>
                <p className="text-gray-600">Develop actionable plans that bring your brand's simple to life across channels.</p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <h4 className="text-xl sm:text-lg font-medium text-[#2D2D2D]">Leadership Vision</h4>
                <p className="text-gray-600">Define your authentic leadership style and vision</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl sm:text-lg font-medium text-[#2D2D2D]">Strategic Clarity</h4>
                <p className="text-gray-600">Develop clear decision-making frameworks</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl sm:text-lg font-medium text-[#2D2D2D]">Effective Communication</h4>
                <p className="text-gray-600">Master the art of simple, impactful communication</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
