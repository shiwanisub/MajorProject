"use client"

import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userType: "customer",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Get existing users list or empty array
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")

      // Check if email already registered
      const userExists = existingUsers.some((user: any) => user.email === formData.email)
      if (userExists) {
        setError("Email already registered. Please login.")
        setIsLoading(false)
        return
      }

      // Add new user to users list
      const newUser = {
        email: formData.email,
        password: formData.password, // plain text (not for production)
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        userType: formData.userType,
        isAuthenticated: false,
      }
      existingUsers.push(newUser)
      localStorage.setItem("users", JSON.stringify(existingUsers))

      // Redirect after successful signup
      if (formData.userType === "vendor") {
        navigate("/vendor-registration")
      } else {
        alert("Your account has been created. Please login now.")  // Show dialog
        navigate("/login")
      }
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-content">
          <div className="register-header">
            <h1>Create Your Account</h1>
            <p>Join Swornim Event Management Platform</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            {error && <div className="alert alert-error">{error}</div>}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType" className="form-label">
                I am a:
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="customer">Customer</option>
                <option value="vendor">Vendor (Photographer, Decorator, etc.)</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="loading"></span>
                  Signing up...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="register-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        <div className="register-image">
          <img src="/images/register-bg.jpg" alt="Event celebration" />
          <div className="image-overlay">
            <h2>Join Nepal's Premier Event Platform</h2>
            <p>Connect with thousands of customers and grow your event business</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
