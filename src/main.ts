import express, { Router } from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(Router())
app.use(router)
app.listen(8500, () => {
  console.log('Listening 8500')
})
