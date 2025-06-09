import type React from "react"
import "./HowItWorks.css"

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Browse & Search",
      description:
        "Explore our extensive catalog of verified vendors and services. Use our smart filters to find exactly what you need for your event.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Compare & Select",
      description:
        "Compare prices, reviews, and portfolios. Read authentic customer feedback and choose the perfect vendors for your event.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"></path>
          <path d="M9 7l3-3 3 3"></path>
          <line x1="12" y1="4" x2="12" y2="14"></line>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Book & Pay",
      description:
        "Secure your booking with our integrated payment system. Pay safely through Khalti, eSewa, or bank transfer with full protection.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
    },
    {
      step: "04",
      title: "Enjoy Your Event",
      description:
        "Relax and enjoy your perfectly planned event. Our vendors deliver exceptional service while you create unforgettable memories.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
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
            <div key={index} className="step-item">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>Ready to get started?</h3>
          <p>Join thousands of satisfied customers who have planned their perfect events with us</p>
          <button className="btn btn-primary btn-lg">Start Planning Now</button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
