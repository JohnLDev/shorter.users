import 'dotenv/config'
import { UserModel } from '@framework/models/users/userModel'
import { DataSource } from 'typeorm'
const migrationsDir = './src/4-framework/database/migrations/*.ts'

const runningMigrations = process.argv.includes('migration:run')

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  synchronize: false,
  entities: [UserModel],
  logging: false,
  migrations: [runningMigrations ? migrationsDir : ''],
  migrationsRun: false
})
