import { LoginUseCase } from '@business/useCases/user/login'
import { InputLoginUseCase } from '@controller/validators/users/LoginValidator'
import { UserRepository } from '@framework/repositories/userRepository'
import { AuthService } from '@framework/services/authService'
import { HashService } from '@framework/services/hashService'
import { LoggerService } from '@framework/services/loggerService'
import { httpHandler } from '@framework/utility/httpHandler'
import { type Request, type Response } from 'express'

async function handler(req: Request, res: Response): Promise<Response> {
  return await httpHandler(req, res, async (): Promise<any> => {
    const input = new InputLoginUseCase(req.body)
    const useCase = new LoginUseCase(new UserRepository(), new HashService(), new AuthService(), new LoggerService())
    const result = await useCase.exec(input)
    console.log(result.value)

    return { result: result.value, status: result.isFail() ? result.value.status : 200 }
  })
}

export { handler as loginHandler }
