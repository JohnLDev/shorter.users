interface IAppError {
  code: string
  message: string
  stack: string
  status?: number
}

export class AppError implements IAppError {
  code: string
  message: string
  stack: string
  status?: number

  constructor({ status = 400, ...props }: IAppError) {
    this.code = props.code
    this.message = props.message
    this.stack = `${process.env.MS_NAME ?? 'Local'}#${props.stack}`
    this.status = status
  }
}
