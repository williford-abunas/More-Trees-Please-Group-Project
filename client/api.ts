import request from 'superagent'

import { Bird } from '../models/birdsModel'
import { Plant } from '../models/plantsModel'

const rootUrl = '/api/v1'

//Plants API
export async function getNativePlants() {
  const response = await request.get(rootUrl + '/plants')
  return response.body as Plant[]
}

export async function getAllPlants() {
  const response = await request.get(rootUrl + '/allPlants')
  return response.body as Plant[]
}

// Birds API
export async function getAllBirds() {
  const response = await request.get(rootUrl + '/allBirds')
  return response.body as Bird[]
}

export async function addToStorage(plantData) {
  const response = await request.post(rootUrl + '/addPlants').send(plantData)
  console.log('Api client response.body= ', response.body)
  return response.body
}

export async function getPlantsByRegion(region: string) {
  const res = await request.get(rootUrl + `/getPlantsByRegion/images/${region}`)
  return res.body
}

export async function getAllPlantedSeeds() {
  const response = await request.get(rootUrl + '/allPlantedSeeds')
  return response.body
}

export async function makeMature(plantedSeed) {
  const response = await request
    .patch(rootUrl + `/updatePlantedSeed`)
    .send(plantedSeed)
  return response.body
}
