import type React from "react"
import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import CallToAction from "../components/CallToAction"
import HowItWorks from "../components/HowItWorks"
import WhyChooseUs from "../components/WhyChooseUs"
import TrustIndicators from "../components/TrustIndicators"
import RecentEvents from "../components/RecentEvents"
import FAQ from "../components/FAQ"
import Newsletter from "../components/Newsletter"
import "./Home.css"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <TrustIndicators />
      <Stats />
      <HowItWorks />
      <FeaturedServices />
      <WhyChooseUs />
      <RecentEvents />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CallToAction />
    </div>
  )
}

export default Home
