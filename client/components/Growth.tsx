import { getAllPlantedSeeds, makeMature } from '../api'

//compare timestamps to current time
export async function checkGrowth() {
  const seedArray = await getAllPlantedSeeds()
  // console.log('this function is being called')

  seedArray.forEach((seed) => {
    const currentTime = new Date().getTime()
    // console.log('this is the current time:' + currentTime)
    // console.log('this is the seeds time: ' + seed.timestamp)
    const timeDifference = currentTime - seed.timestamp

    if (timeDifference >= 1000) {
      seed.isMature = true
      makeMature(seed)
      // console.log('this function is being called in the if statement')
    }
  })
}
