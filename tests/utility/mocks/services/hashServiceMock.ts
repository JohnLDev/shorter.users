import { type IHashService } from '@business/services/iHashService'

export const hashServiceMock: jest.Mocked<IHashService> = {
  compare: jest.fn().mockResolvedValue(true),
  hash: jest.fn().mockResolvedValue('hashedPassword')
}
