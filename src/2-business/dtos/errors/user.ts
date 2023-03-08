import { type AppError } from '@shared/utils/error'

export const FailedToCreateUserError = (stack: string): AppError => ({
  code: 'USER-001',
  message: 'Failed to create user',
  status: 500,
  stack
})

export const UserAlreadyExists = (stack: string): AppError => ({
  code: 'USER-002',
  message: 'User Already Exists',
  status: 400,
  stack
})
