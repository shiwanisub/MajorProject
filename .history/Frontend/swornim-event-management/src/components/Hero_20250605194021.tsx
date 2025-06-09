import type React from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import "./Hero.css"

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/images/hero-bg.jpg" alt="Beautiful event setup" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Create <span className="text-secondary">Unforgettable</span> Events in Nepal
            </h1>
            <p className="hero-subtitle fade-in">
              From intimate birthday celebrations to grand weddings, find the perfect vendors and venues for your
              special moments. Connect with top photographers, decorators, makeup artists, and more.
            </p>

            <div className="hero-actions fade-in">
              <Link to="/services" className="btn btn-primary btn-lg">
                Explore Services
              </Link>
              <Link to="/events" className="btn btn-outline btn-lg">
                Browse Events
              </Link>
            </div>
          </div>

          <div className="hero-search">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="hero-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/icons/wedding.svg" alt="Wedding" />
              </div>
              <h3>Weddings</h3>
              <p>Complete wedding planning services</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/icons/birthday.svg" alt="Birthday" />
              </div>
              <h3>Birthdays</h3>
              <p>Memorable birthday celebrations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/icons/corporate.svg" alt="Corporate" />
              </div>
              <h3>Corporate Events</h3>
              <p>Professional event management</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/icons/live-events.svg" alt="Live Events" />
              </div>
              <h3>Live Events</h3>
              <p>Concerts and live performances</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
