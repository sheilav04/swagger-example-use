import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
