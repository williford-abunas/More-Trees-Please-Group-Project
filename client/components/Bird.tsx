import { getAllBirds } from '../api'
import { Bird as BirdProps } from '../../models/birdsModel'

const Bird: React.FC<BirdProps> = () => {
  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  async function getRandomBird() {
    const birds = await getAllBirds()
    // use the above line once API client functions are created
    // console.log(seeds)

    const randomBird = birds[getRandomNumber(birds.length)]
    return randomBird
  }

  const b = getRandomBird()

  return (
    <>
      {b.map((item, i) => (
        <p key={i}> {Bird.name}</p>
      ))}
    </>
  )
}

export default Bird
