import { type IAuthService } from '@business/services/iAuthService'

export const authServiceMock: IAuthService = {
  sign: jest.fn().mockReturnValue('token')
}
