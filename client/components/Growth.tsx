import { getAllPlantedSeeds, makeMature } from '../api'

//compare timestamps to current time
export async function checkGrowth() {
  const seedArray = await getAllPlantedSeeds()
  console.log('this function is being called')

  seedArray.forEach((seed) => {
    const currentTime = new Date().getTime()
    const timeDifference = currentTime - seed.timestamp

    if (timeDifference >= 15000) {
      seed.isMature = true
      makeMature(seed)
      console.log('this function is being called in the if statement')
    }
  })
}
