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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // For demo purposes - replace with your actual user management logic
    // const userData = localStorage.getItem("user")
    // if (userData) {
    //   setUser(JSON.parse(userData))
    // }
    
    // Uncomment below for testing with a mock user
    // setUser({ name: "John Doe", userType: "user" })
  }, [location])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.classList.remove('menu-open')
  }, [location])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
        document.body.classList.remove('menu-open')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen
    setIsMenuOpen(newMenuState)
    
    // Prevent body scroll when menu is open on mobile
    if (newMenuState) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('menu-open')
  }

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : ""
  }

  const handleLogout = () => {
    // Replace with your actual logout logic
    // localStorage.removeItem("user")
    setUser(null)
    navigate("/")
    closeMenu()
  }

  const getDashboardLink = () => {
    if (!user) return "/login"

    switch (user.userType) {
      case "admin":
        return "/admin"
      case "vendor":
        return "/vendor-dashboard"
      default:
        return "/dashboard"
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('.navbar')
      const target = event.target as Node
      
      if (isMenuOpen && navbar && !navbar.contains(target)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
      
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
            <Link to="/contact" className={`navbar-link ${isActive("/contact")}`} onClick={closeMenu}>
              Contact Us
            </Link>
            {!user?.userType || user?.userType !== "vendor" ? (
              <Link
                to="/vendor-registration"
                className={`navbar-link ${isActive("/vendor-registration")}`}
                onClick={closeMenu}
              >
                Become a Vendor
              </Link>
            ) : null}
            {user && (
              <Link to={getDashboardLink()} className={`navbar-link`} onClick={closeMenu}>
                Dashboard
              </Link>
            )}

            {/* Mobile Actions - Only show in mobile menu */}
            <div className="navbar-actions">
              {user ? (
                <div className="user-dropdown">
                  <button className="user-dropdown-toggle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="user-name">{user.name || "User"}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="user-dropdown-menu">
                    <Link to={getDashboardLink()} className="dropdown-item" onClick={closeMenu}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                      </svg>
                      Dashboard
                    </Link>
                    <Link to="/profile" className="dropdown-item" onClick={closeMenu}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Profile
                    </Link>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
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
          </div>

          {/* Desktop Actions - Only show on desktop */}
          <div className="navbar-actions desktop-only">
            {user ? (
              <div className="user-dropdown">
                <button className="user-dropdown-toggle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="user-name">{user.name || "User"}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="user-dropdown-menu">
                  <Link to={getDashboardLink()} className="dropdown-item" onClick={closeMenu}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                    </svg>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="dropdown-item" onClick={closeMenu}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Profile
                  </Link>
                  <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Logout
                  </button>
                  </div>
              </div>
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

          <button 
            className={`navbar-toggle ${isMenuOpen ? "active" : ""}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar