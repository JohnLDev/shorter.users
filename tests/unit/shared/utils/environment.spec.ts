import { isDev, isProd } from '@shared/utils/environment'

describe('Environment utils', () => {
  const env = process.env.NODE_ENV
  beforeEach(() => {
    process.env.NODE_ENV = env
  })

  it('should return true if the environment is development', () => {
    process.env.NODE_ENV = 'development'
    expect(isDev()).toBe(true)
    expect(isProd()).toBeFalsy()
  })

  it('should return true if the environment is production', () => {
    process.env.NODE_ENV = 'production'
    expect(isProd()).toBe(true)
    expect(isDev()).toBeFalsy()
  })
})
