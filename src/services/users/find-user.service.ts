import { users } from "../../repositories/user.repository"

export class FindUserService {
  async execute(id: string) {
    const user = users.find(item => item.id == id)
    return user
  }
}