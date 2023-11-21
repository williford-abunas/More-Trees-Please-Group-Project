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
