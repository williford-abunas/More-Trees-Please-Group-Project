import express from 'express'
import { JwtRequest } from '../auth0'

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allBirds = await db.getAllBirds()
    console.log('route working')
    res.json(allBirds)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `This isn't working!` })
  }
})

//Location GETS

router.get('/:region', async (req, res) => {
  const region = req.params.region
  try {
    const allBirds = await db.getAllBirds()
    const regionTrees = await db.getAllNativePlants()
    res.json(allBirds)
    // res.json(regionTrees)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `This isn't working!` })
  }
})

export default router
