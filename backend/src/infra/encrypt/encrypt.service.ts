import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptService {
  async generateHash(str: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(str, saltOrRounds);
  }

  async compare(str: string, hash: string): Promise<boolean> {
    return bcrypt.compare(str, hash);
  }
}
