import { Test, TestingModule } from '@nestjs/testing';

import { DbService } from '@infra/db/db.service';
import { EncryptService } from '@infra/encrypt/encrypt.service';
import { UsersService } from './users.service';

describe('UsersService', () => {
	let sut: UsersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UsersService, EncryptService, DbService],
		}).compile();

		sut = module.get<UsersService>(UsersService);
	});

	it('should be defined', () => {
		expect(sut).toBeDefined();
	});
});
