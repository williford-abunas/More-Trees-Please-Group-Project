import request from 'superagent'

import { Bird } from '../models/birdsModel'
import { Plant } from '../models/plantsModel'

const rootUrl = '/api/v1'

export async function getBirds() {
  const response = await request.get(rootUrl + '/birds')
  console.log('route working')
  return response.body as Bird[]
}

export async function getNativePlants() {
  const response = await request.get(rootUrl + '/plants')
  return response.body as Plant[]
}

// function logError(err: Error) {
//   console.log(err)
//   if (err.message === 'Username Taken') {
//     throw new Error('Username already taken - please choose another')
//   } else if (err.message === 'Forbidden') {
//     throw new Error(
//       'Only the user who added the fruit may update and delete it'
//     )
//   } else {
//     console.error('Error consuming the API (in client/api.js):', err.message)
//     throw err
//   }
// }
