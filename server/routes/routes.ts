import express from 'express'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/db.ts'

const router = express.Router()

// A public endpoint that anyone can access
// GET /api/v1/fruits
router.get('/', (req, res) => {})

export default router
