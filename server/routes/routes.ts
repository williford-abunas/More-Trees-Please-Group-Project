import express from 'express'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {})

//Location GETS

router.get('/:location', async (req, res) => {
  const location = req.params.location
  try {
    const allBirds = await db.getBirds()
    const regionTrees = await db.getPlants(location)
    res.json(allBirds, regionTrees)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `This isn't working!` })
  }
})
export default router
