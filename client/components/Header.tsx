import { useEffect, useState } from 'react'
import * as api from '../api'
import { Plant } from '../../models/plantsModel'
import { getNativePlants } from '../api'
import SeedPlant from './SeedPlant'
import CentralZone from './CentralZone'
import Wrapper from './Wrapper'
import Bird from './Bird'
import { EventLogger } from './EventLogger'

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
    // console.log(seeds)

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
    }, 8000)
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
      <EventLogger />
      Seeds:
      {inv.map((item, i) => (
        <span key={i}>
          {' '}
          {item?.name} ({item?.region})|{' '}
        </span>
      ))}
      <Bird />
      <Wrapper seeds={inv} />
    </div>
  )
}
export default Header
