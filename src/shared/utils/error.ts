export interface IAppError {
  code: string
  message: string
  stack: string
  status?: number
  details?: any
}

export class AppError implements IAppError {
  code: string
  message: string
  stack: string
  status: number
  details?: any

  constructor({ status = 400, ...props }: IAppError) {
    this.code = props.code
    this.message = props.message
    this.details = props.details
    this.stack = `${process.env.MS_NAME ?? 'Local'}#${props.stack}`
    this.status = status
  }
}
