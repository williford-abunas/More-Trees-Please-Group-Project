import { Bird } from '../../models/birdsModel'
import connection from './connection';
import getAllBirds from  '../db/db'

// Get a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Get a random bird from the database
  export async function getRandomBird(): Promise<Bird | null> {
    const birdsCount = await connection('birds').count().first();
  
    if (birdsCount && birdsCount.count > 0) {
      const randomIndex = getRandomInt(0, birdsCount.count - 1);
  
      const randomBird = await connection('birds')
        .select()
        .limit(1)
        .offset(randomIndex)
        .first();
  
      return randomBird as Bird;
    } else {
      return null; // No birds in the database
    }
  }