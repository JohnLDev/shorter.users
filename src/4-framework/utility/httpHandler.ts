import { AppError } from '@shared/utils/error'
import { type Request, type Response } from 'express'

interface HttpResponse {
  result: any
  error: boolean
}

type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500

interface HandlerResult {
  status?: HttpStatus
  result?: any
}

export async function httpHandler(
  req: Request,
  res: Response,
  handler: () => Promise<HandlerResult>
): Promise<Response<HttpResponse>> {
  try {
    const { status, result } = await handler()
    console.log(result)

    return res.status(status ?? 200).json({ error: false, result })
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.status).json({ error: true, result: error })
    }
    return res.status(500).json({ error: true, result: 'Internal server error' })
  }
}
