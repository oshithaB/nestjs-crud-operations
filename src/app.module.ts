import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { testsmodule } from './tests/tests.module';
import { test } from './tests/tests.entity';
import path from 'path';
import {join} from 'path';

@Module({
  imports: [  
    ConfigModule.forRoot(),
 
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [join(process.cwd(),'dist/**/*.entity.js')],
    synchronize: true,
  }),
  inject: [ConfigService],
}),
testsmodule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
