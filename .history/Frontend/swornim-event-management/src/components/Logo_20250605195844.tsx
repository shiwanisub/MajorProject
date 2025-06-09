import type React from "react"

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <svg
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Background Circle */}
        <circle cx="20" cy="20" r="18" fill="var(--primary-color)" />

        {/* Star Symbol */}
        <path
          d="M20 8L22.5 15H30L24.5 19.5L27 26.5L20 22L13 26.5L15.5 19.5L10 15H17.5L20 8Z"
          fill="var(--secondary-color)"
        />

        {/* Text */}
        <text x="45" y="16" fontFamily="var(--font-family)" fontSize="18" fontWeight="700" fill="var(--primary-color)">
        Swornim
        </text>
        
      </svg>
    </div>
  )
}

export default Logo
