import { type ILoggerService } from '@business/services/iLoggerService'

export const loggerServiceMock: jest.Mocked<ILoggerService> = {
  info: jest.fn(),
  error: jest.fn()
}
