import { createUserHandler } from '@framework/handlers/users/createUserHandler'
import { Router } from 'express'

const router = Router()

router.post('/', createUserHandler)

export { router as userRoutes }
