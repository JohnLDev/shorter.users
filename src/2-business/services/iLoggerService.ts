export interface ILoggerService {
  info: (...message: any) => void
  error: (...message: any) => void
}
