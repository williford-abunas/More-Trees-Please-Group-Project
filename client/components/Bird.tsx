import React, { useEffect, useState } from 'react'
import { getAllBirds } from '../api'
import { Bird as BirdProps } from '../../models/birdsModel'

const Bird: React.FC = () => {
  const [bird, setBird] = useState<BirdProps | null>(null)
  const [birdArray, setBirdArray] = useState<BirdProps[]>([])

  useEffect(() => {
    // Function to fetch a random bird
    async function fetchRandomBird() {
      const birds = await getAllBirds()
      const randomBird = birds[getRandomNumber(birds.length)]
      return randomBird // Return the new bird
    }

    // Function to update birdArray with the latest bird
    async function updateBirdArray() {
      const newBird = await fetchRandomBird()
      setBird(newBird)
      setBirdArray((prev) => (newBird ? [...prev, newBird] : prev))
    }

    // Fetch a random bird initially
    fetchRandomBird().then((initialBird) => setBird(initialBird))

    // Fetch a random bird every 20 seconds and update the array
    const intervalId = setInterval(updateBirdArray, 20000)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array to run effect only once on mount

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  return (
    <>
      <div>{bird && <p>New Bird Sighted: {bird.name}</p>}</div>
      <div>
        <p>Current Birds Sighted:</p>

        {birdArray.map((b, index) => (
          <span key={index}>
            {b.name}
            <span> | </span>
          </span>
        ))}
      </div>
    </>
  )
}

export default Bird
