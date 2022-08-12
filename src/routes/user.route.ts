import express from 'express'
import { UserController } from '../controllers/user.controller'


const userRoutes = express()
userRoutes.post('/users', async (request, response) => {
  const userController = new UserController()
  const user = await userController.create(request, response)

  return user
})

userRoutes.get('/users', async (request, response) => {
  const userController = new UserController()
  const user = await userController.get(request, response)

  return user
})

userRoutes.get('/users/:id', async (request, response) => {
  const userController = new UserController()
  const user = await userController.find(request.params.id, request, response)

  return user
})

export { userRoutes }