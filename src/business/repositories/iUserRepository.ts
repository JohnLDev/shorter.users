import { type IUserEntity, type UserEntity } from '../../domain/entities/user'

export interface IUserRepository {
  create: (user: UserEntity) => Promise<IUserEntity>
}
