import { Module } from '@nestjs/common';
import { DbModule } from 'src/infra/db/db.module';
import { EncryptModule } from 'src/infra/encrypt/encrypt.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DbModule, EncryptModule],
})
export class UsersModule {}
