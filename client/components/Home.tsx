import React, { useState } from 'react'

export default function Home({ onZoneClick }) {
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
    opacity: isHoveredUpper ? '100%' : '80%',
  }

  const hoverStyleCentral = {
    opacity: isHoveredCentral ? '100%' : '80%',
  }
  const hoverStyleLower = {
    opacity: isHoveredLower ? '100%' : '80%',
  }

  function handleOnClickUpper() {
    console.log('Upper')
    {
      onZoneClick('section1')
    }
  }
  function handleOnClickCentral() {
    console.log('Central')
    {
      onZoneClick('section2')
    }
  }
  function handleOnClickLower() {
    console.log('Lower')
    {
      onZoneClick('section3')
    }
  }

  return (
    <div className="home">
      <div
        style={hoverStyleUpper}
        onMouseEnter={handleMouseEnterUpper}
        onMouseLeave={handleMouseLeaveUpper}
        className="upper"
      >
        <img
          onClick={handleOnClickUpper}
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
          onClick={handleOnClickCentral}
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
          onClick={handleOnClickLower}
          className="img"
          src="./images/New Zealand Sliced/03_lower.jpg"
          alt="the lower half of the south island of New Zealand"
        />
      </div>
    </div>
  )
}
