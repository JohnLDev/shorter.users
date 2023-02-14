import { AppError, type IAppError } from '@shared/utils/error'

interface ResultInput<T> {
  value: T | AppError
}

class ResultSuccess<T> {
  public readonly value: T
  constructor(value: T) {
    this.value = value
  }
}

class ResultFail {
  public readonly value: AppError
  constructor(value: AppError) {
    this.value = value
  }
}

export class Result<T = AppError> {
  constructor({ value }: ResultInput<T>) {
    this.result = value instanceof AppError ? new ResultFail(value) : new ResultSuccess(value)
  }

  private readonly result: ResultSuccess<T> | ResultFail

  static ok<T>(success: T): Result<T> {
    return new Result<T>({ value: success })
  }

  static fail<T = AppError>(error: IAppError): Result<T> {
    return new Result<T>({ value: new AppError(error) })
  }

  public isOk(): this is ResultSuccess<T> {
    return this.result instanceof ResultSuccess<T>
  }

  public isFail(): this is ResultFail {
    return this.result instanceof ResultFail
  }

  get value(): T | AppError {
    return this.result.value
  }
}
