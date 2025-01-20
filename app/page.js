'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeOffer from './components/WeOffer'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { ThreeBoxes } from './components/ThreeBoxes'
import { Gradient } from './components/Gradient'
import { Testimonials } from './components/Testimonials'
import { Card } from './components/Card'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

import Character from './components/Character';

const paragraph = "Whether you are a brand striving for clarity or an individual seeking purpose, we believe that the right kind of simplicity can drive transformation."


export default function Home() {
  const words = paragraph.split(" ")
  return (
      <>
      <Navbar />
      <main> {/* Adjust based on your navbar height */}
        <Hero />
        <WeOffer />
        <Banner />
        <About />
        <ThreeBoxes
        heading = "Why we choose Simple things?"
        h1 = "The Simple Thing offers two distinct yet interconnected services"
        box1H ="Proven Expertise"
        box2H ="Tailored Approach"
        box3H ="The Power of Simple"
        h2  ="Years of experience delivering results for brands and individuals"
        h3 ="Solutions and strategies customised to your unique needs"
        h4 ="A philosophy that transforms complexities into actionable clarity"
      />
      <Character paragraph={paragraph}  />
      <ThreeBoxes
         heading = "How we work"
        h1 = "Whether it’s a one-off consultation or a long-term engagement,our approach is designed to empower."
        box1H ="Discover "
        box2H ="Define"
        box3H ="Deliver"
        h2  ="We dive deep to understand your brand, goals, and challenges"
        h3 ="Solutions and strategies customised to your unique needs"
        h4 ="We craft strategies, solutions, and plans that are clear, actionable, and effective"
      />
        
        <Testimonials />
        <Card/>
        <GetInTouch/>
        <Footer/>
        
        
      </main>
    </>
  
  )
}