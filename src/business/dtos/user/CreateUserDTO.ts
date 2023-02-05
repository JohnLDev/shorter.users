import { type IUserEntity, type IUserEntityInput } from '@domain/entities/user'

export type InputCreateUserUseCaseDTO = Required<Omit<IUserEntityInput, 'id'>>

export type OutputCreateUserUseCaseDTO = IUserEntity | Error
