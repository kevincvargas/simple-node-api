import { users } from "../../repositories/user.repository"

export class GetUserService {
  async execute() {
    return users
  }
}