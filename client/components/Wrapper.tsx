import Home from './Home'
import showHome from './Home'
import React, { useState } from 'react'
import UpperZone from './UpperZone'
import CentralZone from './CentralZone'
import LowerZone from './LowerZone'
import Header from './Header'

export default function Wrapper({ seeds }) {
  const [selected, setSelected] = useState('home')
  const handleZoneClick = (zone) => {
    setSelected(zone)
  }

  const renderComponent = () => {
    switch (selected) {
      case 'section1':
        return (
          <UpperZone
            onZoneClick={handleZoneClick}
            seeds={{ seeds }}
            imageSource={'images/terrain01.jpg'}
          />
        )
      case 'section2':
        return (
          <CentralZone
            onZoneClick={handleZoneClick}
            seeds={{ seeds }}
            imageSource={'images/terrain02.jpg'}
          />
        )
      case 'section3':
        return (
          <LowerZone
            onZoneClick={handleZoneClick}
            seeds={{ seeds }}
            imageSource={'images/terrain03.jpg'}
          />
        )
      default:
        return <Home onZoneClick={handleZoneClick} />
    }
  }

  return <>{renderComponent()}</>
}
