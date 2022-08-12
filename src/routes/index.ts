import express from 'express'
import { userRoutes } from './user.route'

const router = express()

router.use('/users', userRoutes)

export { router }