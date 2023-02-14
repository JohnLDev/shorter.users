import { InputCreateUser } from '@controller/validators/users/CreateUserValidator'
import { httpHandler } from '@framework/utility/httpHandler'
import { type Request, type Response } from 'express'

async function handler(req: Request, res: Response): Promise<Response> {
  return await httpHandler(req, res, async () => {
    const { username, password } = req.body
    console.log(req.body)
    // const user = createUser(username, password)
    const input = new InputCreateUser(req.body)
    console.log(input)

    return { user: { username, password }, status: 201 }
  })
}

export { handler as createUserHandler }
