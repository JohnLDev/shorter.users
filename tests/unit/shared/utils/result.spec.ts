import { AppError } from '@shared/utils/error'
import { Result } from '@shared/utils/result'

describe('Result utils', () => {
  const env = process.env

  beforeEach(() => {
    process.env = env
  })

  it('should return true if the result is ok', () => {
    const res = Result.ok(10)
    expect(res.isOk()).toBe(true)
    expect(res.isFail()).toBeFalsy()
  })

  it('should return true if the result is fail', () => {
    const res = Result.fail({ code: 'aa', message: 'bb', stack: 'cc' })
    expect(res.isFail()).toBe(true)
    expect(res.isOk()).toBeFalsy()
  })

  it('should return the value of the result', () => {
    process.env.MS_NAME = 'test'
    const error: AppError = { code: 'aa', message: 'bb', stack: 'cc', status: 400 }
    const res = Result.fail(error)
    expect(res.value).toStrictEqual(new AppError(error))

    const res2 = Result.ok(10)
    expect(res2.value).toBe(10)
  })
})
