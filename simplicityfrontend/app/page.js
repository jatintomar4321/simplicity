import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeOffer from './components/WeOffer'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { ThreeBoxes } from './components/ThreeBoxes'
import { Gradient } from './components/Gradient'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WeOffer />
      <Banner/>
      <About/>
      <ThreeBoxes/>
      <Gradient/>
    </main>
  )
}