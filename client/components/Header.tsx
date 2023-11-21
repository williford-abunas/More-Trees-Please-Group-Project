import { useEffect, useState } from 'react'
import * as api from '../api'

const Header = () => {
  const [inv, setInv] = useState([{ id: 1 }])

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  function getRandomSeed() {
    // const seeds = api.getPlants()
    // use the above line once API client functions are created

    const seeds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    // the above line is just sample data for testing purposes
    const randomSeed = seeds[getRandomNumber(seeds.length)]
    return randomSeed
  }

  function populateInventory() {
    const newSeed = getRandomSeed()
    // inv.push(newSeed)
    setInv((prevInv) => [...prevInv, newSeed])
    console.log(`Received a new seed: ${newSeed.id}`)
    console.log(inv)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      populateInventory()
    }, 2000)
    // ^ change timer to fit game mechanics
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="header-wrapper">
      <h1>More Trees Please!</h1>
      <p>Look! An empty barren land, lets regrow the native forrest!</p>
      Seed:
      {inv.map((item) => (
        <span key={item.id}> {item.id}</span>
      ))}
    </div>
  )
}
export default Header
