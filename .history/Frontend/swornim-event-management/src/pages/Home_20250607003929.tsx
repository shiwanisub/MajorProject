import type React from "react"
import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import Testimonials from "../components/Testimonials"
import TrustIndicators from "../components/TrustIndicators"
import RecentEvents from "../components/RecentEvents"
import FAQ from "../components/FAQ"
import "./Home.css"
import HowItWorks from "../components/HowItWorks"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <TrustIndicators />
      
      <FeaturedServices />
      <HowItWorks/>
      <RecentEvents />
      <Testimonials />
      <FAQ />
      
    </div>
  )
}

export default Home
