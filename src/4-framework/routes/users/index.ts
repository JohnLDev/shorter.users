import { createUserHandler } from '@framework/handlers/users/createUserHandler'
import { Router } from 'express'

const router = Router()

router.post('/users', createUserHandler)

export { router as userRoutes }
