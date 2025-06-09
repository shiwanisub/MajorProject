"use client"

import type React from "react"
import "./AboutUs.css"

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      image: "/images/team/rajesh.jpg",
      description: "10+ years in event management industry with passion for creating memorable experiences.",
    },
    {
      name: "Priya Thapa",
      position: "Head of Operations",
      image: "/images/team/priya.jpg",
      description: "Expert in vendor management and quality assurance with 8 years of experience.",
    },
    {
      name: "Amit Gurung",
      position: "Technology Lead",
      image: "/images/team/amit.jpg",
      description: "Full-stack developer ensuring seamless platform experience for all users.",
    },
    {
      name: "Sita Rai",
      position: "Customer Success Manager",
      image: "/images/team/sita.jpg",
      description: "Dedicated to ensuring customer satisfaction and building lasting relationships.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize event management in Nepal",
    },
    {
      year: "2021",
      title: "100+ Vendors",
      description: "Reached our first major milestone of 100 registered vendors",
    },
    {
      year: "2022",
      title: "10,000+ Events",
      description: "Successfully facilitated over 10,000 events across Nepal",
    },
    {
      year: "2023",
      title: "National Expansion",
      description: "Expanded services to all major cities in Nepal",
    },
    {
      year: "2024",
      title: "50,000+ Users",
      description: "Growing community of satisfied customers and vendors",
    },
  ]

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in every event, ensuring the highest quality standards.",
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building trust through transparency, reliability, and consistent service delivery.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Continuously innovating to provide better solutions for event management.",
    },
    {
      icon: "🌟",
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do.",
    },
    {
      icon: "🌍",
      title: "Community",
      description: "Supporting local vendors and contributing to Nepal's event industry growth.",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description: "Streamlining event planning processes to save time and reduce stress.",
    },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Swornim</h1>
            <p>
              Nepal's leading event management platform connecting customers with the best vendors for unforgettable
              celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, Swornim began with a simple yet powerful vision: to make event planning accessible,
                affordable, and stress-free for everyone in Nepal. We recognized the challenges people faced when
                organizing events - from finding reliable vendors to managing multiple bookings and payments.
              </p>
              <p>
                Our platform bridges the gap between customers and service providers, creating a thriving ecosystem
                where quality vendors can showcase their services and customers can easily find exactly what they need
                for their special occasions.
              </p>
              <p>
                Today, we're proud to be Nepal's most trusted event management platform, having facilitated thousands of
                successful events across the country. From intimate family gatherings to grand corporate events, we've
                been part of countless memorable moments.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/about/story.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize event planning in Nepal by providing a comprehensive platform that connects customers
                with verified, high-quality vendors, making every celebration memorable and stress-free.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To become the go-to platform for all event-related needs in Nepal and beyond, fostering a community
                where creativity meets convenience and every event becomes an extraordinary experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our dedicated team of professionals is committed to making your event planning experience exceptional.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">Verified Vendors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25,000+</div>
              <div className="stat-label">Events Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Plan Your Next Event?</h2>
            <p>Join thousands of satisfied customers who trust Swornim for their special occasions.</p>
            <div className="cta-buttons">
              <a href="/services" className="btn btn-primary btn-lg">
                Browse Services
              </a>
              <a href="/vendor-registration" className="btn btn-outline btn-lg">
                Become a Vendor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
