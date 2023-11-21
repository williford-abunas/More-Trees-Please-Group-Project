import request from 'superagent'

import { Bird } from '../models/birdsModel'
import { Plant } from '../models/plantsModel'

const rootUrl = '/api/v1'

//bird api

// export async function getBirds() {
//   const response = await request.get(rootUrl + '/birds')
//   console.log('route working')
//   return response.body as Bird[]
// }

//Plants api

//possibly redundant
export async function getNativePlants() {
  const response = await request.get(rootUrl + '/plants')
  return response.body as Plant[]
}

export async function getAllPlants() {
  const response = await request.get(rootUrl + '/allPlants')
  return response.body as Plant[]
}
