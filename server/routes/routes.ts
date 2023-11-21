import express from 'express'
import { JwtRequest } from '../auth0'

import * as db from '../db/db'

const router = express.Router()

//Bird routes, not currently used

// router.get('/birds', async (req, res) => {
//   try {
//     const allBirds = await db.getAllBirds()
//     console.log('route working')
//     res.json(allBirds)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: `This isn't working!` })
//   }
// })

// router.get('/place/:region', async (req, res) => {
//   const region = req.params.region
//   try {
//     const allBirds = await db.getAllBirds()
//     const regionTrees = await db.getAllNativePlants()
//     res.json(allBirds)
//     // res.json(regionTrees)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: `This isn't working!` })
//   }
// })




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

export default router
