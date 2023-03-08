import { type IUserEntity } from '@domain/entities/user'

export const fakeUserEntity: IUserEntity = {
  id: '12345678910',
  name: 'John Doe',
  email: 'mail@mail.com',
  password: '12345678910',
  documentNumber: '12345678910',
  phone: '12345678910',
  createdAt: new Date(),
  updatedAt: new Date()
}
