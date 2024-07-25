import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'fede1995',
    database: 'bootcamp2024',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
  };
};
