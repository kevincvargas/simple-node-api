import { User } from './../../entities/user.entity';
import { randomUUID } from "crypto"
import { users } from "../../repositories/user.repository"

export class CreateUserService {
  async execute(name: string, age: number) {
    const user: User = {
      id: randomUUID(),
      name: name,
      age: age
    }

    users.push(user)

    return user
  }
}