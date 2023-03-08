import { CreateUserUseCase } from '@business/useCases/user/createUser'
import { InputCreateUser } from '@controller/validators/users/CreateUserValidator'
import { UserRepository } from '@framework/repositories/userRepository'
import { HashService } from '@framework/services/hashService'
import { LoggerService } from '@framework/services/loggerService'
import { httpHandler } from '@framework/utility/httpHandler'
import { type Request, type Response } from 'express'

async function handler(req: Request, res: Response): Promise<Response> {
  return await httpHandler(req, res, async (): Promise<any> => {
    const input = new InputCreateUser(req.body)
    const useCase = new CreateUserUseCase(new UserRepository(), new HashService(), new LoggerService())
    const result = await useCase.exec(input)

    return { result: result.value, status: result.isFail() ? result.value.status : 201 }
  })
}

export { handler as createUserHandler }
