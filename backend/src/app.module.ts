import { Module } from '@nestjs/common';

import { DbModule } from '@infra/db/db.module';
import { EncryptModule } from '@infra/encrypt/encrypt.module';
import { UsersModule } from '@modules/users/users.module';
import { AppController } from './app.controller';

@Module({
	imports: [UsersModule, DbModule, EncryptModule],
	controllers: [AppController],
})
export class AppModule {}
