import { useEffect, useState } from 'react'
import { getAllPlantedSeeds } from '../api'

export function EventLogger() {
  const [birdEvents, setBirdEvents] = useState([''])

  useEffect(() => {
    async function getBirdEvents() {
      const seeds = await getAllPlantedSeeds()
      const eventNames = seeds.map((seed) => seed.name)
      setBirdEvents(eventNames)
    }
    getBirdEvents()
    const intervalId = setInterval(getBirdEvents, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <ul>
      {birdEvents.map((birdEvent, i) => (
        <li key={i}>{birdEvent} has been planted!</li>
      ))}
    </ul>
  )
}
