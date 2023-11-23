export default function Growth() {
  //get data from database - gameState

  //assign fullyGrown propery to relevant plant
  function fullyGrown(seed) {
    ;(seed.radius = 100), (seed.radius = 100)
  }

  //compare timestamps to current time
  function checkAndScheduleGrowth(seed) {
    const currentTime = new Date().getTime()
    const timeDifference = currentTime - seed.timestamp

    if (timeDifference >= 50000) {
      //patch
    }
    // else {
    //   setTimeout(fullyGrown, timeDifference + 50000);
    // }
  }

  checkAndScheduleGrowth(ourSeed)
}
