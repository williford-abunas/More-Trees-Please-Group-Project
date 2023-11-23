import connection from './connection'
import { Bird } from '../../models/birdsModel'
import { Plant } from '../../models/plantsModel'

// Native Plants
export async function getAllNativePlants(): Promise<Plant[]> {
  return await connection('plants').select().where({ isNative: true })
}
// All Plants
export async function getAllPlants(): Promise<Plant[]> {
  return await connection('plants').select()
}
// All Birds - Birds Are Global
export async function getAllBirds(): Promise<Bird[]> {
  return await connection('birds').select()
}

export async function addPlants(plantData: any) {
  return await connection('gameState').insert(plantData).returning('*')
}
