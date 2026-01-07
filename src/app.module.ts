import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Load .env file
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // PostgreSQL connection
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: Number(config.get('DB_PORT')),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        ssl: config.get('DB_SSL') === 'true'
          ? { rejectUnauthorized: false }
          : false,
        synchronize: false, // VERY IMPORTANT (never true in production)
        autoLoadEntities: true,
      }),
    }),

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
