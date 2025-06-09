import type React from "react"
import "./TrustIndicators.css"

const TrustIndicators: React.FC = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      icon: "🏆",
    },
    {
      name: "Nepal Tourism Board",
      description: "Certified Partner",
      icon: "🎯",
    },
    {
      name: "BBB Accredited",
      description: "A+ Rating",
      icon: "⭐",
    },
    {
      name: "Secure Payments",
      description: "SSL Encrypted",
      icon: "🔒",
    },
  ]

  const partners = [
    { name: "Khalti", logo: "/images/partners/khalti.png" },
    { name: "eSewa", logo: "/images/partners/esewa.png" },
    { name: "Nepal Tourism Board", logo: "/images/partners/ntb.png" },
    { name: "FNCCI", logo: "/images/partners/fncci.png" },
    { name: "CAN", logo: "/images/partners/can.png" },
    { name: "HAN", logo: "/images/partners/han.png" },
  ]

  return (
    <section className="trust-indicators">
      <div className="container">
        <div className="trust-content">
          <div className="certifications">
            <h3>Trusted & Certified</h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <span className="cert-icon">{cert.icon}</span>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partners">
            <h3>Our Partners</h3>
            <div className="partners-scroll">
              {partners.map((partner, index) => (
                <div key={index} className="partner-item">
                  <img src={partner.logo || "/placeholder.svg"} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators
