import connection from './connection'
import { Bird } from '../../models/birdsModel'
import { Plant } from '../../models/plantsModel'

export async function getAllNativePlants(): Promise<Plant[]> {
  return await connection('plants').select('*').where({ isNative: true })
}

export async function getAllNativePlantsByRegion(id): Promise<Plant[]> {
  return await connection('plants').where('region', id)
  // .groupBy('region')
}

export async function getAllBirds(): Promise<Bird[]> {
  return await connection('birds').select('*')
}

export async function getBirdById(): Promise<Bird | undefined> {
  const randomId = Math.floor(Math.random() * 15) + 1
  return await connection('birds').select('*').where({ id: randomId }).first()
}

export async function getInvasivePlants(): Promise<Plant[]> {
  return await connection('plants').select('*').where({ isNative: false })
}
