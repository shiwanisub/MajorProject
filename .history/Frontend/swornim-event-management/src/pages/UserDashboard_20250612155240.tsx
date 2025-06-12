"use client"

import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading && (!user || !user.isAuthenticated)) {
      navigate("/login")
    }
  }, [user, isLoading, navigate])

  const bookings = [
    {
      id: 1,
      service: "Wedding Photography",
      vendor: "Pixel Perfect Studios",
      date: "2024-04-15",
      status: "confirmed",
      amount: 25000,
      image: "/images/services/wedding-photography.jpg",
    },
    {
      id: 2,
      service: "Event Decoration",
      vendor: "Dream Decorators",
      date: "2024-04-15",
      status: "pending",
      amount: 15000,
      image: "/images/services/decoration.jpg",
    },
    {
      id: 3,
      service: "Bridal Makeup",
      vendor: "Glamour Studio",
      date: "2024-03-20",
      status: "completed",
      amount: 8000,
      image: "/images/services/makeup.jpg",
    },
  ]

  const favorites = [
    {
      id: 1,
      name: "Royal Caterers",
      service: "Catering Services",
      rating: 4.8,
      image: "/images/vendors/royal-caterers.jpg",
    },
    {
      id: 2,
      name: "Music Masters",
      service: "DJ Services",
      rating: 4.7,
      image: "/images/vendors/music-masters.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-green-600"
      case "pending":
        return "text-yellow-500"
      case "completed":
        return "text-blue-600"
      case "cancelled":
        return "text-red-500"
      default:
        return ""
    }
  }

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow p-4 flex items-center space-x-4">
          <div className="text-blue-600">
            📅
          </div>
          <div>
            <h3 className="text-xl font-semibold">{bookings.length}</h3>
            <p>Total Bookings</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center space-x-4">
          <div className="text-yellow-500">
            ⏳
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              {bookings.filter((b) => b.status === "confirmed" || b.status === "pending").length}
            </h3>
            <p>Upcoming Events</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center space-x-4">
          <div className="text-red-500">
            ❤️
          </div>
          <div>
            <h3 className="text-xl font-semibold">{favorites.length}</h3>
            <p>Favorite Vendors</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>
        <div className="space-y-4">
          {bookings.slice(0, 3).map((booking) => (
            <div key={booking.id} className="flex items-center bg-white rounded-xl shadow p-4">
              <img src={booking.image} alt={booking.service} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <h4 className="font-semibold">{booking.service}</h4>
                <p className="text-sm text-gray-500">{booking.vendor}</p>
                <p className="text-sm">{new Date(booking.date).toLocaleDateString()}</p>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderBookings = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">My Bookings</h3>
        <Link to="/services" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book New Service
        </Link>
      </div>
      {bookings.map((booking) => (
        <div key={booking.id} className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center">
            <img src={booking.image} alt={booking.service} className="w-20 h-20 object-cover rounded-md mr-4" />
            <div>
              <h4 className="font-semibold">{booking.service}</h4>
              <p className="text-sm text-gray-500">{booking.vendor}</p>
              <p className="text-sm">Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p className="text-sm">Amount: NPR {booking.amount.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:text-right space-y-2">
            <p className={`font-medium ${getStatusColor(booking.status)}`}>{booking.status}</p>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded text-sm">View Details</button>
              {booking.status === "pending" && (
                <button className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm">Cancel</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderFavorites = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Favorite Vendors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favorites.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-xl shadow p-4 flex items-center">
            <img src={vendor.image} alt={vendor.name} className="w-20 h-20 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <h4 className="font-semibold">{vendor.name}</h4>
              <p className="text-sm">{vendor.service}</p>
              <p className="text-sm">Rating: {vendor.rating} ★</p>
            </div>
            <div className="space-x-2">
              <Link to={`/vendor/${vendor.id}`} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">View</Link>
              <button className="px-3 py-1 border rounded text-sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Profile Settings</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input type="text" className="w-full border p-2 rounded" defaultValue={user?.name || ""} />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full border p-2 rounded" defaultValue={user?.email || ""} />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input type="tel" className="w-full border p-2 rounded" defaultValue="+977-9841234567" />
          </div>
          <div>
            <label className="block text-sm mb-1">Location</label>
            <select className="w-full border p-2 rounded">
              <option>Kathmandu</option>
              <option>Pokhara</option>
              <option>Chitwan</option>
            </select>
          </div>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Profile
        </button>
      </form>
    </div>
  )

  if (isLoading) {
    return (
      <div className="p-8">
        <h2 className="text-center text-xl">Loading...</h2>
      </div>
    )
  }

  if (!user || !user.isAuthenticated) {
    return null
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome back, {user.name?.split(" ")[0] || "User"}!</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-1/4 bg-white p-4 rounded-xl shadow">
            <div className="text-center mb-6">
              <img src="/images/avatars/default-user.jpg" alt={user.name} className="w-20 h-20 mx-auto rounded-full" />
              <h3 className="mt-2 font-semibold">{user.name || "User"}</h3>
              <p className="text-sm text-gray-500">Member since January 2024</p>
            </div>
            <nav className="flex flex-col space-y-2">
              {["overview", "bookings", "favorites", "profile"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-3 py-2 rounded ${
                    activeTab === tab ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </aside>

          <main className="w-full md:w-3/4 space-y-6">
            {activeTab === "overview" && renderOverview()}
            {activeTab === "bookings" && renderBookings()}
            {activeTab === "favorites" && renderFavorites()}
            {activeTab === "profile" && renderProfile()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
