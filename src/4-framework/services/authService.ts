import { type IAuthService } from '@business/services/iAuthService'
import jwt from 'jsonwebtoken'

export class AuthService implements IAuthService {
  public sign(payload: any): string {
    const secret = process.env.JWT_SECRET ?? ''
    const expiresIn = process.env.JWT_EXPIRES_IN ?? 60 * 15 // 15 minutes

    const token = jwt.sign(payload, secret, { issuer: process.env.JWT_KEY, expiresIn })
    return token
  }
}
