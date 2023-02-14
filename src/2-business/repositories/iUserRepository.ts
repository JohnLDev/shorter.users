import { type IUserEntity, type UserEntity } from '@domain/entities/user'

interface InputVerifyExistsUserRepositoryDTO {
  email?: string
  documentNumber?: string
}
export interface IUserRepository {
  create: (user: UserEntity) => Promise<IUserEntity>
  verifyExists: (email: InputVerifyExistsUserRepositoryDTO) => Promise<boolean>
}
