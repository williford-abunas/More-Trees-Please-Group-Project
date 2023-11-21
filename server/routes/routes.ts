import express from 'express'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {})

//Location GETS

router.get('/:region', async (req, res) => {
  const region = req.params.region
  try {
    const allBirds = await db.getBirds()
    const regionTrees = await db.getPlants(region)
    res.json({allBirds, regionTrees})
    // res.json(regionTrees)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `This isn't working!` })
  }
})
export default router
