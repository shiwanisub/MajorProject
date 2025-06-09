"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "./Logo"
import "./Navbar.css"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState<any>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check for logged in user
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/")
    closeMenu()
  }

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <Logo />
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className={`navbar-link ${isActive("/")}`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" className={`navbar-link ${isActive("/services")}`} onClick={closeMenu}>
            Services
          </Link>
          <Link to="/events" className={`navbar-link ${isActive("/events")}`} onClick={closeMenu}>
            Events
          </Link>
          <Link
            to="/vendor-registration"
            className={`navbar-link ${isActive("/vendor-registration")}`}
            onClick={closeMenu}
          >
            Become a Vendor
          </Link>
          {user && (
            <Link to="/dashboard" className={`navbar-link ${isActive("/dashboard")}`} onClick={closeMenu}>
              Dashboard
            </Link>
          )}
        </div>

        <div className="navbar-actions">
          {user ? (
            <div className="user-menu">
              <span className="user-greeting">Welcome, {user.name?.split(" ")[0] || "User"}</span>
              <button onClick={handleLogout} className="btn btn-outline btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm" onClick={closeMenu}>
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button className={`navbar-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
