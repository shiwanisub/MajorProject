import type React from "react"
import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import TrustIndicators from "../components/TrustIndicators"
import RecentEvents from "../components/RecentEvents"
import FAQ from "../components/FAQ"
import "./Home.css"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <TrustIndicators />
      <Stats />
      <FeaturedServices />
      <RecentEvents />
      <Testimonials />
      <FAQ />
      
    </div>
  )
}

export default Home
