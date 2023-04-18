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

export const WrongCredentials = (stack: string): AppError => ({
  code: 'USER-003',
  message: 'Email or password is wrong',
  status: 400,
  stack
})

export const FailedToLoginError = (stack: string): AppError => ({
  code: 'USER-004',
  message: 'Failed to login',
  status: 500,
  stack
})
