"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Events from "./pages/Events"
import VendorRegistration from "./pages/VendorRegistration"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import VendorDashboard from "./pages/VendorDashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import BookingPage from "./pages/BookingPage"
import "./styles/global.css"

// Protected route component
const ProtectedRoute = ({ children, userType }: { children: JSX.Element; userType?: string }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const user = JSON.parse(userData)
      setIsAuthenticated(user.isAuthenticated)
      setUserRole(user.userType)
    } else {
      setIsAuthenticated(false)
      setUserRole(null)
    }
  }, [])

  if (isAuthenticated === null) {
    // Still loading
    return <div className="loading-screen">Loading...</div>
  }

  if (!isAuthenticated) {
    // Not authenticated
    return <Navigate to="/login" />
  }

  if (userType && userRole !== userType) {
    // Wrong user type
    return <Navigate to="/" />
  }

  return children
}

function App() {
  // Set document title
  useEffect(() => {
    document.title = "Swornim Event Management"

    // You can also set favicon here
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null
    if (link) {
      link.href = "/images/logo/favicon.ico"
    } else {
      const newLink = document.createElement("link")
      newLink.rel = "icon"
      newLink.href = "/images/logo/favicon.ico"
      document.head.appendChild(newLink)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/vendor-registration" element={<VendorRegistration />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute userType="customer">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute userType="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor-dashboard"
              element={
                <ProtectedRoute userType="vendor">
                  <VendorDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/booking/:serviceId" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
