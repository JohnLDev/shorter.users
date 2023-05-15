import { FailedToLoginError, WrongCredentials } from '@business/dtos/errors/user'
import { type OutputLoginUseCaseDto, type InputLoginUseCaseDto } from '@business/dtos/useCases/user/loginDTO'
import { type IUserRepository } from '@business/repositories/iUserRepository'
import { type IAuthService } from '@business/services/iAuthService'
import { type IHashService } from '@business/services/iHashService'
import { type ILoggerService } from '@business/services/iLoggerService'
import { UserEntity } from '@domain/entities/user'
import { Result } from '@shared/utils/result'

export class LoginUseCase {
  constructor(
    private readonly userRepositorty: IUserRepository,
    private readonly hashService: IHashService,
    private readonly authService: IAuthService,
    private readonly loggerService: ILoggerService
  ) {}

  async exec(input: InputLoginUseCaseDto): Promise<OutputLoginUseCaseDto> {
    try {
      const user = await this.userRepositorty.findByEmail(input.email)
      if (!user) {
        return Result.fail(WrongCredentials(this.constructor.name))
      }
      this.loggerService.info({ user })

      const passwordMatch = await this.hashService.compare(input.password, user.password)
      if (!passwordMatch) {
        return Result.fail(WrongCredentials(this.constructor.name))
      }

      const token = this.authService.sign({ id: user.id, email: user.email, name: user.name })
      this.loggerService.info({ token })

      const result = { token, user: UserEntity.safeProps(user) }
      this.loggerService.info({ result })
      return Result.ok(result)
    } catch (error) {
      this.loggerService.error(error)
      return Result.fail(FailedToLoginError(this.constructor.name))
    }
  }
}
