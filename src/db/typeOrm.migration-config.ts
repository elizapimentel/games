import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { GameEntity } from './entities/game.entity';

config();  // Carrega as variáveis de ambiente do .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
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