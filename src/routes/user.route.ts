import express from 'express'
import { UserController } from '../controllers/user.controller'

let controller: UserController
let userRoutes = express()

userRoutes.use(async (request, response, next) => {  
  controller = new UserController()
  next()
})

userRoutes.post('/', async (request, response) => {  
  return controller.create(request, response)  
})

userRoutes.get('/', async (request, response) => {  
  return controller.get(request, response)  
})

userRoutes.get('/:id', async (request, response) => {  
  return controller.find(request.params.id, request, response)
})

export { userRoutes }