import type React from "react"
import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import CallToAction from "../components/CallToAction"
import "./Home.css"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <FeaturedServices />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home
