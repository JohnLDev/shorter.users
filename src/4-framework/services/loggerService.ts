import { type ILoggerService } from '@business/services/iLoggerService'

export class LoggerService implements ILoggerService {
  public info(...message: any): void {
    console.log(...message)
  }

  public error(...message: any): void {
    console.log(...message)
  }
}
