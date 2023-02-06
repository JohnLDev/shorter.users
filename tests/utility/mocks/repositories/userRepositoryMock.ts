import { type IUserRepository } from '@business/repositories/iUserRepository'
import { fakeUserEntity } from '@tests/utility/fakes/user'

export const userRepositoryMock: jest.Mocked<IUserRepository> = {
  create: jest.fn().mockResolvedValue(fakeUserEntity),
  verifyExists: jest.fn().mockResolvedValue(false)
}
