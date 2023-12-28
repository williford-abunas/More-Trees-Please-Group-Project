import React, { useState } from 'react'

export default function Home() {
  // function mouseHover() {
  //   document
  //     .getElementsByClassName('upper')[0]
  //     .addEventListener('mouseover', (onMouseOver: MouseEvent) => {
  //       MouseEvent.target.className = 'hoverColor'
  //     })
  // }
  const [isHoveredUpper, setIsHoveredUpper] = useState(false)
  const [isHoveredCentral, setIsHoveredCentral] = useState(false)
  const [isHoveredLower, setIsHoveredLower] = useState(false)
  const handleMouseEnterUpper = () => {
    setIsHoveredUpper(true)
  }
  const handleMouseLeaveUpper = () => {
    setIsHoveredUpper(false)
  }

  const handleMouseEnterCentral = () => {
    setIsHoveredCentral(true)
  }
  const handleMouseLeaveCentral = () => {
    setIsHoveredCentral(false)
  }

  const handleMouseEnterLower = () => {
    setIsHoveredLower(true)
  }
  const handleMouseLeaveLower = () => {
    setIsHoveredLower(false)
  }

  const hoverStyleUpper = {
    color: isHoveredUpper ? 'green' : null,
    opacity: isHoveredUpper ? '10%' : null,
  }

  const hoverStyleCentral = {
    color: isHoveredCentral ? 'green' : null,
    opacity: isHoveredCentral ? '10%' : null,
  }
  const hoverStyleLower = {
    color: isHoveredLower ? 'green' : null,
    opacity: isHoveredLower ? '10%' : null,
  }

  return (
    <div>
      <div
        style={hoverStyleUpper}
        onMouseEnter={handleMouseEnterUpper}
        onMouseLeave={handleMouseLeaveUpper}
        className="upper"
      >
        <img
          className="img"
          src="./images/New Zealand Sliced/01_upper.jpg"
          alt="the upper half of the north island of new zealand"
        />
      </div>
      <div
        style={hoverStyleCentral}
        onMouseEnter={handleMouseEnterCentral}
        onMouseLeave={handleMouseLeaveCentral}
        className="central"
      >
        <img
          className="img"
          src="./images/New Zealand Sliced/02_central.jpg"
          alt="the central area of new zealand, combining the lower north island and the upper south island"
        />
      </div>
      <div
        style={hoverStyleLower}
        onMouseEnter={handleMouseEnterLower}
        onMouseLeave={handleMouseLeaveLower}
        className="lower"
      >
        <img
          className="img"
          src="./images/New Zealand Sliced/03_lower.jpg"
          alt="the lower half of the south island of New Zealand"
        />
      </div>
    </div>
  )
}
