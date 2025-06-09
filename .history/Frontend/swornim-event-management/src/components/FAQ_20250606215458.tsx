"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./FAQ.css"

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I book a service on Swornim?",
      answer:
        "Booking is simple! Browse our services, select your preferred vendor, choose your package, fill in event details, and make secure payment. You'll receive instant confirmation with all details.",
    },
    {
      question: "Are all vendors verified and reliable?",
      answer:
        "Yes! All our vendors go through a rigorous verification process including background checks, portfolio reviews, and customer feedback analysis. We only partner with trusted professionals.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Khalti, eSewa, bank transfers, and cash payments. All online payments are secured with bank-level encryption for your safety.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify bookings according to our cancellation policy. Free cancellation is available up to 48 hours before the event. Check specific vendor policies for details.",
    },
    {
      question: "Do you provide services outside Kathmandu?",
      answer:
        "We provide event management services across major cities in Nepal including Pokhara, Chitwan, Butwal, and other locations. Service availability may vary by location.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Customer satisfaction is our priority. If you're not happy with any service, contact our support team immediately. We'll work with the vendor to resolve issues or provide appropriate compensation.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-4 weeks in advance for regular events and 2-3 months for weddings or large corporate events. However, we also accommodate last-minute bookings based on availability.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes! Most of our vendors offer customizable packages. You can discuss your specific requirements directly with vendors through our platform to create a personalized package that fits your needs and budget.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got answers! Find everything you need to know about our services.</p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFAQ === index ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <svg
                    className={`faq-icon ${openFAQ === index ? "rotated" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="help-card">
              <h3>Still Need Help?</h3>
              <p>Can't find the answer you're looking for? Our support team is here to help!</p>
              <div className="help-options">
                <Link to="/contact" className="btn btn-primary">
                  Contact Support
                </Link>
                <a href="tel:+977-1-4567890" className="btn btn-outline">
                  Call Us Now
                </a>
              </div>
            </div>

            <div className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/cancellation">Cancellation Policy</Link>
                </li>
                <li>
                  <Link to="/vendor-registration">Become a Vendor</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
