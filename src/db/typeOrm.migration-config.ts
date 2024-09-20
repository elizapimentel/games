import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { GameEntity } from './entities/game.entity';

config();  // Carrega as variáveis de ambiente do .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD || ''),
  database: process.env.DB_NAME,
  schema: 'public',
  entities: [GameEntity],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.ts'],
  migrationsRun: true,
  logging: true,
});

AppDataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!");
})
.catch((err) => {
  console.error("Error during Data Source initialization", err);
});