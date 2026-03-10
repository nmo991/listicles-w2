import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hustles from '../data/hustles.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(hustles)
})

router.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/hustle.html'))
})



export default router