import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import router from './routes/routes'
//import your routes

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

//plant routes? bird routes?
server.use('/api/v1/birds', router)

server.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public/index.html'))
})

export default server
