'use client'


import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const testimonials = [
    {
      quote: "Whether you are a brand striving for clarity or an individual seeking purpose, we believe that the right kind of simplicity can drive transformation.",
      author: "Abbas Kiarostami",
      image: "small.png"
    },
    {
      quote: "Simplicity is the ultimate sophistication in both design and strategy.",
      author: "Jane Smith",
      image: "small.png"
    },
    {
      quote: "The power of simplicity transformed our entire approach to business.",
      author: "John Doe",
      image: "small.png"
    }
  ]

  return (
    <section className="w-full px-2 bg-[#00E6F2] min-h-screen md:min-h-[285px] relative overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex items-center justify-center min-w-full h-full lg:px-40 "
            >
              <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 md:py-16">
                {/* Image - Larger on mobile, smaller on desktop */}
                <div className="w-20 h-24 md:w-36 md:h-40 top-12 lg:top-0 left-6 lg:left-0 absolute md:relative rounded-3xl  ">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Portrait of ${testimonial.author}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Content - Centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col space-y-6 text-left px-6 md:text-left max-w-2xl">
                  <p className="text-3xl md:text-xl lg:text-2xl font-medium text-[#241201] leading-snug tracking-tighter">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs md:text-sm text-[#241201]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Larger touch targets on mobile */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center text-gray-800 hover:text-gray-600 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center text-gray-800 hover:text-gray-600 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  )
}

