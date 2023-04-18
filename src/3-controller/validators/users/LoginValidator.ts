import { type InputLoginUseCaseDto } from '@business/dtos/useCases/user/loginDTO'
import { Input } from '@framework/utility/input'
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class InputLoginUseCase extends Input implements InputLoginUseCaseDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string
}
