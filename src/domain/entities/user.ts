import { randomUUID } from 'node:crypto'

export interface IUserEntity {
  id: string
  name: string
  email: string
  phone: string
  documentNumber: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export type IUserUpdateInput = Omit<IUserEntity, 'id' | 'createdAt' | 'updatedAt' | 'password'>

export interface IUserEntityInput extends IUserUpdateInput {
  id?: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

export class UserEntity implements IUserEntity {
  constructor(props: IUserEntityInput) {
    const id = props.id ?? randomUUID()
    const createdAt = props.createdAt ?? new Date()
    const updatedAt = props.updatedAt ?? new Date()

    this.id = id
    this.name = props.name
    this.email = props.email
    this.phone = props.phone
    this.documentNumber = props.documentNumber
    this.password = props.password
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  id: string
  name: string
  email: string
  phone: string
  documentNumber: string
  password: string
  createdAt: Date
  updatedAt: Date

  public update(props: Partial<IUserUpdateInput>): void {
    const updatedAt = new Date()
    Object.assign(this, { ...props, updatedAt })
  }
}
