import { Connection, createConnection } from 'typeorm';

import { ConfigService } from '../libs/ConfigService';

export async function createDbConnection(
  configService: ConfigService
): Promise<Connection> {
  const connection = await createConnection({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: ['dist/entities/**/*.js'],
    synchronize: false,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  });
  return connection;
}