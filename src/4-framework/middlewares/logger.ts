import { isDev } from '@shared/utils/environment'
import { type NextFunction, type Request, type Response } from 'express'

export const loggerMiddleware = function (req: Request, _res: Response, next: NextFunction): void {
  if (isDev()) console.log(`[${req.method}]:${req.path}`)
  next()
}
