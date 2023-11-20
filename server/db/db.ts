import connection from './connection'
import { Bird } from '../../models/birdsModel'
import { Plant } from '../../models/plantsModel'

export async function getPlants(): Promise<Plant[]> {
  return await connection('plants').select('*')
}

export async function getBirds(): Promise<Bird[]> {
  return await connection('birds').select('*')
}
