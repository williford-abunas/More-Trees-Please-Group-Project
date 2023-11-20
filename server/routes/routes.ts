import express from 'express'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    // const allBirds = await db.getAllBirds()
    // Placeholder DB Functions, waiting DB Functions
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `This isn't working!` })
  }
})

//Location GETS

router.get('/:location', async (req, res) => {
  const location = req.params.location
  try {
    // const loctionBirds = await db.getBirdsByLocation(id)
    // Placeholder DB Functions, waiting DB Functions
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `This isn't working!` })
  }
})
export default router
