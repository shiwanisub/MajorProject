"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState<any>(null)
  const location = useLocation()

  // Check if user is logged in
  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [location]) // Re-check when location changes

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    window.location.href = "/"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <Logo />
          </Link>
        </div>

        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link" onClick={closeMenu}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            {user && user.isAuthenticated ? (
              <>
                <div className="user-menu">
                  <span className="user-greeting">Hello, {user.name?.split(" ")[0] || "User"}</span>
                  <div className="user-dropdown">
                    {user.userType === "admin" && (
                      <Link to="/admin" className="dropdown-item" onClick={closeMenu}>
                        Admin Dashboard
                      </Link>
                    )}
                    {user.userType === "vendor" && (
                      <Link to="/vendor-dashboard" className="dropdown-item" onClick={closeMenu}>
                        Vendor Dashboard
                      </Link>
                    )}
                    {user.userType === "customer" && (
                      <Link to="/dashboard" className="dropdown-item" onClick={closeMenu}>
                        My Dashboard
                      </Link>
                    )}
                    <Link to="/profile" className="dropdown-item" onClick={closeMenu}>
                      Profile
                    </Link>
                    <button onClick={handleLogout} className="dropdown-item logout-btn">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary" onClick={closeMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`toggle-icon ${isMenuOpen ? "active" : ""}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
