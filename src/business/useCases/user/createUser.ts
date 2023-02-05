import { type OutputCreateUserUseCaseDTO, type InputCreateUserUseCaseDTO } from '@business/dtos/user/CreateUserDTO'
import { type IUserRepository } from '@business/repositories/iUserRepository'
import { type IHashService } from '@business/services/iHashService'
import { type ILoggerService } from '@business/services/iLoggerService'
import { UserEntity } from '@domain/entities/user'

export class CreateUserUseCase {
  constructor(
    private readonly userRepositorty: IUserRepository,
    private readonly hashService: IHashService,
    private readonly loggerService: ILoggerService
  ) {}

  async exec(input: InputCreateUserUseCaseDTO): Promise<OutputCreateUserUseCaseDTO> {
    try {
      input.password = await this.hashService.hash(input.password)

      const user = new UserEntity(input)

      const userSaved = await this.userRepositorty.create(user)
      this.loggerService.info({ userSaved })

      return user
    } catch (error) {
      console.log(error)
      throw new Error('Error creating user')
    }
  }
}
