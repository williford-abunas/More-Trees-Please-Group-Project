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

  const [showHome, setShowHome] = React.useState(true)
  const [showUpper, setShowUpper] = React.useState(true)
  const [showCentral, setShowCentral] = React.useState(true)
  const [showLower, setShowLower] = React.useState(true)

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
    setShowHome(false)
    setShowUpper(true)
  }
  function handleOnClickCentral() {
    console.log('Central')
    setShowHome(false)
    setShowCentral(true)
  }
  function handleOnClickLower() {
    console.log('Lower')
    setShowHome(false)
    setShowLower(true)
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
