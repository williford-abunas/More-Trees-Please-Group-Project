import { useEffect, useState } from 'react'
import * as api from '../api'
import { Plant } from '../../models/plantsModel'
import { getNativePlants } from '../api'
import SeedPlant from './SeedPlant'

const Header = () => {
  const [inv, setInv] = useState([
    {
      id: 0,
      name: '',
      region: 0,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 0,
      native: false,
      imgUrl: '',
    },
  ])

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  async function getRandomSeed() {
    const seeds = await getNativePlants()
    // use the above line once API client functions are created
    console.log(seeds)

    // const seeds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    // the above line is just sample data for testing purposes
    const randomSeed = seeds[getRandomNumber(seeds.length)]
    return randomSeed
  }

  async function populateInventory() {
    const newSeed: Plant = await getRandomSeed()
    // inv.push(newSeed)
    setInv((prevInv) => [...prevInv, newSeed])
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      populateInventory()
    }, 5000)
    // ^ change timer to fit game mechanics
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="header-wrapper">
      <h1>More Trees Please!</h1>
      <p>
        Look forth! An empty land, a barren land. Let us regrow the native
        forest! May this land, green and lush, be a stage befitting birdsong,
        and let this treasure be carried yonder.
      </p>
      Seeds:
      {inv.map((item, i) => (
        <span key={i}>
          {' '}
          {item.name} ({item.region})|{' '}
        </span>
      ))}
      <SeedPlant plants={inv}/>
    </div>
  )
}
export default Header
