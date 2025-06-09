"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"

interface Service {
  id: number
  title: string
  description: string
  category: string
  location: string
  vendor: string
}

const Services: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [filteredServices, setFilteredServices] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const services = [
    {
      id: 1,
      title: "Professional Wedding Photography",
      description: "Capture your special moments with experienced wedding photographers",
      image: "/images/services/wedding-photography.jpg",
      price: 25000,
      rating: 4.9,
      reviews: 156,
      category: "photography",
      location: "Kathmandu",
      vendor: "Pixel Perfect Studios",
      featured: true,
    },
    {
      id: 2,
      title: "Elegant Event Decoration",
      description: "Transform your venue with stunning decorations and themes",
      image: "/images/services/decoration.jpg",
      price: 15000,
      rating: 4.8,
      reviews: 203,
      category: "decoration",
      location: "Lalitpur",
      vendor: "Dream Decorators",
      featured: true,
    },
    {
      id: 3,
      title: "Bridal Makeup Artist",
      description: "Professional makeup services for brides and special occasions",
      image: "/images/services/makeup.jpg",
      price: 8000,
      rating: 4.9,
      reviews: 89,
      category: "makeup",
      location: "Kathmandu",
      vendor: "Glamour Studio",
      featured: false,
    },
    {
      id: 4,
      title: "Premium Catering Services",
      description: "Delicious food and beverages for all types of events",
      image: "/images/services/catering.jpg",
      price: 500,
      rating: 4.7,
      reviews: 312,
      category: "catering",
      location: "Pokhara",
      vendor: "Royal Caterers",
      featured: true,
    },
    {
      id: 5,
      title: "Luxury Event Venues",
      description: "Beautiful venues for weddings, parties, and corporate events",
      image: "/images/services/venues.jpg",
      price: 20000,
      rating: 4.8,
      reviews: 145,
      category: "venue",
      location: "Kathmandu",
      vendor: "Grand Palace",
      featured: false,
    },
    {
      id: 6,
      title: "DJ & Music Services",
      description: "Professional DJs and live music for unforgettable entertainment",
      image: "/images/services/music.jpg",
      price: 12000,
      rating: 4.6,
      reviews: 78,
      category: "music",
      location: "Bhaktapur",
      vendor: "Beat Masters",
      featured: false,
    },
  ]

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    let filtered = [...services]

    // Filter by search query
    const query = searchParams.get("q")
    if (query) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(query.toLowerCase()) ||
          service.description.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Filter by category
    const categoryParam = searchParams.get("category") || selectedCategory
    if (categoryParam) {
      filtered = filtered.filter((service) => service.category === categoryParam)
    }

    // Filter by location
    const location = searchParams.get("location")
    if (location) {
      filtered = filtered.filter((service) => service.location.toLowerCase() === location.toLowerCase())
    }

    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered.filter((service) => service.price >= min && (max ? service.price <= max : true))
    }

    // Sort services
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "popular":
      default:
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
    }

    setFilteredServices(filtered)
  }, [searchParams, selectedCategory, priceRange, sortBy])

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  const filteredServicesOld = services.filter((service) => {
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
    navigate(
      {
        pathname: "/services",
        search: currentParams.toString(),
      },
      { replace: true },
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
