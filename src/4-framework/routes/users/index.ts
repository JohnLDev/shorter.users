import { createUserHandler } from '@framework/handlers/users/createUserHandler'
import { loginHandler } from '@framework/handlers/users/loginHandler'
import { Router } from 'express'

const router = Router()

router.post('/users', createUserHandler)
router.post('/login', loginHandler)

export { router as userRoutes }
