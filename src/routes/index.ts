import express from 'express'
import { userRoutes } from './user.route'

const router = express()

router.use(userRoutes)

export { router }