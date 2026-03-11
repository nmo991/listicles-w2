import express from 'express'
import './config/dotenv.js'
import path from 'path'
import { fileURLToPath } from 'url'
import hustlesRouter from './routes/hustles.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static('./public'))

app.use('/hustles', hustlesRouter)

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>')
})

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
