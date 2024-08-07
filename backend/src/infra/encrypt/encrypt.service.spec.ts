import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { EncryptService } from './encrypt.service';

describe('EncryptService', () => {
  let sut: EncryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncryptService],
    }).compile();

    sut = module.get<EncryptService>(EncryptService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should generate a hash', async () => {
    const str = 'password';
    const hash = await sut.generateHash(str);
    expect(hash).toBeDefined();
    expect(typeof hash).toBe('string');
    const isMatch = await bcrypt.compare(str, hash);
    expect(isMatch).toBe(true);
  });

  it('should compare a string with a hash', async () => {
    const str = 'password';
    const hash = await bcrypt.hash(str, 10);
    const isMatch = await sut.compare(str, hash);
    expect(isMatch).toBe(true);
  });

  it('should return false for a non-matching string and hash', async () => {
    const str = 'password';
    const hash = await bcrypt.hash('differentPassword', 10);
    const isMatch = await sut.compare(str, hash);
    expect(isMatch).toBe(false);
  });
});
