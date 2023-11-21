import Home from './Home'
import showHome from './Home'
import React, { useState } from 'react'
import UpperZone from './UpperZone'
import CentralZone from './CentralZone'
import LowerZone from './LowerZone'
import Header from './Header'

export default function Wrapper() {
  const [selected, setSelected] = useState('home')

  const handleZoneClick = (zone) => {
    setSelected(zone)
  }

  const renderComponent = () => {
    switch (selected) {
      case 'section1':
        return <UpperZone onZoneClick={handleZoneClick} />
      case 'section2':
        return <CentralZone onZoneClick={handleZoneClick} />
      case 'section3':
        return <LowerZone onZoneClick={handleZoneClick} />
      default:
        return <Home onZoneClick={handleZoneClick} />
    }
  }

  return <>{renderComponent()}</>

  // if (showUpper == true) {
  //   return <UpperZone />
  // } else if (showCentral == true) {
  //   return <CentralZone />
  // } else if (showLower == true) {
  //   return <LowerZone />
  // } else if (showHome == true) {
  //   return <Home />
  // } else {
  //   return <h1>Oopsie Whoopsie! Website is sad :(</h1>
  // }
}
