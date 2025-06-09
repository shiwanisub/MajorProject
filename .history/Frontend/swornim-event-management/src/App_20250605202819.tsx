import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Events from "./pages/Events"
import VendorRegistration from "./pages/VendorRegistration"
// import UserDashboard from "./pages/UserDashboard"
// import AdminDashboard from "./pages/AdminDashboard"
import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Profile from "./pages/Profile"
// import BookingPage from "./pages/BookingPage"
import "./styles/global.css"

function App() {
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
            {/* <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking/:serviceId" element={<BookingPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
