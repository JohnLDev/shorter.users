import { type IUserEntity, type UserEntity } from '@domain/entities/user'

export interface InputVerifyExistsUserRepositoryDTO {
  email?: string
  documentNumber?: string
}
export interface IUserRepository {
  create: (user: UserEntity) => Promise<IUserEntity>
  verifyExists: (data: InputVerifyExistsUserRepositoryDTO) => Promise<boolean>
}
