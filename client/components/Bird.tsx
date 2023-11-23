import React, { useEffect, useState } from 'react'
import { getAllBirds, getAllPlantedSeeds } from '../api'
import { Bird as BirdProps } from '../../models/birdsModel'

const Bird: React.FC = () => {
  const [bird, setBird] = useState<BirdProps | null>(null)
  const [birdArray, setBirdArray] = useState<BirdProps[]>([])
  const [totalBirdsSpawned, setTotalBirdsSpawned] = useState(0)

  useEffect(() => {
    // Function to fetch a random bird
    async function fetchRandomBird() {
      const birds = await getAllBirds()
      const randomBird = birds[getRandomNumber(birds.length)]
      setBird(randomBird)
      return randomBird // Return the new bird
    }

    async function fetchMaturePlants() {
      const plantedPlants = await getAllPlantedSeeds()

      const maturePlants = plantedPlants.filter(
        (plant) => plant.isMature == true
      )
      return maturePlants.length
    }

    async function spawnBirds() {
      const matureCount = await fetchMaturePlants()
      console.log(
        Math.floor(matureCount / 5),
        '>=',
        Math.floor(totalBirdsSpawned)
      )

      if (Math.floor(matureCount / 5) > Math.floor(totalBirdsSpawned)) {
        console.log('spawn birds is being spawned')

        for (
          let i = 0;
          i < Math.floor(matureCount / 5) - Math.floor(totalBirdsSpawned);
          i++
        ) {
          updateBirdArray()
          console.log(birdArray)
          setTotalBirdsSpawned((prev) => prev + 1)
        }
      }
    }

    // fetchMaturePlants()

    // Function to update birdArray with the latest bird
    async function updateBirdArray() {
      const newBird = await fetchRandomBird()
      setBird(newBird)
      setBirdArray((prev) => [...prev, newBird])
    }

    // // Fetch a random bird every 20 seconds and update the array
    const intervalId = setInterval(() => {
      fetchMaturePlants()
      spawnBirds()
    }, 2000)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [totalBirdsSpawned])

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  return (
    <>
      <div>
        <p>Current Birds Sighted:</p>
    <div className="bird-images">
        {birdArray.map((b, index) => (
          <img
            className="bird"
            key={index}
            src={`../images/${b.name.toLowerCase()}.png`}
            alt="bird-img"
          />
        ))}
        </div>
      </div>
    </>
  )
}
export default Bird
