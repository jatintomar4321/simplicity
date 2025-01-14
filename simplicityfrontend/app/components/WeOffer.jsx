'use client'

import { useState } from 'react'

export default function WeOffer() {
  const [activeService, setActiveService] = useState('marketing')

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-medium text-[#2D2D2D]">What we offer</h2>
        <p className="text-gray-600">
          The Simple Thing offers two distinct yet interconnected services
        </p>
        
        {/* Custom Toggle Switch */}
        <div className="inline-flex items-center rounded-full border p-1 bg-white shadow-sm">
          <button
            onClick={() => setActiveService('marketing')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeService === 'marketing' 
                ? 'bg-gradient-to-r from-yellow-200 to-cyan-200 text-gray-800' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            Marketing Consultancy
          </button>
          <button
            onClick={() => setActiveService('executive')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeService === 'executive' 
                ? 'bg-gradient-to-r from-yellow-200 to-cyan-200 text-gray-800' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            Executive Coaching
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 rounded-2xl p-12">
        <div className="space-y-6 mb-12">
          <p className="text-gray-600">Lorem ipsum</p>
          <h3 className="text-3xl font-medium text-[#2D2D2D]">
            {activeService === 'marketing' ? 'Marketing Consultancy' : 'Executive Coaching'}
          </h3>
          <p className="text-gray-600 max-w-2xl">
            {activeService === 'marketing' 
              ? "At the heart of every great brand is one defining idea: it's Simple."
              : "Transform your leadership through simplicity and clarity."}
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeService === 'marketing' ? (
            <>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#2D2D2D]">Define the simple</h4>
                <p className="text-gray-600">Distill the essence of your brand into one powerful truth</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#2D2D2D]">Craft Clarity</h4>
                <p className="text-gray-600">Create messaging and strategies that cut through the noise</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#2D2D2D]">Simplify Execution</h4>
                <p className="text-gray-600">Develop actionable plans that bring your brand's simple to life across channels.</p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#2D2D2D]">Leadership Vision</h4>
                <p className="text-gray-600">Define your authentic leadership style and vision</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#2D2D2D]">Strategic Clarity</h4>
                <p className="text-gray-600">Develop clear decision-making frameworks</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#2D2D2D]">Effective Communication</h4>
                <p className="text-gray-600">Master the art of simple, impactful communication</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

