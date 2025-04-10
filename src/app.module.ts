import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from 'shared-orm-library/dist/database/database.module';

@Module({
  imports: [DatabaseModule.forRoot(), UsersModule],
})
export class AppModule {}