import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './infra/db/db.module';
import { UsersModule } from './modules/users/users.module';
import { EncryptModule } from './infra/encrypt/encrypt.module';

@Module({
  imports: [UsersModule, DbModule, EncryptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
