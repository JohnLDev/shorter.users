import { type IUserUpdateInput, type IUserEntity } from '@domain/entities/user'
import { type Result } from '@shared/utils/result'

export type InputCreateUserUseCaseDTO = Required<IUserUpdateInput & { password: string }>

export type OutputCreateUserUseCaseDTO = Result<IUserEntity>
