import { Module } from '@nestjs/common';
import { AuthModule } from './application/auth/auth.module';
import { DatabaseModule } from './domain/database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
