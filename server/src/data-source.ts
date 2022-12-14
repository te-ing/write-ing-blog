import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.HOST,
  port: 3306,
  username: process.env.DB_USER_ID,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // 싱크를 맞추는 과정에서 데이터 유실 가능성이 있기 때문에 운영환경에서는 false
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: [],
  subscribers: [],
  charset: 'utf8mb4',
});
