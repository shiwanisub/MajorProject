"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

interface Service {
  id: number
  title: string
  description: string
  category: string
  location: string
  vendor: string
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "Plumbing Service",
      description: "Fixing leaky pipes",
      category: "Home Repair",
      location: "New York",
      vendor: "ABC Plumbing",
    },
    {
      id: 2,
      title: "Electrical Service",
      description: "Wiring and electrical repairs",
      category: "Home Repair",
      location: "Los Angeles",
      vendor: "XYZ Electric",
    },
    {
      id: 3,
      title: "Tutoring - Math",
      description: "Math tutoring for all levels",
      category: "Education",
      location: "Chicago",
      vendor: "Math Experts",
    },
    {
      id: 4,
      title: "Tutoring - English",
      description: "English tutoring and writing assistance",
      category: "Education",
      location: "Houston",
      vendor: "English Tutors",
    },
    {
      id: 5,
      title: "Landscaping",
      description: "Lawn mowing and garden maintenance",
      category: "Outdoor",
      location: "Phoenix",
      vendor: "Green Thumb Landscaping",
    },
    {
      id: 6,
      title: "Pool Cleaning",
      description: "Pool cleaning and maintenance",
      category: "Outdoor",
      location: "Philadelphia",
      vendor: "Aqua Clean",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("q") || ""
    const category = searchParams.get("category") || ""
    const location = searchParams.get("location") || ""

    setSearchQuery(query)
    setSelectedCategory(category)
    setSelectedLocation(location)
  }, [location.search])

  const filteredServices = services.filter((service) => {
    const matchesQuery =
      !searchQuery ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.vendor.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = !selectedCategory || service.category === selectedCategory
    const matchesLocation = !selectedLocation || service.location === selectedLocation

    return matchesQuery && matchesCategory && matchesLocation
  })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    updateQueryParams({ q: e.target.value })
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
    updateQueryParams({ category: e.target.value })
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value)
    updateQueryParams({ location: e.target.value })
  }

  const updateQueryParams = (params: { q?: string; category?: string; location?: string }) => {
    const currentParams = new URLSearchParams(location.search)
    for (const key in params) {
      if (params[key]) {
        currentParams.set(key, params[key]!)
      } else {
        currentParams.delete(key)
      }
    }
    router.push(
      {
        pathname: router.pathname,
        search: currentParams.toString(),
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <div>
      <h1>Services</h1>

      <div>
        <input type="text" placeholder="Search services..." value={searchQuery} onChange={handleSearchChange} />

        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Home Repair">Home Repair</option>
          <option value="Education">Education</option>
          <option value="Outdoor">Outdoor</option>
        </select>

        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Phoenix">Phoenix</option>
          <option value="Philadelphia">Philadelphia</option>
        </select>
      </div>

      <ul>
        {filteredServices.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>Category: {service.category}</p>
            <p>Location: {service.location}</p>
            <p>Vendor: {service.vendor}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
