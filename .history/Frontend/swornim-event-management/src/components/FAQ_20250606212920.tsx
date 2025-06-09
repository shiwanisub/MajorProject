"use client"

import type React from "react"
import { useState } from "react"
import "./FAQ.css"

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I book a service through Swornim?",
      answer:
        "Booking is simple! Browse our services, compare vendors, read reviews, and click 'Book Now' on your preferred service. You can pay securely through our platform using Khalti, eSewa, or bank transfer.",
    },
    {
      question: "Are all vendors on Swornim verified?",
      answer:
        "Yes, absolutely! We have a strict verification process. All vendors must provide valid licenses, insurance documents, portfolio samples, and pass our quality assessment before joining our platform.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods including Khalti, eSewa, bank transfers, and major credit/debit cards. All payments are processed securely with SSL encryption.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking up to 48 hours before the event date without any charges. For cancellations within 48 hours, cancellation fees may apply as per our policy.",
    },
    {
      question: "Do you provide event insurance?",
      answer:
        "Yes! All events booked through Swornim come with complimentary basic event insurance. This covers unforeseen circumstances like vendor no-shows or weather-related issues.",
    },
    {
      question: "How do you ensure service quality?",
      answer:
        "We maintain quality through vendor verification, customer reviews, regular performance monitoring, and our quality assurance team. We also offer a satisfaction guarantee on all bookings.",
    },
    {
      question: "Can I get a custom quote for my event?",
      answer:
        "For complex events or custom requirements, you can request a personalized quote. Our event specialists will work with you to create a tailored package within your budget.",
    },
    {
      question: "What if I'm not satisfied with a service?",
      answer:
        "Customer satisfaction is our priority. If you're not satisfied, contact our support team within 24 hours of your event. We'll work to resolve the issue and may offer refunds or alternative solutions.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Got questions? We've got answers! Find everything you need to know about planning your event with Swornim.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index}>
                  <span>{faq.question}</span>
                  <svg
                    className="faq-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <div className="contact-card">
              <h3>Still have questions?</h3>
              <p>Our support team is here to help you 24/7</p>
              <div className="contact-options">
                <a href="tel:+977-1-4567890" className="contact-option">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Us
                </a>
                <a href="mailto:support@swornim.com" className="contact-option">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Us
                </a>
                <a href="/contact" className="contact-option">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
