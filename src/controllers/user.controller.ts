import { FindUserService } from './../services/users/find-user.service';
import { GetUserService } from './../services/users/get-user.service';
import { CreateUserService } from './../services/users/create-user.service';
import { Request, Response } from "express"

export class UserController {
  async create(request: Request, response: Response) {
    const service = new CreateUserService()
    const user = await service.execute(request.body.name, request.body.age)

    return response.send(user)
  }

  async get(request: Request, response: Response) {
    const service = new GetUserService()
    const result = await service.execute()

    return response.send(result)
  }

  async find(id: string, request: Request, response: Response) {
    const service = new FindUserService()
    const user = await service.execute(id)

    return response.send(user)
  }
}