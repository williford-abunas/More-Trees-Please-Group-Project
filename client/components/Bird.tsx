import { getAllBirds } from '../api'
import { Bird as BirdProps } from '../../models/birdsModel'
import { useEffect, useState } from 'react'

const Bird: React.FC = () => {
  const [bird, setBird] = useState<BirdProps | null>(null)
  const [birdArray, setBirdArray] = useState([])

  useEffect(() => {
    async function fetchRandomBird() {
      const birds = await getAllBirds()
      const randomBird = birds[getRandomNumber(birds.length)]
      setBird(randomBird)
    }

    async function birdsList() {
      const rBird = await fetchRandomBird()
      setBirdArray((prev) => [...prev, rBird])
    }
    fetchRandomBird()
    birdsList()
  }, [])

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  return <>{bird && <p>{bird.name}</p>}</>
}

export default Bird
