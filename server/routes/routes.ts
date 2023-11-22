import express from 'express'
import { JwtRequest } from '../auth0'

import * as db from '../db/db'

const router = express.Router()

//Plant routes, getAllNativePlants may be redundant

router.get('/plants', async (req, res) => {
  try {
    const allNativePlants = await db.getAllNativePlants()
    res.json(allNativePlants)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `getAllNativePlants isn't working!` })
  }
})

router.get('/allPlants', async (req, res) => {
  try {
    const allPlants = await db.getAllPlants()
    res.json(allPlants)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `getAllPlants isn't working!` })
  }
})

router.get('/allBirds', async (req, res) => {
  try {
    const allPlants = await db.getAllBirds()
    res.json(allPlants)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `getAllBirds isn't working!` })
  }
})

router.post('/addPlants', async (req, res) => {
  const plantData = req.body
  try {
    const addedPlants = await db.addPlants(plantData)
    res.json(addedPlants)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Add Plants is not working` })
  }
})

export default router
