import type React from "react"
import "./TrustIndicators.css"

const TrustIndicators: React.FC = () => {
  const achievements = [
    {
      number: "10,000+",
      label: "Events Completed",
      icon: "🎉",
    },
    {
      number: "500+",
      label: "Verified Vendors",
      icon: "✅",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: "⭐",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🔧",
    },
  ]

  return (
    <section className="trust-indicators">
      <div className="container">
        <div className="trust-content">
          <div className="section-header">
            <h2>Why Nepal Trusts Swornim</h2>
            <p>Join thousands of satisfied customers who have made their events unforgettable with us</p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators
