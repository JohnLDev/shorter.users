import { type InputVerifyExistsUserRepositoryDTO, type IUserRepository } from '@business/repositories/iUserRepository'
import { type IUserEntity } from '@domain/entities/user'
import { AppDataSource } from '@framework/database'
import { UserModel } from '@framework/models/users/userModel'

export class UserRepository implements IUserRepository {
  constructor(private readonly repository = AppDataSource.getRepository(UserModel)) {}

  async create(data: IUserEntity): Promise<IUserEntity> {
    const user = this.repository.create(data)
    await this.repository.save(user)
    return user
  }

  async verifyExists({ documentNumber, email }: InputVerifyExistsUserRepositoryDTO): Promise<boolean> {
    return !!(await this.repository.findOneBy([{ email }, { documentNumber }]))
  }
}
