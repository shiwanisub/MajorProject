"use client"

import type React from "react"
import { useState } from "react"
import "./Newsletter.css"

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
    }, 1500)
  }

  const benefits = [
    {
      icon: "🎉",
      title: "Exclusive Deals",
      description: "Get up to 30% off on premium services",
    },
    {
      icon: "📅",
      title: "Event Tips",
      description: "Weekly planning tips from experts",
    },
    {
      icon: "🆕",
      title: "New Vendors",
      description: "Be first to discover new vendors",
    },
    {
      icon: "🎁",
      title: "Special Offers",
      description: "Member-only promotions and gifts",
    },
  ]

  if (isSubscribed) {
    return (
      <section className="newsletter success">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h2>Welcome to the Swornim Family! 🎉</h2>
            <p>Thank you for subscribing! You'll receive our first newsletter with exclusive deals within 24 hours.</p>
            <button className="btn btn-outline" onClick={() => setIsSubscribed(false)}>
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Updated with Swornim</h2>
            <p>
              Join over 10,000+ event planners who get exclusive deals, expert tips, and early access to new vendors.
            </p>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="email-input"
                />
                <button type="submit" className="subscribe-btn" disabled={isLoading}>
                  {isLoading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      Subscribe
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12,5 19,12 12,19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </div>
              <p className="privacy-text">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>

          <div className="newsletter-benefits">
            <h3>What you'll get:</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="social-proof">
          <div className="proof-item">
            <span className="proof-number">10,000+</span>
            <span className="proof-label">Subscribers</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">4.9/5</span>
            <span className="proof-label">Newsletter Rating</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">Weekly</span>
            <span className="proof-label">Updates</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
