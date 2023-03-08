import { type IUserEntity } from '@domain/entities/user'
import { Column, CreateDateColumn, Entity, PrimaryColumn, Unique, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class UserModel implements IUserEntity {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  @Unique(['email'])
  email: string

  @Column()
  password: string

  @Column()
  @Unique(['documentNumber'])
  documentNumber: string

  @Column()
  phone: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
