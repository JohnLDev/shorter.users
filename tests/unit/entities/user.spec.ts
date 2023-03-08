import { UserEntity } from '@domain/entities/user'

describe('UserEntity', () => {
  const userInput = {
    email: 'email@mail.com',
    name: 'John Doe',
    password: '123456',
    phone: '123456789',
    documentNumber: '0123456789'
  }
  it('Should be able to create a user', () => {
    const user = new UserEntity(userInput)

    expect(user).toBeInstanceOf(UserEntity)
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('createdAt')
    expect(user).toHaveProperty('updatedAt')
  })

  it('Should be able to update a user', () => {
    const user = new UserEntity({ ...userInput, id: '123', createdAt: new Date(), updatedAt: new Date() })
    const updateDate = {
      email: 'updated@mail.com',
      documentNumber: '9876543210',
      name: 'John Doe Updated',
      phone: '987654321'
    }

    user.update(updateDate)

    expect(user).toHaveProperty('email', updateDate.email)
    expect(user).toHaveProperty('documentNumber', updateDate.documentNumber)
    expect(user).toHaveProperty('name', updateDate.name)
    expect(user).toHaveProperty('phone', updateDate.phone)
    expect(user).toHaveProperty('id', '123')
  })
})
