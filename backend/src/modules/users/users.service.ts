import { Injectable } from '@nestjs/common';

import { DbService } from '@infra/db/db.service';
import { EncryptService } from '@infra/encrypt/encrypt.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	constructor(
		private readonly db: DbService,
		private readonly encryptService: EncryptService,
	) {}

	async create(createUserDto: CreateUserDto) {
		const hashedPassword = await this.encryptService.generateHash(
			createUserDto.password,
		);

		return await this.db.user.create({
			data: {
				...createUserDto,
				password: hashedPassword,
			},
		});
	}

	async findAll() {
		return await this.db.user.findMany();
	}

	async findOne(id: string) {
		return await this.db.user.findUnique({
			where: { id },
		});
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		return await this.db.user.update({
			where: { id },
			data: updateUserDto,
		});
	}

	async remove(id: string) {
		return await this.db.user.delete({
			where: { id },
		});
	}
}
