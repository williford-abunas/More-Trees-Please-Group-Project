import { useEffect, useState } from 'react'
import { getAllBirds, getAllPlantedSeeds } from '../api'
import * as Bird from '../components/Bird'

export function EventLogger({ birdArray }) {
  const [seedEvents, setSeedEvents] = useState([''])
  const [birdEvents, setBirdEvents] = useState([''])

  useEffect(() => {
    async function getSeedEvents() {
      const seeds = await getAllPlantedSeeds()
      const eventNames = seeds.map((seed) => seed.name)
      setSeedEvents(eventNames)
    }
    async function getBirdEvents() {
      const array = await birdArray.birdArray

      const birdNames = array.map((bird) => bird.name)

      setBirdEvents(birdNames)
    }

    getSeedEvents()
    getBirdEvents()

    const intervalId = setInterval(() => {
      getBirdEvents()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [birdArray])

  return (
    <div className="events">
      <h2>Event Log:</h2>
      <ul>
        {birdEvents.map((birdEvent, i) => (
          <li className="birdsEvents" key={i}>
            {birdEvent} has been attracted to the native trees!{' '}
          </li>
        ))}
        {seedEvents.map((seedEvent, i) => (
          <li key={i}>{seedEvent} has been planted!</li>
        ))}
      </ul>
    </div>
  )
}
