import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from './db.service';

describe('DbService', () => {
	let service: DbService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DbService],
		}).compile();

		service = module.get<DbService>(DbService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should connect on module init', async () => {
		const connectSpy = jest
			.spyOn(service, '$connect')
			.mockResolvedValue(undefined);
		await service.onModuleInit();
		expect(connectSpy).toHaveBeenCalled();
	});

	it('should disconnect on module destroy', async () => {
		const disconnectSpy = jest
			.spyOn(service, '$disconnect')
			.mockResolvedValue(undefined);
		await service.onModuleDestroy();
		expect(disconnectSpy).toHaveBeenCalled();
	});
});
