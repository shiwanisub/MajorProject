import type React from "react"
import "./TrustIndicators.css"

const TrustIndicators: React.FC = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      icon: "/images/certifications/iso-9001.svg",
    },
    {
      name: "Nepal Tourism Board",
      description: "Licensed Partner",
      icon: "/images/certifications/ntb.svg",
    },
    {
      name: "Event Management Association",
      description: "Certified Member",
      icon: "/images/certifications/ema.svg",
    },
    {
      name: "Better Business Bureau",
      description: "A+ Rating",
      icon: "/images/certifications/bbb.svg",
    },
  ]

  const partners = [
    { name: "Marriott Hotels", logo: "/images/partners/marriott.svg" },
    { name: "Hyatt Regency", logo: "/images/partners/hyatt.svg" },
    { name: "Soaltee Crowne Plaza", logo: "/images/partners/soaltee.svg" },
    { name: "Hotel Yak & Yeti", logo: "/images/partners/yak-yeti.svg" },
    { name: "Radisson Hotel", logo: "/images/partners/radisson.svg" },
    { name: "Hotel Annapurna", logo: "/images/partners/annapurna.svg" },
  ]

  return (
    <section className="trust-indicators">
      <div className="container">
        <div className="trust-content">
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Events Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Verified Vendors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>

          <div className="certifications">
            <h3>Trusted & Certified</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <img src={cert.icon || "/placeholder.svg"} alt={cert.name} />
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partners">
            <h3>Trusted by Leading Venues</h3>
            <div className="partners-grid">
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
