import { type InputCreateUserUseCaseDTO } from '@business/dtos/useCases/user/createUserDTO'
import { CreateUserUseCase } from '@business/useCases/user/createUser'
import { AppError } from '@shared/utils/error'
import { userRepositoryMock } from '@tests/utility/mocks/repositories/userRepositoryMock'
import { hashServiceMock } from '@tests/utility/mocks/services/hashServiceMock'
import { loggerServiceMock } from '@tests/utility/mocks/services/loggerServiceMock'

describe('Create user use case', () => {
  const useCase = new CreateUserUseCase(userRepositoryMock, hashServiceMock, loggerServiceMock)
  const input: InputCreateUserUseCaseDTO = {
    name: 'John Doe',
    email: 'mail@mail.com',
    documentNumber: '12345678910',
    password: '12345678910',
    phone: '12345678910'
  }

  it('should be able to create an user', async () => {
    const result = await useCase.exec(input)
    expect(result.isOk()).toBe(true)
    expect(result.value).toHaveProperty('id')
  })

  it('should return an error if user already exist', async () => {
    userRepositoryMock.verifyExists.mockResolvedValueOnce(true)

    const result = await useCase.exec(input)
    expect(result.isFail()).toBe(true)
    expect(result.value).toBeInstanceOf(AppError)
  })

  it('should return an error if hash service fails', async () => {
    hashServiceMock.hash.mockRejectedValueOnce(new Error('Hash service error'))

    const result = await useCase.exec(input)
    expect(result.isFail()).toBe(true)
    expect(result.value).toBeInstanceOf(AppError)
  })
})
