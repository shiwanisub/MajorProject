import type React from "react"
import { Link } from "react-router-dom"
import "./HowItWorks.css"

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Browse & Search",
      description:
        "Explore our curated selection of verified vendors and services. Use filters to find exactly what you need for your event.",
      icon: "🔍",
      features: [
        "Advanced search filters",
        "Verified vendor profiles",
        "Real customer reviews",
        "Instant availability check",
      ],
    },
    {
      number: "02",
      title: "Compare & Select",
      description:
        "Compare prices, packages, and reviews. Chat directly with vendors to discuss your requirements and get custom quotes.",
      icon: "⚖️",
      features: [
        "Side-by-side comparison",
        "Direct vendor messaging",
        "Custom quote requests",
        "Package customization",
      ],
    },
    {
      number: "03",
      title: "Book & Pay Securely",
      description:
        "Book your chosen services with our secure payment system. Pay online or choose flexible payment options.",
      icon: "💳",
      features: ["Secure payment gateway", "Multiple payment options", "Booking confirmation", "Digital contracts"],
    },
    {
      number: "04",
      title: "Enjoy Your Event",
      description:
        "Relax and enjoy your perfectly planned event. Our support team is available 24/7 for any assistance you need.",
      icon: "🎉",
      features: ["24/7 customer support", "Event day coordination", "Quality assurance", "Post-event feedback"],
    },
  ]

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How Swornim Works</h2>
          <p>Planning your perfect event is easier than ever with our streamlined process</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className="step-features">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>Ready to Start Planning?</h3>
          <p>Join thousands of satisfied customers who trust Swornim for their events</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary btn-lg">
              Browse Services
            </Link>
            <Link to="/register" className="btn btn-outline btn-lg">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
