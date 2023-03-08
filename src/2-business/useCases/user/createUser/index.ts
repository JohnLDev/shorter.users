import {
  type OutputCreateUserUseCaseDTO,
  type InputCreateUserUseCaseDTO
} from '@business/dtos/useCases/user/createUserDTO'
import { type IUserRepository } from '@business/repositories/iUserRepository'
import { type IHashService } from '@business/services/iHashService'
import { type ILoggerService } from '@business/services/iLoggerService'
import { UserEntity } from '@domain/entities/user'
import { Result } from '@shared/utils/result'
import { FailedToCreateUserError, UserAlreadyExists } from '@business/dtos/errors/user'

export class CreateUserUseCase {
  constructor(
    private readonly userRepositorty: IUserRepository,
    private readonly hashService: IHashService,
    private readonly loggerService: ILoggerService
  ) {}

  async exec(input: InputCreateUserUseCaseDTO): Promise<OutputCreateUserUseCaseDTO> {
    try {
      const userExists = await this.userRepositorty.verifyExists({
        documentNumber: input.documentNumber,
        email: input.email
      })

      if (userExists) {
        this.loggerService.info({ userExists })
        return Result.fail(UserAlreadyExists(this.constructor.name))
      }

      input.password = await this.hashService.hash(input.password)

      const user = new UserEntity(input)

      const userSaved = await this.userRepositorty.create(user)
      this.loggerService.info({ userSaved })

      return Result.ok<UserEntity>(user)
    } catch (error) {
      this.loggerService.error({ error })
      return Result.fail(FailedToCreateUserError(this.constructor.name))
    }
  }
}
