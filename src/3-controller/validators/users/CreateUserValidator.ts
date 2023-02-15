import { type InputCreateUserUseCaseDTO } from '@business/dtos/useCases/user/createUserDTO'
import { Input } from '@framework/utility/input'
import { IsEmail, IsNotEmpty, IsNumberString, IsString, MinLength } from 'class-validator'

export class InputCreateUser extends Input implements InputCreateUserUseCaseDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNumberString()
  @IsNotEmpty()
  phone: string

  @IsNumberString()
  @IsNotEmpty()
  documentNumber: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string
}
