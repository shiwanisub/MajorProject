import type React from "react"
import { Link } from "react-router-dom"
import "./RecentEvents.css"

const RecentEvents: React.FC = () => {
  const recentEvents = [
    {
      id: 1,
      title: "Royal Wedding Celebration",
      type: "Wedding",
      location: "Kathmandu",
      date: "December 2024",
      image: "/images/events/wedding1.jpg",
      description: "A magnificent 3-day wedding celebration with traditional and modern elements",
      vendors: ["Photography", "Decoration", "Catering", "Music"],
      budget: "NPR 15,00,000",
      guests: 500,
    },
    {
      id: 2,
      title: "Corporate Annual Gala",
      type: "Corporate",
      location: "Pokhara",
      date: "November 2024",
      image: "/images/events/corporate1.jpg",
      description: "Professional corporate event with team building and award ceremony",
      vendors: ["Venue", "Catering", "AV Equipment", "Photography"],
      budget: "NPR 8,00,000",
      guests: 200,
    },
    {
      id: 3,
      title: "Sweet 16 Birthday Bash",
      type: "Birthday",
      location: "Lalitpur",
      date: "October 2024",
      image: "/images/events/birthday1.jpg",
      description: "Themed birthday party with entertainment and custom decorations",
      vendors: ["Decoration", "Entertainment", "Catering", "Photography"],
      budget: "NPR 2,50,000",
      guests: 80,
    },
  ]

  return (
    <section className="recent-events">
      <div className="container">
        <div className="section-header">
          <h2>Recent Success Stories</h2>
          <p>See how we've helped create unforgettable moments for our clients across Nepal</p>
        </div>

        <div className="events-grid">
          {recentEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image || "/placeholder.svg"} alt={event.title} />
                <div className="event-type">{event.type}</div>
                <div className="event-overlay">
                  <Link to={`/case-study/${event.id}`} className="view-details">
                    View Case Study
                  </Link>
                </div>
              </div>

              <div className="event-content">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span className="location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {event.location}
                    </span>
                    <span className="date">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {event.date}
                    </span>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                <div className="event-stats">
                  <div className="stat">
                    <span className="stat-value">{event.guests}</span>
                    <span className="stat-label">Guests</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{event.budget}</span>
                    <span className="stat-label">Budget</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{event.vendors.length}</span>
                    <span className="stat-label">Vendors</span>
                  </div>
                </div>

                <div className="event-vendors">
                  <h4>Services Used:</h4>
                  <div className="vendor-tags">
                    {event.vendors.map((vendor, index) => (
                      <span key={index} className="vendor-tag">
                        {vendor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/portfolio" className="btn btn-outline btn-lg">
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentEvents
