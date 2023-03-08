import { type IHashService } from '@business/services/iHashService'
import { createHash } from 'node:crypto'

export class HashService implements IHashService {
  private readonly algorithm = 'sha256'
  public async hash(value: string): Promise<string> {
    return createHash(this.algorithm).update(value).digest('hex')
  }

  public async compare(value: string, hash: string): Promise<boolean> {
    return createHash(this.algorithm).update(value).digest('hex') === hash
  }
}
