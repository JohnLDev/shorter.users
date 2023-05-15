import { type ISafeUser } from '@domain/entities/user'
import { type Result } from '@shared/utils/result'

export interface InputLoginUseCaseDto {
  email: string
  password: string
}

interface OutputLoginUseCase {
  token: string
  user: ISafeUser
}

export type OutputLoginUseCaseDto = Result<OutputLoginUseCase>
