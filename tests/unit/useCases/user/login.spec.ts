import { FailedToLoginError, WrongCredentials } from '@business/dtos/errors/user'
import { type InputLoginUseCaseDto } from '@business/dtos/useCases/user/loginDTO'
import { LoginUseCase } from '@business/useCases/user/login'
import { Result } from '@shared/utils/result'
import { userRepositoryMock } from '@tests/utility/mocks/repositories/userRepositoryMock'
import { authServiceMock } from '@tests/utility/mocks/services/authServiceMock'
import { hashServiceMock } from '@tests/utility/mocks/services/hashServiceMock'
import { loggerServiceMock } from '@tests/utility/mocks/services/loggerServiceMock'

describe('login use case', () => {
  const useCase = new LoginUseCase(userRepositoryMock, hashServiceMock, authServiceMock, loggerServiceMock)
  const input: InputLoginUseCaseDto = {
    email: 'mail@mail.com',
    password: '12345678910'
  }

  it('should be able to sign in in with right credentials', async () => {
    const result = await useCase.exec(input)
    expect(result.isOk()).toBe(true)
    expect(result.value).toHaveProperty('token')
    expect(result.value).toHaveProperty('user')
  })

  it('should be not able to sign in with a non existing user', async () => {
    userRepositoryMock.findByEmail.mockResolvedValueOnce(null)
    const result = await useCase.exec(input)
    expect(result.isFail()).toBe(true)
    expect(result.value).toStrictEqual(Result.fail(WrongCredentials(LoginUseCase.name)).value)
  })

  it('should be not able to sign in with wrong password', async () => {
    hashServiceMock.compare.mockResolvedValueOnce(false)
    const result = await useCase.exec(input)
    expect(result.isFail()).toBe(true)
    expect(result.value).toStrictEqual(Result.fail(WrongCredentials(LoginUseCase.name)).value)
  })

  it('should be not able to sign in with a non expected error', async () => {
    hashServiceMock.compare.mockRejectedValueOnce(new Error('Hash service error'))
    const result = await useCase.exec(input)
    expect(result.isFail()).toBe(true)
    expect(result.value).toStrictEqual(Result.fail(FailedToLoginError(LoginUseCase.name)).value)
  })
})
