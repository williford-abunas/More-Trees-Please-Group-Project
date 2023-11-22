import React, { useState, useEffect } from 'react'

export default function Growth(plantedSeed) {
  const [className, setClassName] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClassName('fullyGrown')
    }, 50000)
    return () => clearTimeout(timeoutId)
  }, [])
  return plantedSeed(className)
}
