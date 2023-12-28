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
      <div className="pageTitle">
        {/* <button onClick={handleClickNav}> */}
        <h1>More Trees Please!</h1>
        {/* </button> */}
      </div>
      <Bird />
      <Wrapper seeds={inv} />
    </div>
  )
}
export default Header
