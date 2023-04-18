import { msName } from '@framework/config/domain'
import { loggerMiddleware } from '@framework/middlewares/logger'
import { userRoutes } from '@framework/routes/users'
import express from 'express'

const app = express()
app.use(express.json())
app.use(loggerMiddleware)

app.use(`/${msName}/v1`, userRoutes)

export { app }
