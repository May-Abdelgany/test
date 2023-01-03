import express from 'express'
import env from 'dotenv'
env.config()
const app = express()
const port = process.env.port
app.use(express.json())
app.listen(port, () => console.log(`app listening on port ${port}!`))