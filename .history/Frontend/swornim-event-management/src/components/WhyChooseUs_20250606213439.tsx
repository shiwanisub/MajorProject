import type React from "react"
import "./WhyChooseUs.css"

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Verified Vendors",
      description:
        "All our vendors are thoroughly vetted and verified. We ensure quality, reliability, and professionalism in every service provider on our platform.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
      stats: "500+ Verified",
    },
    {
      title: "Best Price Guarantee",
      description:
        "We guarantee the best prices in the market. If you find a better deal elsewhere, we'll match it and give you an additional 5% discount.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      stats: "Up to 30% Savings",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available round the clock to assist you. From planning to execution, we're here to help at every step.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      stats: "24/7 Available",
    },
    {
      title: "Secure Payments",
      description:
        "Your payments are 100% secure with our encrypted payment gateway. We support multiple payment methods including Khalti, eSewa, and bank transfers.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <circle cx="12" cy="16" r="1"></circle>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      stats: "100% Secure",
    },
    {
      title: "Quality Assurance",
      description:
        "We maintain strict quality standards and regularly monitor vendor performance. Your satisfaction is our top priority with guaranteed service quality.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      stats: "4.9/5 Rating",
    },
    {
      title: "Event Insurance",
      description:
        "All events booked through our platform come with complimentary event insurance coverage, protecting you against unforeseen circumstances.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      stats: "Full Coverage",
    },
  ]

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Swornim?</h2>
          <p>
            We're not just another event platform. We're your trusted partner in creating extraordinary experiences.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-stats">{feature.stats}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="guarantee-section">
          <div className="guarantee-content">
            <h3>Our Promise to You</h3>
            <div className="guarantees">
              <div className="guarantee-item">
                <span className="guarantee-icon">💯</span>
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">🔄</span>
                <span>Free Cancellation up to 48hrs</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">⚡</span>
                <span>Instant Booking Confirmation</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">🎯</span>
                <span>On-time Service Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
