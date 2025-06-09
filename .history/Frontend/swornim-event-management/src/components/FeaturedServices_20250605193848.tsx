import type React from "react"
import { Link } from "react-router-dom"
import "./FeaturedServices.css"

const FeaturedServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Wedding Photography",
      description: "Capture your special moments with professional wedding photographers",
      image: "/images/services/wedding-photography.jpg",
      price: "Starting from NPR 25,000",
      rating: 4.9,
      reviews: 156,
      category: "Photography",
    },
    {
      id: 2,
      title: "Event Decoration",
      description: "Transform your venue with stunning decorations and themes",
      image: "/images/services/decoration.jpg",
      price: "Starting from NPR 15,000",
      rating: 4.8,
      reviews: 203,
      category: "Decoration",
    },
    {
      id: 3,
      title: "Makeup Artist",
      description: "Professional makeup services for brides and special occasions",
      image: "/images/services/makeup.jpg",
      price: "Starting from NPR 8,000",
      rating: 4.9,
      reviews: 89,
      category: "Beauty",
    },
    {
      id: 4,
      title: "Catering Services",
      description: "Delicious food and beverages for all types of events",
      image: "/images/services/catering.jpg",
      price: "Starting from NPR 500/person",
      rating: 4.7,
      reviews: 312,
      category: "Catering",
    },
    {
      id: 5,
      title: "Event Venues",
      description: "Beautiful venues for weddings, parties, and corporate events",
      image: "/images/services/venues.jpg",
      price: "Starting from NPR 20,000",
      rating: 4.8,
      reviews: 145,
      category: "Venues",
    },
    {
      id: 6,
      title: "Music & DJ",
      description: "Professional DJs and live music for unforgettable entertainment",
      image: "/images/services/music.jpg",
      price: "Starting from NPR 12,000",
      rating: 4.6,
      reviews: 78,
      category: "Entertainment",
    },
  ]

  return (
    <section className="featured-services">
      <div className="container">
        <div className="section-header">
          <h2>Featured Services</h2>
          <p>Discover our most popular event services trusted by thousands of customers</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
                <div className="service-category">{service.category}</div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`star
                        className={\`star ${i < Math.floor(service.rating) ? "filled" : ""}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="rating-text">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <Link to={`/booking/${service.id}`} className="btn btn-primary btn-sm">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/services" className="btn btn-outline btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
