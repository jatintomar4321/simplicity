'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

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
              className="flex items-center justify-center min-w-full h-full lg:px-40"
            >
              <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-left gap-3 md:gap-4 md:py-4">
                {/* Image - Larger on mobile, smaller on desktop */}
                <div className="w-28 h-32 md:w-36 md:h-40 mx-6 pb-4 rounded-3xl">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Portrait of ${testimonial.author}`}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Content - Centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col space-y-3 text-left px-2 pt-3 md:text-left max-w-2xl">
                  <p className="text-3xl md:text-xl lg:text-2xl font-medium text-[#241201] leading-tight px-3 tracking-tighter">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs md:text-sm px-3 text-[#241201]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Hidden on smaller screens */}
      <button
        onClick={scrollPrev}
        className="absolute hidden md:flex left-8 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-gray-800 hover:text-gray-600 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute hidden md:flex right-8 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-gray-800 hover:text-gray-600 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-1 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  )
}

