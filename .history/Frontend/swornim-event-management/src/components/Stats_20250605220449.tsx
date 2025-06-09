"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "./Stats.css"

const Stats: React.FC = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    vendors: 0,
    events: 0,
    cities: 0,
  })

  const finalStats = {
    customers: 10000,
    vendors: 500,
    events: 2500,
    cities: 15,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalStats).map((key) => {
      const finalValue = finalStats[key as keyof typeof finalStats]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounters((prev) => {
          const newValue = Math.min(prev[key as keyof typeof prev] + increment, finalValue)
          return {
            ...prev,
            [key]: Math.floor(newValue),
          }
        })
      }, stepDuration)
    })

    // Clear intervals after animation completes
    setTimeout(() => {
      intervals.forEach(clearInterval)
      setCounters(finalStats)
    }, duration)

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    {
      number: counters.customers,
      label: "Happy Customers",
      suffix: "+",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      number: counters.vendors,
      label: "Trusted Vendors",
      suffix: "+",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"></path>
          <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"></path>
          <path d="M3 12v7c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-7"></path>
        </svg>
      ),
    },
    {
      number: counters.events,
      label: "Events Completed",
      suffix: "+",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
    {
      number: counters.cities,
      label: "Cities Covered",
      suffix: "",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <h2>Our Impact in Numbers</h2>
          <p>Trusted by thousands across Nepal for unforgettable events</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {stat.number.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
